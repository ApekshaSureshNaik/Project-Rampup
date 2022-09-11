import * as React from 'react';
import { CSSObject, styled, Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import logo from  '../images/logo.jpg'
import Image from 'next/image'
import CssBaseline from '@mui/material/CssBaseline';
import styles from '../styles/SideBar.module.css'
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import SettingsIcon from '@mui/icons-material/Settings';
import { DataGrid, GridRowsProp, GridColDef, GridRenderCellParams, GridColumnIcon, GridRowModel, GridColumns, GridRowId } from '@mui/x-data-grid'
import { AppBar, Avatar, Button, Chip, Toolbar } from '@mui/material'
import Option from './OptionAdmin'
import Modal from './AdminModal'
import DoneIcon from '@mui/icons-material/Done'

const drawerWidth = 250;


const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    background:"#1996Fc",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    '.MuiListItemIcon-root': {
      color: 'white',
    },
    '& .MuiListItemButton-root': {
      color: '#ffffff',
    },
     // selected and (selected + hover) states
  '&& .Mui-selected, && .Mui-selected:hover': {
    backgroundColor: '#FFFFFF',
    '&, & .MuiListItemIcon-root': {
      color: '#1996Fc',
    },
  },
  // hover states
  '& .MuiListItemButton-root:hover': {
    backgroundColor: 'White',
    '&, & .MuiListItemIcon-root': {
      color: '#1996Fc',
    },
  },
  });
  
  const closedMixin = (theme: Theme): CSSObject => ({
    background:"#1996Fc",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });


  const columns: GridColDef[] = [
    { field: 'id', headerName: 'User ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'phone', headerName: 'Phone', width: 200 },
    { field: 'roles', headerName: 'Roles', width: 130,
    renderCell: (params : any) =>{
       return (
      <Chip 
      label={params.row.role}
      variant="outlined" 
      className={styles.adminbtn} 
      />
      );}} ,
    { field: 'status', headerName: 'Status', width: 130,
    renderCell:(params) =>{
      return (
        <DoneIcon fontSize='small' sx={{color:'#77F6'}}/>
      )

    } },
    { field: 'options', headerName: 'Options', width: 130 
     , 
    renderCell: (cellValues: any) => 
     { return (<Option /> )}
  }
  ];
  
  
  const rows: GridRowsProp = [
    { id: 110, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: '',status:'',options:'' },
    { id: 1, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',options:'' },
    { id: 2, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',options:'' },
    { id: 3, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',options:'' },
    { id: 4, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',options:'' },
    { id: 5, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',options:'' },
    { id: 6, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',options:'' },
    { id: 7, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',options:'' },
    { id: 8, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',options:'' },
    { id: 9, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',options:'' },
    { id: 10, name: 'jackson', email: 'jackson.jack@econsent.com', phone:'+1(415)425-5588', roles: <button className={styles.adminbtn}>Admin</button>,status:'',options:'' },
  
  ];

  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      backgroundCol:"#1996FC",
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );

const Admin =() => {
  

  const[openViewModal,setopenViewModal]=React.useState(false)
  const [showModal,setShowModal] =React.useState(false)
    // const theme = useTheme();
    const[dropDown,setdropDown]=React.useState("false")
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    const handleClick = (event:any) => { 
      setAnchorEl(event.currentTarget); 
    }; 
    
    const show = Boolean(anchorEl); 
    
    const handleClose = () => { 
      setAnchorEl(null); 
    }; 

    const handlemodal=()=>{
      setopenViewModal(true)
    }

  
const items=[
    
    {
        name:<Link href="../Admin" style={{ textDecoration:"none"}}>Admin Users</Link>,
        icon:<PersonIcon  style={{width:"25px",height:"25px"}}/>
        
    },
    {
        name:<Link href="../Project" style={{textDecoration:"none"}}>Projects</Link>,
        icon:<PeopleAltIcon  style={{width:"25px",height:"25px"}}/>
        
    },
    {
        name:<Link href="../Employees" style={{ textDecoration:"none"}}>Employees</Link>,
        icon:<ContentPasteIcon style={{width:"25px",height:"25px"}} />
    },
    {
        name:<Link href="../Settings" style={{textDecoration:"none"}}>Settings</Link>,
        icon: <SettingsIcon style={{width:"25px",height:"25px"}} />
    },
    {
      name:<Link href="../SkillType" style={{textDecoration:"none"}}>SkillType</Link>,
  },
  {
      name:<Link href="../ProjType" style={{textDecoration:"none"}}>Project Type</Link>,
  },
  {
      name:<Link href="../EmployeeType" style={{textDecoration:"none"}}>Employee Type</Link>,
  },
];

    return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
         
          <Drawer variant="permanent" open={open} 
            onMouseOver={handleDrawerOpen} onMouseOut={handleDrawerClose} 
          >
            <List>
            <Image 
           src={logo}
           width="60px"
           height="55px"
           alt='Logo'
            /> <h1 className={styles.heading}> HEALTH</h1> 
             <Divider />
                {items.map((item, index) => (
                 
                 <ListItemButton key={index} sx={{color:"white","&:hover": { color: "#1996Fc" } }}>
                 <ListItemIcon sx={{color:"white","&:hover": { color: "#1996Fc" } }}>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} sx={{color:"white","&:hover": { color: "#1996Fc" } }} />
                    </ListItemButton>
                    
                   ))}
            </List>
            
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
         
               <NotificationsIcon style={{
      position: "absolute",
      left: "15%",
      right: "15%",
      top: "-3",
      height:"50",
     color: "#111928",
     marginLeft: "1150px",  
}} />
<Avatar  style={{ position:"absolute",width: 30, height: 30,left:1450,top:6}}  />
  
     <Divider style={{position:"relative",width:1500,bottom:-20}}/>
        <Typography sx={{ 
           width: "204px",
           height: "120px",
           top:"20px",
           position:"absolute",
           fontFamily:"Inter, sans-Serif",
           fontStyle: "normal",
           fontWeight: "600px",
           fontSize: "18px",
           lineHeight: "50px",
           color:"#111928", marginTop:8
        }}> Admin Users</Typography>
        <input type="text" className={styles.search}
        style={{alignContent:"center", justifyContent:"center",marginLeft:200, marginTop:60 }} 
        placeholder="Search"></input>
        <Button className={styles.button} style={{ marginLeft:"1290px", marginTop:"-50px"}} onClick={()=>setShowModal(true)}>+ Add User</Button>
        <Divider style={{position:"relative",width:1500,bottom:-20}}/>

        <Modal show={showModal} onClose={() => setShowModal(false)} >    </Modal>

      <DataGrid 
      sx={{position:"absolute", 
      width:"1339px",height:"650px", marginTop:"40px",
       "& .MuiTablePagination-toolbar":
        {
        display:"flex",
        marginRight:"1200px"
        },
        "& .MuiDataGrid-columnHeaders":
         {
          fontSize: 16, 
           backgroundColor: "#F4F4F4",
          fontWeight: "500",
          height: "2px",
          color: "grey",
        },
        ".MuiDataGrid-columnSeparator": {
          display: "none",
        },
      }}
      disableColumnFilter
      disableColumnMenu
      disableSelectionOnClick
      rows={rows} 
      columns={columns}
      checkboxSelection
      pageSize={10}
      
       />
     
          </Box>
        </Box>
        
      );
    }
export default Admin


