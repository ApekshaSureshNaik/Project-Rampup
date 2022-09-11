import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from '../styles/Login.module.css'
import bg from '../images/bg.jpg'
import im from '../images/img.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'


const Login = () => {
    const [email, setEmail]= useState('')
    const [password, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState('')
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
    
     const router = useRouter()
    
     useEffect(() =>  {
        setErrMsg('')
     }, [email, password] )
     
    
    //  const handleSubmit = async (e: { preventDefault: () => void }) => {
    //   console.log(email,pwd)
    //   setEmail('')
    //   setPwd('')
    //   setSuccess('true')
    //  }

     async function handleSubmit (e:any) {
        e.preventDefault();
          const req={
          "user" : {
          email : email,
          password : password
          }
        }
          
        await axios.post(' https://floating-falls-55336.herokuapp.com/users/sign_in', req)
        .then((response)=> {
          const res = response ;
         console.log( res);
         router.push("./Admin")
          
         } )
         .catch((error) => {
          console.error("Error:",error); 
        })
    }

  return (
    <>
   
   
    <div className={styles.img}>
      <Image  
         src={bg}
         alt="Background image"
         width= {901}
         height= {676}    
         layout="fixed"
       />
    </div>

    <div  className={styles.icon}>
      <Image 
         src={im}
         width= {118}
         height= {91}
       />
    </div>
   
    <label className={styles.heading} > Log In</label>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email' className={styles.email}>Email</label>
         <input type="email" value={email} className={styles.einput} onChange={(e) => setEmail(e.target.value)} id="email" required/>

        <label htmlFor="password" className={styles.password}>Password</label>
          <input type={type} id="password" value={password}
            onChange={(e) => setPwd(e.target.value)}
               className={styles.pinput} 
               required 
               pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8}"
               title="Password should be digits (0 to 9) or alphabets (a to z)."/>

        <div className={styles.eyeicon}>
           <FontAwesomeIcon
              icon={showPassword}
              style={{ width:20.12222, height:17.42, top:2.75,left:0.92, }}
              onClick={togglePasswordVisiblity} />
        </div>

        <label className={styles.req}>
            Minimun 8 characters with at least 1 number
        </label>
 
        <button type="button" className={styles.button}
        onClick={handleSubmit}
      //  onClick={() => router.push('/admin')}
         >
            Log In
        </button>

        <div className={styles.link1}>
            <label>By signing in you agree 
              <Link href=''>
                 <a style={{textDecoration: 'none',color: '#1996fc'}}> Terms of service</a> 
              </Link> and 
              <Link href='' >
                <a style={{textDecoration: 'none',color: '#1996fc'}}> Privacy and policy</a>
              </Link>
            </label>
        </div>
        
        <Link href='/ForgotPassword'> 
           <a className={styles.link2}  style={{textDecoration: 'none'}} onClick={() => router.push("/ForgotPassword")} >Forgot Your Password?</a>
        </Link>
        

      </form>
       
    </>
  )
  
}

export default Login