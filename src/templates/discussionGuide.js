import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ThemeButton from "../components/styled-elements/ThemeButton"

import { contentMaxWidth } from "../theme/widths"
import { screenAbove, screen } from "../theme/mediaQueries"
import { fonts } from "../theme/fonts"
import { primaryColor, secondaryColor } from "../theme/colors"

export const data = graphql`
  query DISCUSSION_GUIDE_QUERY($slug: String!) {
    wordpress {
      discussionGuideBy(slug: $slug) {
        months {
          nodes {
            name
            slug
            posts {
              nodes {
                title
              }
            }
          }
        }
        DiscussionGuide {
          questionsGroup {
            fieldGroupName
            questionSingle
          }
        }
      }
    }
  }
`

const discussionGuide = ({ data }) => {
  const { DiscussionGuide, months } = data.wordpress.discussionGuideBy
  const month = months.nodes[0]
  return (
    <>
      <Seo title="discussion" />
      <Layout>
        <div className="print-me">
          <HeaderInfo>
            <div className="info">
              <h1>Discussion Guide</h1>
              <h2 style={{ color: secondaryColor }}>{month.name}</h2>
              <h3>{month.posts.nodes[0].title}</h3>
            </div>
            <div className="printme">
              <ThemeButton
                as="button"
                onClick={() => {
                  window.print()
                }}
              >
                Print this bad boy!
              </ThemeButton>
            </div>
          </HeaderInfo>
          <Questions>
            <h4>Questions</h4>
            <ol>
              {DiscussionGuide.questionsGroup.map((question, index) => (
                <li key={index}>
                  <span className="question">{question.questionSingle}</span>
                </li>
              ))}
            </ol>
          </Questions>
        </div>
      </Layout>
    </>
  )
}

export default discussionGuide

const HeaderInfo = styled.div`
padding:20px;

${fonts("heading")}
  max-width: ${contentMaxWidth};
  margin: 0 auto;
  margin-bottom:80px;
  @media print {
    margin-bottom: 40px;
  } 
  ${screenAbove(screen.mobile, `display:flex;`)}
  justify-content:space-between;
  

  ${screenAbove(screen.mobile, `padding-top:80px;`)}

  h1{
    font-size:14px;
    margin-bottom:30px;
  }
  h2{
    margin-bottom:10px;
    font-size:20px;
    color:${primaryColor}
  }
  h3{
    font-size:36px;
    ${screenAbove(screen.mobile, `margin-bottom:0;`)}
  }
  .printme{
    align-self:flex-end;
    @media print{
      display:none;
    }
    button{
      margin-right:0;
    }
    
  }
`
const Questions = styled.div`
padding:20px;
${fonts("copy")}
  max-width: ${contentMaxWidth};
  margin: 0 auto;
  h4 {
    font-size: 24px;
    margin-bottom:40px;
  }
  ol,
  ul {

    padding: 0;
  }
  li {
    font-size: 20px;
    margin-bottom: 75px;
    @media print{
      margin-top:100px;
      margin-bottom: 200px;
    }

  }
  .question{
    line-height:1.5;
    display:block;
    padding-left:20px;
  }
`
