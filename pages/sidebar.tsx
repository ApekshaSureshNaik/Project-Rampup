import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {faClipboardList, faGear, faUser, faUserGroup} from "@fortawesome/free-solid-svg-icons"
import type { NextPage } from 'next'
import styles from '../styles/sidebar.module.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import Image from 'next/image'
import logo from  '../images/logo.jpg'
import Link from 'next/link'

const Sidebar = () => {
 
  return (
    <>
     <ul>
      
    <div className={styles.sidebar}>
    <li>
    <Image
           src={logo}
           width="50px"
           height="50px"
            /> <h3 className={styles.h3}> HEALTH</h3>
             <div className={styles.line}></div>
       </li>
        <li>
    <div className={styles.admin}>
    <FontAwesomeIcon icon={faUser}  
     style={{ 
       height: "16px",
       width: "16px",
       left: "4px",
      top: "4px"
      }} 
      /> <Link href='/admin'> 
      <a className={styles.adminl}> Admin User </a>
      </Link>
     </div>
     </li>
     <li>
    <div className={styles.projects}>
    <FontAwesomeIcon icon={faClipboardList}
    style={{
        height: "18px",
        width: "14.400001525878906px",
        left: "4.8000030517578125px",
        top: "4px"
       }}/> <Link href='/admin'>
         <a className={styles.projectsl}> Projects </a>
         </Link>
       </div>
       </li>
       <li>
       <div className={styles.employee}>
       <FontAwesomeIcon icon={faUserGroup}
       style= {{
        height: "20px",
        width: "20px",
        left: "18px",
        top: "192px",
       }}
       /> <Link href='/admin'> 
       <a className={styles.employeel}> Employees </a></Link>
       </div>
      </li>
      <li>
      <div className={styles.setting}>
      <FontAwesomeIcon icon={faGear}
      style={{
        height: "20.1997013092041px",
        width: "19.199398040771484px", 
        left: "2.400299072265625px",
        top: "2.4000244140625px" 
      }}
      /><Link href='/admin'>
         <a className={styles.settingl}> Settings </a></Link>
       
      </div>
      </li>
      </div>
        </ul> 
       
   </>
  )
}

export default Sidebar



