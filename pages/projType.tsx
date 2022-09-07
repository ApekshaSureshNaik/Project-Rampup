import React ,{useState}from 'react'
import Sidebar from './sidebar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import styles from '../styles/sidebar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell ,faEllipsisVertical, faXmark} from '@fortawesome/free-solid-svg-icons';
import { DataGrid, GridRowsProp, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import Modal from '../compnents/ModalPType'


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'description', headerName: 'Description', width: 150 },
    { field: 'status', headerName: 'Status', width: 250 },
    { field: 'options', headerName: 'Options', width: 130 , 
    renderCell: (cellValues) => 
    { return (<FontAwesomeIcon icon={faEllipsisVertical} style={{position:'absolute', justifyContent:'center'}}/> )}}
  ];

  const rows: GridRowsProp = [
    {id:'0',name:'Jackson',description:'Lorem Ipsum is simply dummy text of printing...',status:'Active',option:''},
    {id:'0',name:'Jackson',description:'Lorem Ipsum is simply dummy text of printing...',status:'Active',option:''},
    {id:'0',name:'Jackson',description:'Lorem Ipsum is simply dummy text of printing...',status:'Active',option:''},
    {id:'0',name:'Jackson',description:'Lorem Ipsum is simply dummy text of printing...',status:'Active',option:''},
    {id:'0',name:'Jackson',description:'Lorem Ipsum is simply dummy text of printing...',status:'Active',option:''},
    {id:'0',name:'Jackson',description:'Lorem Ipsum is simply dummy text of printing...',status:'Active',option:''},
    {id:'0',name:'Jackson',description:'Lorem Ipsum is simply dummy text of printing...',status:'Active',option:''},
    {id:'0',name:'Jackson',description:'Lorem Ipsum is simply dummy text of printing...',status:'Active',option:''},
    {id:'0',name:'Jackson',description:'Lorem Ipsum is simply dummy text of printing...',status:'Active',option:''},
    {id:'0',name:'Jackson',description:'Lorem Ipsum is simply dummy text of printing...',status:'Active',option:''}

  ];

const projType = () => {
    const [showModal,setShowModal] =useState(false)
  return (
    <> <div className={styles.container}>
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
         Project Type</label>
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
       </div></>
  )
}

export default projType