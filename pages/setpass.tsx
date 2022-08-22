import type { NextPage } from 'next'
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'

const SetPass: NextPage = () => {
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
    <h1 className={styles.title2}>Set new password</h1>
    <h6 className={styles.instruct1}>Your new password must be different from previous used passwords.</h6>
    <h6 className={styles.password1}>Password</h6>
    <input type={type} id="password" name="password" className={styles.passwordInput1} /> 
        <div className={styles.icon1}>
           <FontAwesomeIcon
        icon={showPassword}
        style={{ width:20.1,
         height:17.42,
            top:2.75,
               left:0.92, }}
               onClick={togglePasswordVisiblity}
      /></div>
        <h6 className={styles.passwordrequire1}>Minimum 8 characters with at least 1 number</h6>
        <h6 className={styles.password2}>Password</h6>
        <input type={type} id="password" name="password" className={styles.passwordInput2} /> 
        <div className={styles.icon2}>
           <FontAwesomeIcon
        icon={showPassword}
        style={{ width:20.1,
         height:17.42,
            top:2.75,
               left:0.92, }}
               onClick={togglePasswordVisiblity}
      /></div>
        <h6 className={styles.passwordrequire2}>Both password must match</h6>
        <button type="submit" className={styles.ResetPassword} >
        Reset Password
        </button>
        <p className={styles.cancel1}>
        Cancel</p>
    
        <Link href="/"><a className={styles.back} style={{textDecoration:'none'}}>Back</a></Link>
    </main>
);
};
export default SetPass;