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
            <div className="name">
            <Box
              sx={{
                bgcolor: "white",
                height: 400,
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
                {" "}

                <Box style={{ marginTop:"50px",padding: "30px" }}>
                  <Typography>SKILL NAME</Typography>
                  <Typography>012345</Typography>
                </Box>

                 <Box style={{marginTop:"20px", padding: "60px" ,marginLeft:"70px"}}>
                  <Typography>STATUS</Typography>
                  <Typography>jackson</Typography>
                </Box>
                </Box>

                <Box style={{ display: "flex", flexFlow: "row" }}>
                {" "}

                <Box style={{ padding: "2px" }}>
                  <Typography >
                  DESCRIPTION
                  </Typography>
                  
                  
                  <Typography>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting,
                  </Typography>
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
    
    