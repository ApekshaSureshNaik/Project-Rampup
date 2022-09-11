import type { NextPage } from 'next'
import styles from '../styles/Login.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'


const ForgotPass:NextPage= () => {
    return (
        <>
        <label className={styles.forgot}> 
            Forgot Your Password
        </label>

         <label className={styles.instruct}> 
         Enter your email address and we'll send you an email with all the intructions.
         </label> 
         
        <label htmlFor="email" className={styles.elabel}>
            Email
        </label>
          <input type="text" className={styles.einput1} id="email" />

        <button type="submit" className={styles.send}>
            Send me instructions
        </button>

        <label className={styles.cancel}>Cancel </label>
        <FontAwesomeIcon icon={faChevronLeft} className={styles.backicon} />
        <Link href ='/'>
             <a className={styles.back} style={{textDecoration: 'none'}}>
                Back
             </a>
         </Link>
            </>
          )
}

export default ForgotPass