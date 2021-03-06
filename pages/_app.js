import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import '../styles/main.scss';
import {AnimateSharedLayout} from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>İbrahim Gedik - Software Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </Layout>
  )
}

export default MyApp
