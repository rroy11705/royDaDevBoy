import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = ({ extraClassName, toggleSidebar }) => {
  return (
    <nav className={extraClassName + " navbar"}>
      <div className="nav-center">
        <div className="nav-header">
          <a href="/"><img src={logo} alt="logo" /></a>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
