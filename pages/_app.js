import { Fragment } from 'react'
import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'

const  MyApp = ({ Component, pageProps }) =>{
  return (
    <Fragment>
      <Head>
        <title>Teste Técnico Ammo Varejo</title>
        <meta name="description" content="Teste Técnico - Front-End para o E-Commerce da AMMO Varejo" />
      </Head>

      <Header/>
      <Component {...pageProps} />
      <Footer/>

    </Fragment>
  )
}

export default MyApp
