import React ,{useState}from 'react'
import Sidebar from './sidebar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import styles from '../styles/sidebar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell ,faEllipsisVertical, faXmark} from '@fortawesome/free-solid-svg-icons';

// import Paper from '@mui/material/Paper';
// import { Grid, PagingPanel, Table, TableHeaderRow, TableSelection,} from '@devexpress/dx-react-grid-material-ui';
// import { SelectionState } from '@devexpress/dx-react-grid';
// import {<FontAwesomeIcon icon="fa-solid fa-arrow-down-arrow-up" />
//     PagingState
//   } from '@devexpress/dx-react-grid';
import { DataGrid, GridRowsProp, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { Chip } from '@mui/material'
// import { useRouter } from 'next/router'
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import Modal from '../compnents/Modal'


const columns: GridColDef[] = [
  { field: 'id', headerName: 'User ID', width: 150 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'phone', headerName: 'Phone', width: 200 },
  { field: 'roles', headerName: 'Roles', width: 130,renderCell: (cellValues) =>{ return (
    <Chip variant="outlined" className={styles.adminbtn} 
    // onClick={(event) => {
    //   handleClick(event, cellValues);
    // } }
    />
    );}} ,
  { field: 'status', headerName: 'Status', width: 130 },
  { field: 'options', headerName: 'Options', width: 130 , 
  renderCell: (cellValues) => 
  { return (<FontAwesomeIcon icon={faEllipsisVertical} style={{position:'absolute', justifyContent:'center'}}/> )}}
];


const rows: GridRowsProp = [
  { id: 0, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',options:'' },
  { id: 0, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',options:'' },
  { id: 0, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',options:'' },
  { id: 0, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',options:'' },
  { id: 0, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',options:'' },
  { id: 0, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',options:'' },
  { id: 0, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',options:'' },
  { id: 0, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',options:'' },
  { id: 0, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',options:'' },
  { id: 0, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',options:'' },
  { id: 0, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',options:'' },

];

const Admin = () => {
  // const router = useRouter()
  const [showModal,setShowModal] =useState(false)
  
 
  return (
    <>
   
      <div className={styles.container}>
     <Sidebar />
   
     <div className={styles.box} >
     <div id="modal-root"></div>
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
         
        <button className={styles.button} style={{ marginLeft:"1290px", marginTop:"-20px"}} onClick={() => setShowModal(true)} >+ Add User</button>
       

       </div> 
       
        <Modal show={showModal} onClose={() => setShowModal(false)} >    </Modal>

       

      <div className={styles.gridh}> 
      
      <DataGrid 
      sx={{width:"1339px",height:"650px" }}
      rows={rows} 
      columns={columns}
      checkboxSelection
      pageSize={10}

       />
      </div>
        </div>
  </>
  )
}

export default Admin

