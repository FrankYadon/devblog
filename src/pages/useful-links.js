import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const UsefulLinks = () => (
  <div>
    <Layout>
      <SEO title="Useful Links" />
      <h1>Useful Links</h1>
      <div>
        <a href="https://reactjs.org">React</a>
      </div>
      <div>
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
      <div>
        <a href="https://www.netlify.com">Netlify</a>
      </div>
    </Layout>
  </div>
)

export default UsefulLinks
