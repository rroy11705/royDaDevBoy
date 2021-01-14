import React from "react"
import SocialLinks from "../constants/socialLinks"
import Emoji from "./Emoji"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>
          Website Made with
          <Emoji symbol="❤️" label="Love"/>
          by Rahul Roy © 2021
        </h4>
      </div>
    </footer>
  )
}

export default Footer