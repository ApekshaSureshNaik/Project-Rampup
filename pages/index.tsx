import type { NextPage } from 'next'
import MyImage from './image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons"

const Home: NextPage = () => {
 const [type,setType] = useState('password')
 const [showPassword,setshowPassword] = useState(faEyeSlash)
 const togglePasswordVisiblity = () => {
  if(type==='password') {
    setType('text')
    setshowPassword(faEye)
  }
   else {
    setType('password')
    setshowPassword(faEyeSlash)
   }
   

  };
  
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
          <input type={type} id="password" name="password" className={styles.input2} /> 
           <div className={styles.icon}>
           <FontAwesomeIcon
        icon={showPassword}
        style={{ width:20.1,
         height:17.42,
            top:2.75,
               left:0.92, }}
               onClick={togglePasswordVisiblity}
      /></div>
         <div className={styles.pass}>
          <label>Minimun 8 characters with at least 1 number</label>
          </div>
          <button type="submit" className={styles.button}>Login</button>
         <div className={styles.link1}>
          <label>By signing in you agree 
          <Link href=''>
            <a style={{textDecoration: 'none'}}>Terms of service</a> 
          </Link> and 
          <Link href='' >
          <a style={{textDecoration: 'none'}}>Privacy and policy</a>
          </Link></label><br>
          </br></div>
          <Link href='/forgotpass'> 
          <a className={styles.link2}  style={{textDecoration: 'none'}}>Forgot Your Password?</a>
          </Link>
         </div>
         </form>
     
         </main>
  )
}
export default Home
