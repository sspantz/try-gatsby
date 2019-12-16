import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div
    style={{
      color: `puple`,
    }}
  >
    <Link to="/contact/">Contact</Link>
    <Header headerText="Hello Gatsby"></Header>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x300" alt="400x300" />
  </div>
)
