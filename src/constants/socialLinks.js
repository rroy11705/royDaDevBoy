import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare,
  FaSlack,
} from "react-icons/fa"

const data = [
  {
    id: '1',
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/rahulRoy1099",
  },
  {
    id: '2',
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/rahul-roy-32a970166/",
  },
  {
    id: '3',
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/rroy11705",
  },
  {
    id: '4',
    icon: <FaSlack className="social-icon"></FaSlack>,
    url: "https://app.slack.com/client/TQE9R60JG/user_profile/UQWNEHHU5",
  }
]


const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link" target="_blank" rel="noopener noreferrer">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
