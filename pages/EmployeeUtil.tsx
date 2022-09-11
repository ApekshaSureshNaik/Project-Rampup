import {useState, useEffect} from "react"
import ReactDOM from "react-dom"
import _document from "../pages/_document";
import styles from "../styles/EmpUtil.module.css";
import { Dropdown } from "@nextui-org/react";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import CloseIcon from '@mui/icons-material/Close';
import { Dayjs } from 'dayjs';
import React from "react";


type ModalProp = {
    show :boolean;
    onClose:() => void;
    children:any;
  }

const Modal = ({ show, onClose, children } :ModalProp) => {
    const [value, setValue] = React.useState<Dayjs | null>(null);
  const [_document, setDocument] = useState<Document | null>(null);
    const [isBrowser, setIsBrowser] = useState(false)

    useEffect(() => {
      setDocument(document);
    }, []);

    useEffect(() => {
        setIsBrowser(true);
      }, []);

      const handleClose = (e:any) => {
        e.preventDefault();
        onClose();
      };
      const modalContent = show ? (
        
        <div className="name">
        <Box
          sx={{
            bgcolor: "white",
            height: 630,
            width: 700,
            color: "text.secondary",
            border: 1,
            px:2,
            bottom:"40px",
            fontWeight: "fontWeightBold",
            zIndex: "tooltip",
            position: "absolute",
            marginLeft: "410px",
         
          }}
          className="box"
        >

<Button style={{color:"black",left:"600px"}}
            //   className={styles.btn2}
               onClick={handleClose}>
                <CloseIcon />
                </Button>

            <label style={{ position: "absolute", fontWeight:"bold",
              height: "33px",left: "380px", top: "140px", fontFamily: 'Inter,sans-serif',
          fontStyle: "medium", fontSize: "22px", lineHeight: "150%", color: "#111928",marginTop:"-100px",marginLeft:"-370px"
         }}>Update Utilization </label>
        <div style={{position: "absolute",
          width: "650px",
          height: "1px",
          left: "385px",
          top: "180px",
          fontWeight:"bold",
          background: "#ECECEF",
         marginTop:"-100px",
        marginLeft:"-370px"
         }}></div> 

         <label className={styles.name1}>NAME</label>
         <div className={styles.enter} style={{marginTop:"90px",marginLeft:"-10px"}}>
          <TextField style={{width:"400px"}} className="name"
             placeholder="Enter"
            variant="outlined"
            size="small"/>
            </div>


            <label className={styles.name2}>EMPLOYEE{' '}ID</label>
         <div className={styles.enter} style={{marginTop:"-40px",marginLeft:"400px"}}>
          <TextField style={{width:"250px"}} className="name"
             placeholder="Enter"
            variant="outlined"
            size="small"/>
            </div>


            <Box>
        <label className={styles.month}>MONTH</label>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
          className={styles.start}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => (
              <TextField style={{marginTop:"50px",marginLeft:"-5px",width:"320px"}}
              {...params}
                placeholder="Select"
                size="small"
              />
            )}
          />
        </LocalizationProvider>
       
      </Box>


      
      <Box>
        <label className={styles.year}>YEAR</label>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
          className={styles.start}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => (
              <TextField style={{marginTop:"-40px",marginLeft:"335px",width:"320px"}}
              {...params}
                placeholder="Select"
                size="small"
              />
            )}
          />
        </LocalizationProvider>
       
      </Box>


      
      <label className={styles.sal}>SALARY</label>
         <div className={styles.enter} style={{marginTop:"20px",marginLeft:"-2px"}}>
          <TextField style={{width:"210px"}} className="name"
             placeholder="0"
            variant="outlined"
            size="small"/>
            </div>
           

            <label className={styles.total}>TOTAL UTILIZATION</label>
         <div className={styles.enter} style={{marginTop:"-40px",marginLeft:"220px"}}>
          <TextField style={{width:"210px"}} className="name"
             placeholder="0"
            variant="outlined"
            size="small"/>
            </div>

            <label className={styles.loss}>REVENUE LOSS</label>
         <div className={styles.enter} style={{marginTop:"-40px",marginLeft:"440px"}}>
          <TextField style={{width:"210px"}} className="name"
             placeholder="0"
            variant="outlined"
            size="small"/>
            </div>

            <Box>
        <Typography className={styles.projname}>PROJECT NAME </Typography>
        <select className={styles.proj}>
          <option value="please select">Please select...</option>
          <option value="Harvard">jackson</option>
          <option value="Harvard">jackson</option>
          <option value="Harvard">jackson</option>
        </select>
      </Box>

      <Box>
        <Typography className={styles.projname1}>PROJECT NAME</Typography>
        <select className={styles.proj1}>
          <option value="please select">Please select...</option>
          <option value="Harvard">jackson</option>  
          <option value="Harvard">jackson</option>
          <option value="Harvard">jackson</option>
        </select>
      </Box>
            
      
      
      <label className={styles.util}>UTILIZATION</label>
         <div className={styles.enter} style={{marginTop:"-120px",marginLeft:"290px"}}>
          <TextField style={{width:"250px"}} className="name"
             placeholder="0"
            variant="outlined"
            size="small"/>
            <IconButton style={{marginLeft:"40px",marginTop:"-5px",color:"red"}}>
             <DeleteOutlineIcon/>
            </IconButton>
            </div>

          

            <label className={styles.util1}>UTILIZATION</label>
         <div className={styles.enter} style={{marginTop:"40px",marginLeft:"290px"}}>
          <TextField style={{width:"250px"}} className="name"
             placeholder="0"
            variant="outlined"
            size="small"/>
            <IconButton style={{marginLeft:"40px",marginTop:"-5px",color:"red"}}>
             <DeleteOutlineIcon/>
            </IconButton>
            </div>

       

            
            <button className={styles.add} style={{marginTop:"-200px",marginLeft:"170px"}}>+Add another</button>
            <button className={styles.cancel} style={{marginTop:"-500px",marginLeft:"270px"}}>Cancel</button> 
            <button className={styles.save} style={{marginTop:"-500px",marginLeft:"270px"}}disabled>Save</button> 
          
          
       </Box>
       </div>
      
        ) : null

        if (_document) {
        if (isBrowser) {
          return ReactDOM.createPortal(
            modalContent,  _document.getElementById("modal") as HTMLElement
  
          );
        } else {
          return null;
        }
        }
        else {
          return null;
        }
  
      };
  
      export default Modal