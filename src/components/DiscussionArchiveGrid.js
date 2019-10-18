import React from "react"
import styled from "styled-components"
import ThemeButton from "./styled-elements/ThemeButton"
import { sephia, secondaryColor } from "../theme/colors"

const DiscussionArchiveGrid = ({ data }) => {
  const guides = data.wordpress.discussionGuide.nodes

  return (
    <Grid>
      {guides.map(block => {
        const { slug, id, months } = block
        const { posts, name } = months.nodes[0]

        return (
          <li>
            <h3 style={{ color: secondaryColor }}>{name}</h3>
            <div className="book-img">
              <img src={posts.nodes[0].BookInfo.bookCover.sourceUrl} alt="" />
            </div>

            <div className="info">
              <h4>{posts.nodes[0].title}</h4>
              <ThemeButton
                to={`${months.nodes[0].slug}/${slug}`}
                style={{ margin: 0 }}
              >
                View Guide
              </ThemeButton>
            </div>
          </li>
        )
      })}
    </Grid>
  )
}

export default DiscussionArchiveGrid
const Grid = styled.ul`
  display: grid;
  padding: 20px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 250px));
  grid-gap: 40px;
  li {
    h3 {
      font-size: 18px;
      margin-bottom: 13px;
    }
    h4 {
      font-size: 24px;
      margin-bottom: 10px;
    }
    list-style: none;
    text-align: center;
    background: ${sephia};
    border-radius: 4px;
    box-shadow: 0 2px 18px rgba(0, 0, 0, 0.2);
    padding: 10px;
    padding-top: 20px;
    .book-img {
      max-height: 300px;
      overflow: hidden;
      margin-bottom: 10px;
    }
    img {
      object-fit: cover;
      object-position: 50% 50%;
      width: 100%;
    }
  }
`
