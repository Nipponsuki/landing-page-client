import React from "react"
import Header from '../components/Header'
import About from '../components/About'
import How from '../components/How';


import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Токарная обработка металлических деталей" keywords={[`втулки`, `токарная обработка`, `бонки`, `бобышки`, `стойки резьбовые`, `шпильки`]} />
    <Header />
    <About />
    <How />
  </Layout>
)

export default IndexPage
