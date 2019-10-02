import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"

const USER_QUERY = gql`
  query USER_QUERY {
    viewer {
      userId
      username
    }
  }
`

const Me = () => {
  const { data, loading, error } = useQuery(USER_QUERY)

  if (loading) return <p>loading...</p>
  if (error) return <p>{`error ${error}`}</p>

  if (window.localStorage.getItem("userID")) {
    console.log(data)
    return <p>{data.viewer.username}</p>
  } else {
    return <p>LOGIN</p>
  }
}

export default Me
