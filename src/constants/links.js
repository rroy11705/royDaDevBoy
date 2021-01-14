import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "home",
    linkClass: null,
    url: "/",
  },
  {
    id: 2,
    text: "about",
    linkClass: null,
    url: "/about/",
  },
  {
    id: 3,
    text: "projects",
    linkClass: null,
    url: "/projects/",
  },
  {
    id: 4,
    text: "CONTACT",
    linkClass: 'btn',
    url: "/contact/",
  },
  {
    id: 5,
    text: "GET CV",
    linkClass: 'btn',
    target: '_blank',
    url: "https://drive.google.com/file/d/1zYssPR0oXNe46KZ9FduawY6nML0DaedE/view?usp=sharing",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      {
        link.target === '_blank' ? 
        <a className={link.linkClass ? link.linkClass : ''} target={link.target} href={link.url}>{link.text}</a> : 
        <Link className={link.linkClass ? link.linkClass : ''} to={link.url}>{link.text}</Link>
      }
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
