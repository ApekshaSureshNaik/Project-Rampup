import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Login from './Login'

const Home: NextPage = () => {
  return (
  //   <Head>
  //   <title>Login Page</title>
  // </Head>
    <div className={styles.container}>
     
        <Login />
      </div>
  )
}

export default Home
