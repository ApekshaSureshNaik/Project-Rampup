import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 

const ForgotPass:NextPage= () => {
    return (
        <main className={styles.main}>
        <h2 className={styles.forgot}> Forgot Your Password</h2>
         <h5 className={styles.instruct}> Enter your email address and we'll send you an email with all the intructions.</h5> 
         <div className={styles.elabel}>
        <label htmlFor="email" >Email</label></div>
          <input type="text" className={styles.einput} id="email" name="email" />
          <button type="submit" className={styles.send}>Send me instructions</button>
          <label className={styles.cancel}>Cancel </label>

        <Link href ='/'>
             <a className={styles.back} style={{textDecoration: 'none'}}>
                Back
             </a>
            </Link>
        
         </main>
          )
}

export default ForgotPass