import type { NextPage } from 'next'
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 

const ResetPassword: NextPage =() => {
    return (
        <main className={styles.main}>
        <h1 className={styles.passreset}>Password Reset</h1>
        <h6 className={styles.success}>Your password has been successfully reset. Click below to log in magically</h6>
        <button type="submit" className={styles.continue} >Continue</button>
        <Link href="/"><a className={styles.back} style={{textDecoration:'none'}}>Back</a></Link>
        </main>
         ) 
    };

export default ResetPassword;