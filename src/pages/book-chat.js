import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import { useQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { sephia } from "../theme/colors"
import { fonts } from "../theme/fonts"
import { hidden } from "ansi-colors"

const CHAT_ON_QUERY = gql`
  query {
    pages(where: { title: "short cut book club" }) {
      nodes {
        SiteData {
          isChatOn
        }
      }
    }
  }
`

const Chat = () => {
  const { data, error, loading } = useQuery(CHAT_ON_QUERY)

  return (
    <Layout style={{}}>
      <SEO title="Chat" />
      <div
        style={{
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {typeof window !== "undefined" && loading ? (
          <p>loading...</p>
        ) : data ? (
          data.pages.nodes[0].SiteData.isChatOn ? (
            <iframe
              src="https://titanembeds.com/embed/636207765425225729?css=23"
              frameBorder="0"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
            ></iframe>
          ) : (
            <CardBackground>
              <Card>
                <h3>Please Come Back Later</h3>
                <p>
                  We are not discussing anything at this time please come back
                  later to chat with us about super cool books
                </p>
              </Card>
            </CardBackground>
          )
        ) : (
          <h1>
            We are not discussing anything at this time please come back later
            to chat with us about super cool books
          </h1>
        )}
      </div>
    </Layout>
  )
}

export default Chat
const CardBackground = styled.div`
  background: ${sephia};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`
const Card = styled.div`
  ${fonts("heading")};
  text-align: center;
  h3 {
    line-height: 1.23;
    margin-bottom: 10px;
  }
  p {
    ${fonts("copy")};
  }
  max-width: 300px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),
    0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 30px 20px 20px;
`
