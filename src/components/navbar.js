import React from "react"
import { Link } from "gatsby"

const NavBar = () => (
  <div style={{ backgroundColor: "#888", paddingTop: "10px" }}>
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/projects/">Projects</Link>
      </li>
      <li>
        <Link to="/useful-links/">Useful Links</Link>
      </li>
      <li>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </div>
)

export default NavBar
