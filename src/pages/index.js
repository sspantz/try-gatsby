import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <Header headerText="Hello Gatsby"></Header>
    <h1>Hi, I'm building a fake Gatsby site as part of a tutorial</h1>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x300" alt="400x300" />
  </Layout>
)
