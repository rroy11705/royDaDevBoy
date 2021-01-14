
import React, { useState, useEffect, useRef } from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [navBackground, setNavBackground] = useState('transparent')
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const navRef = useRef()
  navRef.current = navBackground

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setNavBackground('opaque');
      }
      else {
        setNavBackground('transparent');
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Navbar extraClassName={navRef.current} toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout