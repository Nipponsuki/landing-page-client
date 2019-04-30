import React from "react"
import Header from "../components/header"
import About from "../components/About/About"
import How from "../components/How"
import Gallery from "../components/Gallery"
import Contacts from "../components/Contact"
import Footer from "../components/Footer"
import Fade from "react-reveal/Fade"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Токарная обработка металлических деталей,втулки,бонки,бобышки,стойки резьбовые,шпильки"
      keywords={[
        `втулки`,
        `токарная обработка`,
        `бонки`,
        `бобышки`,
        `стойки резьбовые`,
        `шпильки`,
      ]}
    />
    <Header />
    <About />
    <Fade>
      <How />
    </Fade>
    <Gallery />
    <Contacts />
    <Footer />
  </Layout>
)

export default IndexPage
