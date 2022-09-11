import React,{useEffect, useState} from "react"
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import { Button, Chip, Typography } from '@mui/material';
import _document from "../pages/_document";
import ReactDOM from "react-dom";
// import styles from "../styles/EmployeeView.module.css"

type ModalProp = {
    show :boolean;
    onClose:() => void;
    children:any;
  }
  const Modal = ({ show, onClose, children } :ModalProp) => {

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
                height: 680,
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
               onClick={onClose}>
                <CloseIcon />
                </Button>

                <label style={{ position: "absolute", fontWeight:"bold",
                  height: "33px",left: "380px", top: "140px", fontFamily: 'Inter,sans-serif',
              fontStyle: "medium", fontSize: "22px", lineHeight: "150%", color: "#111928",marginTop:"-100px",marginLeft:"-370px"
             }}> View Details</label>
            <div style={{position: "absolute",
              width: "630px",
              height: "1px",
              left: "385px",
              top: "180px",
              fontWeight:"bold",
              background: "#ECECEF",
             marginTop:"-100px",
            marginLeft:"-370px"
             }}></div> 

              
              <Box style={{ display: "flex", flexFlow: "row" }}>
              

                <Box style={{ marginTop:"65px",padding: "20px",marginLeft:"-15px" }}>
                  <Typography>EMPLOYEE ID</Typography>
                  <Typography>012345</Typography>
                </Box>

                 <Box style={{marginTop:"50px", padding: "30px" ,marginLeft:"90px"}}>
                  <Typography>NAME</Typography>
                  <Typography>jackson</Typography>
                </Box>

                <Box style={{marginTop:"50px", padding: "30px" ,marginLeft:"120px"}}>
                  <Typography>EMAIL</Typography>
                  <Typography>jackson.jack@econsent.com</Typography>
                </Box>
                </Box>

                <Box style={{ display: "flex", flexFlow: "row" }}>
                {" "}

                <Box style={{marginTop:"20px", padding: "30px" ,marginLeft:"-20px"}}>
                  <Typography>CONTACT{' '}NUMBER</Typography>
                  <Typography>+1 (415)425-5588</Typography>
                </Box>

                <Box style={{marginTop:"20px", padding: "30px" ,marginLeft:"5px"}}>
                  <Typography>EMPLOYEE{' '}TYPE</Typography>
                  <Typography>Loreum{''}ipsum</Typography>
                </Box>

                <Box style={{marginTop:"20px", padding: "40px" ,marginLeft:"45px"}}>
                  <Typography>JOINING{" "}DATE</Typography>
                  <Typography>Loreum ipsum</Typography>
                </Box>
                </Box>

                <Box style={{ display: "flex", flexFlow: "row" }}>
                {" "}
                
                <Box style={{marginTop:"20px", padding: "30px" ,marginLeft:"-12px"}}>
                  <Typography>SALARY</Typography>
                  <Typography>Loreum ipsum</Typography>
                </Box>

                <Box style={{marginTop:"20px", padding: "30px" ,marginLeft:"50px"}}>
                  <Typography>UTILIZATION</Typography>
                  <Typography>Loreum ipsum</Typography>
                </Box>

                <Box style={{marginTop:"20px", padding: "30px" ,marginLeft:"50px"}}>
                  <Typography>REVENUE{" "}OPPORTUNITY</Typography>
                  <Typography>Loreum ipsum</Typography>
                </Box>
                </Box>
                 
                
                <Box style={{padding:"10px",marginTop:"-20px"}}>
                <Typography>SKILLS</Typography>
                <Chip label="Front End" variant="outlined" size="medium" />
                <Chip label="Back End" variant="outlined" size="medium" />
                </Box>

                <Box style={{padding:"10px"}}>
                <Typography>PROJECT NAME</Typography>
                <Chip label="lorem ipsum" variant="outlined"   />
                <Chip label="lorem ipsum" variant="outlined"    />
               <Chip label="lorem ipsum" variant="outlined"   />
               <Chip label="lorem ipsum" variant="outlined"  />
               </Box>

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
    
    