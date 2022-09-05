import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell ,faEllipsisVertical, faXmark} from '@fortawesome/free-solid-svg-icons';
import React ,{useState}from 'react'
import { DataGrid, GridRowsProp, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import Sidebar from './sidebar'
import styles from '../styles/sidebar.module.css'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Project ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'client', headerName: 'Client', width: 250 },
    { field: 'project_type', headerName: 'Project Type', width: 200 },
    { field: 'project_res', headerName: 'Project Responsible  ', width: 130} ,
    { field: 'status_date', headerName: 'Status Date', width: 130 },
    { field: 'end_date', headerName: 'End Date', width: 130 },
    { field: 'proj_status', headerName: 'Project Status', width: 130 },
    { field: 'mon_status', headerName: 'Monthly Status', width: 130 },
    { field: 'options', headerName: 'Options', width: 130 , 
    renderCell: (cellValues) => 
    { return (<FontAwesomeIcon icon={faEllipsisVertical} style={{position:'absolute', justifyContent:'center'}} /> )}}
  ];


  const rows: GridRowsProp = [
    { id: 0, name: 'jackson', client: 'Michael David', project_type:'lorem ipsum',project_res:'lorem ipsum',status_date:'01 Aug 2022',end_date:'24 Sep 2022',proj_status:'',mon_status:'',options:'' },
    { id: 0, name: 'jackson', client: 'Michael David', project_type:'lorem ipsum',project_res:'lorem ipsum',status_date:'01 Aug 2022',end_date:'24 Sep 2022',proj_status:'',mon_status:'',options:'' },
    { id: 0, name: 'jackson', client: 'Michael David', project_type:'lorem ipsum',project_res:'lorem ipsum',status_date:'01 Aug 2022',end_date:'24 Sep 2022',proj_status:'',mon_status:'',options:'' },
    { id: 0, name: 'jackson', client: 'Michael David', project_type:'lorem ipsum',project_res:'lorem ipsum',status_date:'01 Aug 2022',end_date:'24 Sep 2022',proj_status:'',mon_status:'',options:'' },
    { id: 0, name: 'jackson', client: 'Michael David', project_type:'lorem ipsum',project_res:'lorem ipsum',status_date:'01 Aug 2022',end_date:'24 Sep 2022',proj_status:'',mon_status:'',options:'' },
    { id: 0, name: 'jackson', client: 'Michael David', project_type:'lorem ipsum',project_res:'lorem ipsum',status_date:'01 Aug 2022',end_date:'24 Sep 2022',proj_status:'',mon_status:'',options:'' },
    { id: 0, name: 'jackson', client: 'Michael David', project_type:'lorem ipsum',project_res:'lorem ipsum',status_date:'01 Aug 2022',end_date:'24 Sep 2022',proj_status:'',mon_status:'',options:'' },
    { id: 0, name: 'jackson', client: 'Michael David', project_type:'lorem ipsum',project_res:'lorem ipsum',status_date:'01 Aug 2022',end_date:'24 Sep 2022',proj_status:'',mon_status:'',options:'' },
    { id: 0, name: 'jackson', client: 'Michael David', project_type:'lorem ipsum',project_res:'lorem ipsum',status_date:'01 Aug 2022',end_date:'24 Sep 2022',proj_status:'',mon_status:'',options:'' },
    { id: 0, name: 'jackson', client: 'Michael David', project_type:'lorem ipsum',project_res:'lorem ipsum',status_date:'01 Aug 2022',end_date:'24 Sep 2022',proj_status:'',mon_status:'',options:'' },
    { id: 0, name: 'jackson', client: 'Michael David', project_type:'lorem ipsum',project_res:'lorem ipsum',status_date:'01 Aug 2022',end_date:'24 Sep 2022',proj_status:'',mon_status:'',options:'' },
    { id: 0, name: 'jackson', client: 'Michael David', project_type:'lorem ipsum',project_res:'lorem ipsum',status_date:'01 Aug 2022',end_date:'24 Sep 2022',proj_status:'',mon_status:'',options:'' },
    { id: 0, name: 'jackson', client: 'Michael David', project_type:'lorem ipsum',project_res:'lorem ipsum',status_date:'01 Aug 2022',end_date:'24 Sep 2022',proj_status:'',mon_status:'',options:'' },
    { id: 0, name: 'jackson', client: 'Michael David', project_type:'lorem ipsum',project_res:'lorem ipsum',status_date:'01 Aug 2022',end_date:'24 Sep 2022',proj_status:'',mon_status:'',options:'' }
  ];

  const Employee = () => {
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
              Employees</label>
            <input type="text" className={styles.search} 
            style={{alignContent:"center", justifyContent:"center", marginLeft:"250px", marginTop:"-45px" }} 
            placeholder="Search"></input>
            <button className={styles.addemp} style={{ marginLeft:"1290px", marginTop:"-20px"}} onClick={() => setShowModal(true)} >+ Add Employee</button>
        
           </div> 
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

  export default Employee
