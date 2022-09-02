import React ,{useState}from 'react'
import Sidebar from './sidebar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import styles from '../styles/sidebar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';
// import Paper from '@mui/material/Paper';
// import { Grid, PagingPanel, Table, TableHeaderRow, TableSelection,} from '@devexpress/dx-react-grid-material-ui';
// import { SelectionState } from '@devexpress/dx-react-grid';
// import {
//     PagingState
//   } from '@devexpress/dx-react-grid';


const admin = () => {
    const columns = [ 
        { name: 'id', title: 'User ID' },
        { name: 'name', title: 'Name' },
        { name: 'email', title: 'Email' },
        { name: 'phone', title: 'Phone' },
        { name: 'roles', title: 'Roles' },
        { name: 'status', title: 'Status' },
        { name: 'options', title: 'Options' }
      ];

   const rows = [
         { id: 0, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',option:'' },
         { id: 0, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',option:'' },
         { id: 0, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',option:'' },
         { id: 0, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',option:'' },
         { id: 0, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',option:'' },
         { id: 0, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',option:'' },
         { id: 0, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',option:'' },
         { id: 0, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',option:'' },
         { id: 0, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',option:'' },
         { id: 0, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',option:'' },
         { id: 0, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',option:'' },
       
      ];
   
  return (
    <>
    <Head>
    
    </Head>
     <Sidebar />
     <div className={styles.container}>
     <div className={styles.box} >
      
     <FontAwesomeIcon icon={faBell} style={{
      position: "absolute",
      left: "15%",
      right: "15%",
      top: "10%",
      bottom: "10%",
      /* cool-gray/900 */
     color: "#111928",
     marginLeft: "1150px",
     backgroundColor: "white"
}} />
     </div>
      <div className={styles.box1}>
        <label htmlFor="Admin" style={{ 
           width: "204px",
           height: "27px",
           top:"10px",
           fontFamily:"Inter",
           fontStyle: "normal",
           fontWeight: "600px",
           fontSize: "18px",
           lineHeight: "50px",
           color:"#111928",
           flex:"none",
           order:"0",
           flexGrow:"0"
        }}>
          Admin Users</label>
        <input type="text" className={styles.search} 
        style={{alignContent:"center", justifyContent:"center", marginLeft:"250px", marginTop:"-45px" }} 
        placeholder="Search"></input>
        <button className={styles.button} style={{ marginLeft:"1290px", marginTop:"-20px"}}>+ Add User</button>
       </div>
      <div className={styles.gridh}>
  
      {/* <Paper>
      <Grid
        rows={rows}
        columns={columns}
      >
        <SelectionState/>
        <Table />
        <PagingState
          defaultCurrentPage={0}
          pageSize={10}/>

        <TableHeaderRow />
        
        <TableSelection />
        <div className={styles.page}>
        <PagingPanel />
        </div>
      </Grid>
    </Paper> */}
      </div>  
      </div> 
  </>
  )
}

export default admin