import React,{useEffect, useState} from "react"
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import _document from "../pages/_document";
import ReactDOM from "react-dom";

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
            <div className="name" >
                <div className="modal-container">
              <Box
              sx={{
                bgcolor: "white",
                height: 490,
                width: 660,
                color: "text.secondary",
                border: 1,
                px:2,
                bottom:"40px",
                fontWeight: "fontWeightBold",
                zIndex: "tooltip",
                position: "absolute",
                marginLeft: "410px",
                fontFamily: 'Inter,sans-serif'
              }}
              className="box"
            >
  
               
                <Button style={{color:"black",left:"570px"}}
                // className={styles.btn2} 
                onClick={onClose}>
                  <CloseIcon />
                  </Button>
  
                  <label style={{ position: "absolute", fontWeight:"bold",
                    height: "33px",left: "380px", top: "140px", fontFamily: "Inter,sans-serif",
                fontStyle: "medium", fontSize: "22px", lineHeight: "150%", color: "#111928",marginTop:"-100px",marginLeft:"-370px"
               }}> View Details</label>
              <div style={{position: "absolute",
                width: "600px",
                height: "1px",
                left: "385px",
                top: "180px",
                fontWeight:"bold",
                background: "#ECECEF",
               marginTop:"-100px",
              marginLeft:"-370px"
               }}></div> 
  
                
                <Box style={{ display: "flex", flexFlow: "row" }}>
  
                  <Box style={{ marginTop:"65px",padding: "20px",marginLeft:"-10px" }}>
                    <Typography>PROJECTID</Typography>
                    <Typography>012345</Typography>
                  </Box>
  
                   <Box style={{marginTop:"50px", padding: "30px" ,marginLeft:"60px"}}>
                    <Typography>NAME</Typography>
                    <Typography>jackson</Typography>
                  </Box>
  
                  <Box style={{marginTop:"50px", padding: "30px" ,marginLeft:"135px"}}>
                    <Typography>CLIENT</Typography>
                    <Typography>Michael{""}David</Typography>
                  </Box>
                  </Box>
  
                  <Box style={{ display: "flex", flexFlow: "row" }}>
                  {" "}
  
                  <Box style={{marginTop:"43px", padding: "30px" ,marginLeft:"-20px"}}>
                    <Typography>PROJECT{" "}TYPE</Typography>
                    <Typography>Loreum{" "}ipsum</Typography>
                  </Box>
  
                  <Box style={{marginTop:"40px", padding: "30px" ,marginLeft:"5px"}}>
                    <Typography>PROJECT{" "}RESPONSIBLE</Typography>
                    <Typography>Loreum{''}ipsum</Typography>
                  </Box>
  
                  <Box style={{marginTop:"29px", padding: "40px" ,marginLeft:"2px"}}>
                    <Typography>START{" "}DATE</Typography>
                    <Typography>01{' '}Aug{' '}2022</Typography>
                  </Box>
                  </Box>
  
                  <Box style={{ display: "flex", flexFlow: "row" }}>
                  {" "}
                  
                  <Box style={{marginTop:"43px", padding: "30px" ,marginLeft:"-12px"}}>
                    <Typography>END{" "}DATE</Typography>
                    <Typography>24{''}Sep{' '}2022</Typography>
                  </Box>
  
                  <Box style={{marginTop:"43px", padding: "30px" ,marginLeft:"-12px"}}>
                    <Typography>PROJECT{" "}STATUS</Typography>
                    <Typography style={{color:"green"}}>Running</Typography>
                  </Box>
  
                  <Box style={{marginTop:"43px", padding: "30px" ,marginLeft:"-12px"}}>
                    <Typography>MONTHLY{""}STATUS</Typography>
                    <Typography style={{color:"red"}}>Behind{" "}schedule</Typography>
                  </Box>
                  </Box>
                  </Box>
                  </div>
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
    
    