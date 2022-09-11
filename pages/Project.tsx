import * as React from 'react';
import { CSSObject, styled, Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import logo from  '../images/logo.jpg'
import Image from 'next/image'
import CssBaseline from '@mui/material/CssBaseline';
import styles from '../styles/SideBar.module.css'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { color } from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import SettingsIcon from '@mui/icons-material/Settings';
import { DataGrid, GridRowsProp, GridColDef, GridRenderCellParams, GridColumnIcon, GridRowModel, GridColumns, GridRowId } from '@mui/x-data-grid'
import { AppBar, Avatar, Button, Chip, Toolbar } from '@mui/material'
import Option from './OptionProject'
import Modal from './ProjectModal'

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
    renderCell: () => 
    { return (<Option/> )}}
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

const Project =() => {
  const [showModal,setShowModal] =React.useState(false)
    // const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

  
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
        }}> Projects </Typography>
        <input type="text" className={styles.search}
        style={{alignContent:"center", justifyContent:"center",marginLeft:200, marginTop:60 }} 
        placeholder="Search"></input>
        <Button className={styles.button} style={{ marginLeft:"1290px", marginTop:"-50px"}} onClick={()=>setShowModal(true)}>+ Add Project</Button>
        <Modal show={showModal} onClose={() => setShowModal(false)} >    </Modal>
        <Divider style={{position:"relative",width:1500,bottom:-20}}/>
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
export default Project


