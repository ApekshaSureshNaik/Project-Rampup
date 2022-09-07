import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell ,faEllipsisVertical, faXmark} from '@fortawesome/free-solid-svg-icons';
import React ,{useState}from 'react'
import { DataGrid, GridRowsProp, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import Sidebar from './sidebar'
import styles from '../styles/sidebar.module.css'
import Modal from '../compnents/ModalEmp'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Employee ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'project_name', headerName: 'Project Name', width: 200,
    renderCell: (cellValues) =>{ return (
      <Button variant="outlined" className={styles.empbtn} 
      // onClick={(event) => {
      //   handleClick(event, cellValues);
      // } }
      > lorem ipsum </Button>
      );} },
    { field: 'skills', headerName: 'Skills  ', width: 130,
     renderCell: (cellValues) =>{ return (
      <Button variant="outlined" className={styles.empbtn} 
      // onClick={(event) => {
      //   handleClick(event, cellValues);
      // } }
      > Front End</Button>
      );}} ,
    { field: 'emp_type', headerName: 'Employee Type', width: 130 },
    { field: 'join_date', headerName: 'Joining Date', width: 130 },
    { field: 'salary', headerName: 'Salary', width: 130 },
    { field: 'utilization', headerName: 'Utilization', width: 130 },
    { field: 'revenue', headerName: 'Revenu Opportunity' },
    { field: 'options', headerName: 'Options', width: 130 , 
    renderCell: (cellValues) => 
    { return (<FontAwesomeIcon icon={faEllipsisVertical} style={{position:'absolute', justifyContent:'center'}} /> )}}
  ];


  const rows: GridRowsProp = [
    { id: 0, name: 'jackson', email:'jackson.jack@econsent.com',project_name:<button className={styles.empbtn}>lorem ipsum</button>,skills:<button className={styles.empbtn}>Front End</button>,emp_type:'lorem ipsum',join_date:'lorem ipsum', salary:'lorem ipsum',utilization:'lorem ipsum',revenue:'lorem ipsum',options:'' },
    { id: 0, name: 'jackson', email:'jackson.jack@econsent.com',project_name:<button className={styles.empbtn}>lorem ipsum</button>,skills:<button className={styles.empbtn}>Front End</button>,emp_type:'lorem ipsum',join_date:'lorem ipsum', salary:'lorem ipsum',utilization:'lorem ipsum',revenue:'lorem ipsum',options:'' },
    { id: 0, name: 'jackson', email:'jackson.jack@econsent.com',project_name:<button className={styles.empbtn}>lorem ipsum</button>,skills:<button className={styles.empbtn}>Front End</button>,emp_type:'lorem ipsum',join_date:'lorem ipsum', salary:'lorem ipsum',utilization:'lorem ipsum',revenue:'lorem ipsum',options:'' },
    { id: 0, name: 'jackson', email:'jackson.jack@econsent.com',project_name:<button className={styles.empbtn}>lorem ipsum</button>,skills:<button className={styles.empbtn}>Front End</button>,emp_type:'lorem ipsum',join_date:'lorem ipsum', salary:'lorem ipsum',utilization:'lorem ipsum',revenue:'lorem ipsum',options:'' },
    { id: 0, name: 'jackson', email:'jackson.jack@econsent.com',project_name:<button className={styles.empbtn}>lorem ipsum</button>,skills:<button className={styles.empbtn}>Front End</button>,emp_type:'lorem ipsum',join_date:'lorem ipsum', salary:'lorem ipsum',utilization:'lorem ipsum',revenue:'lorem ipsum',options:'' },
    { id: 0, name: 'jackson', email:'jackson.jack@econsent.com',project_name:<button className={styles.empbtn}>lorem ipsum</button>,skills:<button className={styles.empbtn}>Front End</button>,emp_type:'lorem ipsum',join_date:'lorem ipsum', salary:'lorem ipsum',utilization:'lorem ipsum',revenue:'lorem ipsum',options:'' },
    { id: 0, name: 'jackson', email:'jackson.jack@econsent.com',project_name:<button className={styles.empbtn}>lorem ipsum</button>,skills:<button className={styles.empbtn}>Front End</button>,emp_type:'lorem ipsum',join_date:'lorem ipsum', salary:'lorem ipsum',utilization:'lorem ipsum',revenue:'lorem ipsum',options:'' },
    { id: 0, name: 'jackson', email:'jackson.jack@econsent.com',project_name:<button className={styles.empbtn}>lorem ipsum</button>,skills:<button className={styles.empbtn}>Front End</button>,emp_type:'lorem ipsum',join_date:'lorem ipsum', salary:'lorem ipsum',utilization:'lorem ipsum',revenue:'lorem ipsum',options:'' },
    { id: 0, name: 'jackson', email:'jackson.jack@econsent.com',project_name:<button className={styles.empbtn}>lorem ipsum</button>,skills:<button className={styles.empbtn}>Front End</button>,emp_type:'lorem ipsum',join_date:'lorem ipsum', salary:'lorem ipsum',utilization:'lorem ipsum',revenue:'lorem ipsum',options:'' },
    { id: 0, name: 'jackson', email:'jackson.jack@econsent.com',project_name:<button className={styles.empbtn}>lorem ipsum</button>,skills:<button className={styles.empbtn}>Front End</button>,emp_type:'lorem ipsum',join_date:'lorem ipsum', salary:'lorem ipsum',utilization:'lorem ipsum',revenue:'lorem ipsum',options:'' },
    { id: 0, name: 'jackson', email:'jackson.jack@econsent.com',project_name:<button className={styles.empbtn}>lorem ipsum</button>,skills:<button className={styles.empbtn}>Front End</button>,emp_type:'lorem ipsum',join_date:'lorem ipsum', salary:'lorem ipsum',utilization:'lorem ipsum',revenue:'lorem ipsum',options:'' },
    { id: 0, name: 'jackson', email:'jackson.jack@econsent.com',project_name:<button className={styles.empbtn}>lorem ipsum</button>,skills:<button className={styles.empbtn}>Front End</button>,emp_type:'lorem ipsum',join_date:'lorem ipsum', salary:'lorem ipsum',utilization:'lorem ipsum',revenue:'lorem ipsum',options:'' },
    { id: 0, name: 'jackson', email:'jackson.jack@econsent.com',project_name:<button className={styles.empbtn}>lorem ipsum</button>,skills:<button className={styles.empbtn}>Front End</button>,emp_type:'lorem ipsum',join_date:'lorem ipsum', salary:'lorem ipsum',utilization:'lorem ipsum',revenue:'lorem ipsum',options:'' },
    { id: 0, name: 'jackson', email:'jackson.jack@econsent.com',project_name:<button className={styles.empbtn}>lorem ipsum</button>,skills:<button className={styles.empbtn}>Front End</button>,emp_type:'lorem ipsum',join_date:'lorem ipsum', salary:'lorem ipsum',utilization:'lorem ipsum',revenue:'lorem ipsum',options:'' },
    { id: 0, name: 'jackson', email:'jackson.jack@econsent.com',project_name:<button className={styles.empbtn}>lorem ipsum</button>,skills:<button className={styles.empbtn}>Front End</button>,emp_type:'lorem ipsum',join_date:'lorem ipsum', salary:'lorem ipsum',utilization:'lorem ipsum',revenue:'lorem ipsum',options:'' },
    { id: 0, name: 'jackson', email:'jackson.jack@econsent.com',project_name:<button className={styles.empbtn}>lorem ipsum</button>,skills:<button className={styles.empbtn}>Front End</button>,emp_type:'lorem ipsum',join_date:'lorem ipsum', salary:'lorem ipsum',utilization:'lorem ipsum',revenue:'lorem ipsum',options:'' },
    { id: 0, name: 'jackson', email:'jackson.jack@econsent.com',project_name:<button className={styles.empbtn}>lorem ipsum</button>,skills:<button className={styles.empbtn}>Front End</button>,emp_type:'lorem ipsum',join_date:'lorem ipsum', salary:'lorem ipsum',utilization:'lorem ipsum',revenue:'lorem ipsum',options:'' },
    { id: 0, name: 'jackson', email:'jackson.jack@econsent.com',project_name:<button className={styles.empbtn}>lorem ipsum</button>,skills:<button className={styles.empbtn}>Front End</button>,emp_type:'lorem ipsum',join_date:'lorem ipsum', salary:'lorem ipsum',utilization:'lorem ipsum',revenue:'lorem ipsum',options:'' },

    
    
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

  export default Employee
