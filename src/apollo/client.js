import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"
export const isBrowser = () => typeof window !== "undefined"
const token = isBrowser() && window.localStorage.getItem("token")
console.log(token)
export const client = new ApolloClient({
  uri: "http://shortcutbookclub.local/graphql",
  fetch,
  request: operation => {
    const token = localStorage.getItem("token")
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    })
  },
})
