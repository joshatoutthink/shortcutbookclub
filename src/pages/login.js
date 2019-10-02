import React, { useState } from "react"
import { graphql } from "gatsby"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { gql } from "apollo-boost"

export const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($username: String!, $password: String!) {
    userLogin: login(
      input: {
        username: $username
        password: $password
        clientMutationId: "blah"
      }
    ) {
      authToken
      user {
        id
      }
    }
  }
`

const USER_QUERY = gql`
  query MyQuery($ID: ID!) {
    user(id: $ID) {
      username
      id
      name
      nickname
      email
    }
  }
`

const Login = () => {
  const [userName, setUserName] = useState("")
  const [userPassword, setUserPassword] = useState("")

  const [userLogin, { loading, error, data }] = useMutation(LOGIN_MUTATION, {
    variables: {
      username: userName,
      password: userPassword,
    },
    onCompleted({ userLogin }) {
      typeof window !== "undefined" &&
        localStorage.setItem("token", userLogin.authToken)
      localStorage.setItem("userID", userLogin.user.id)
    },
  })
  if (loading) return <p>loading...</p>
  if (error) return <p>{`error ${error}`}</p>
  //if (queryData.error) return <p>error: {queryData.error.}</p>
  return (
    <div>
      <form>
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
        <input
          type="password"
          name="userPassword"
          value={userPassword}
          onChange={e => setUserPassword(e.target.value)}
        />
        <button type="button" onClick={userLogin}>
          login
        </button>
      </form>
    </div>
  )
}

export default Login
