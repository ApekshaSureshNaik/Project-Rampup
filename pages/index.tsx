import type { NextPage } from 'next'
import MyImage from './image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons"
import axios from 'axios'



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
  const getlogin = async () =>{
    const req = {
      "user": {
        "email":"pk@gmail.com",
        "password":"XyZ@1998"
      }
    }
    const response =await axios.post("https://floating-falls-55336.herokuapp.com/")
    console.log(response)
    return `{
      "accessToken":"1234",
      "refreshToken":"1234"
    }`
  }
  
  return (
     <div className={styles.main}> 
       <MyImage />
          <div className={styles.h2}>
      <label>Log In</label>
        </div>
      <form>
        <br></br>
    {/* <div className={styles.box}>  */}
        <div className={styles.login1}>
        <label htmlFor="email" >Email</label></div>
          <input type="email" className={styles.input1} id="email" name="email" required/>
         
          <div className={styles.login2}> 
          <label htmlFor="password">Password</label></div>
          <input type={type} id="password" name="password" 
               className={styles.input2} 
               required 
               pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8}"
               title="Password should be digits (0 to 9) or alphabets (a to z)."/> 

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
         {/* </div>  */}
         </form>
     
         </div>
  )
}
export default Home
