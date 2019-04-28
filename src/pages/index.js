import React from "react"
import Header from '../components/Header'
import About from '../components/About'


import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`втулки`, `токарная обработка`, `бонки`,`бобышки`, `стойки резьбовые`, `шпильки`]} />
    <Header />
    <About />
  </Layout>
)

export default IndexPage
