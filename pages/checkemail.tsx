import type { NextPage } from 'next'
import Link from 'next/link';
import styles from '../styles/Home.module.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 

const CheckMail: NextPage =() => {
    return (
        <main className={styles.main}>
          <h1 className={styles.checkyourmail}>Check your email</h1>
          <h6 className={styles.instruction}>We sent a password reset link to <b>bingwen@hotmail.com</b></h6>
          <p className={styles.ques}>Didn't receive the email? 
          <Link href="">
            <a style={{textDecoration: 'none'}}> Click to resend </a></Link></p>
          <p >
        <Link href="/"><a className={styles.back} style={{textDecoration: 'none'}}>Back</a></Link></p>
        </main>
         ); 
    };
export default CheckMail ;