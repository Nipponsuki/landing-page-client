import React from "react"
import Header from '../components/header';
import About from '../components/About/About';
import How from '../components/How';


import Layout from "../components/Layout"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Токарная обработка металлических деталей" keywords={[`втулки`, `токарная обработка`, `бонки`, `бобышки`, `стойки резьбовые`, `шпильки`]} />
    <Header />
    <About />
    <How />
  </Layout>
)

export default IndexPage


{/* <SEO title="Токарная обработка металлических деталей" keywords={[`втулки`, `токарная обработка`, `бонки`, `бобышки`, `стойки резьбовые`, `шпильки`]} /> */}
