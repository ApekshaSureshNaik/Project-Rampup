import type { NextPage } from 'next'
import MyImage from './image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 

const Home: NextPage = () => {
  return (
     <main className={styles.main}> 
       <MyImage />
          <div className={styles.h2}>
      <h2>Log In</h2>
        </div>
      <form>
    <div className={styles.box}>
        <div className={styles.login1}>
        <label htmlFor="email" >Email</label></div>
          <input type="text" className={styles.input1} id="email" name="email" />
         
          <div className={styles.login2}> 
          <label htmlFor="password">Password</label></div>
          <input type="text" id="password" name="password" className={styles.input2} /> 
         
         <div className={styles.pass}>
          <label>Minimun 8 characters with at least 1 number</label>
          </div>
          <button type="submit" className={styles.button}>Login</button>
         <div className={styles.link1}>
          <label>By signing in you agree 
          <Link href={''}>
            <a>Terms of service</a> 
          </Link> and 
          <Link href=''>
          <a >Privacy and policy</a>
          </Link></label><br>
          </br></div>
          <Link href='/forgot'> 
          <a className={styles.link2} >Forgot Your Password?
          </a>
          </Link>
         </div>
         </form>
     
         </main>
  )
}
export default Home
