import React from 'react'
import { Link } from "react-router-dom"
// import About from "./About"
// import Blog from "./Blog"
import "../componentcss/navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to ="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  )
}
