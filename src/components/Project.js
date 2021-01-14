import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({ description, title, github, stack, descriptionPoints, url, image, index }) => {
  return (
    <article className="project">
      {image && (
        <Image fluid={image.childImageSharp.fluid} className="project-img" />
      )}
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>
          {title || "default title"} 
          <span className="project-links">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <FaGithubSquare className="project-icon" />
              </a>
            )}
            {url && (
              <a href={url} target="_blank" rel="noopener noreferrer">
                <FaShareSquare className="project-icon" />
              </a>
            )}
          </span>
        </h3>
        <p className="project-desc">{description}</p>
        {descriptionPoints.map(item => {
          return (
            <div key={item.id} className="job-desc">
              <svg width="16" height="16" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5" fill="#776CE1"/>
              </svg>
              <p>{item.name}</p>
            </div>
          )
        })}
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.name}</span>
          })}
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
  descriptionPoints: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project