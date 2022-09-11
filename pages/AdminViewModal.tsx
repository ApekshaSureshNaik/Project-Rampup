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
                 <Box
                      sx={{
                        bgcolor: "white",
                        height: 350,
                        width: 555,
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
        
                     
                     <Button style={{color:"black",left:"450px"}}
                    //   className={styles.btn2}
                       onClick={onClose}>
                        <CloseIcon />
                        </Button>
        
                      <label style={{ position: "absolute", fontWeight:"bold",
                          height: "33px",left: "380px", top: "140px", fontFamily: 'Inter,sans-serif',
                      fontStyle: "medium", fontSize: "22px", lineHeight: "150%", color: "#111928",marginTop:"-100px",marginLeft:"-370px"
                     }}> View Details</label>
                    <div style={{position: "absolute",
                      width: "490px",
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
                           <Typography>USERID</Typography>
                         <Typography>012345</Typography>
                         </Box>
        
                       <Box style={{marginTop:"50px", padding: "30px" ,marginLeft:"60px"}}>
                           <Typography>NAME</Typography>
                           <Typography>jackson</Typography>
                         </Box>
        
                         <Box style={{marginTop:"50px", padding: "30px" ,marginLeft:"40px"}}>
                       <Typography>EMAIL</Typography>
                           <Typography>jackson.jack@econsent.com</Typography>
                         </Box>
                         </Box>
        
                         <Box style={{ display: "flex", flexFlow: "row" }}>
                        
        
                         <Box style={{marginTop:"43px", padding: "30px" ,marginLeft:"-12px"}}>
                        <Typography>PHONE</Typography>
                      <Typography>+1(415)4255588</Typography>
                         </Box>
        
                         <Box style={{marginTop:"40px", padding: "30px" ,marginLeft:"5px"}}>
                           <Typography>ROLES</Typography>
                           <Typography>Loreumipsum</Typography>
                     </Box>
        
                       <Box style={{marginTop:"29px", padding: "40px" ,marginLeft:"2px"}}>
                        <Typography>STATUS</Typography>
                           <Typography>01Aug2022</Typography>
                         </Box>
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

