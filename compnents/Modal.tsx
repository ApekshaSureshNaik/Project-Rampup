
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState, useEffect} from "react"
import ReactDOM from "react-dom"
import _document from "../pages/_document";
import styles from "../styles/Modal.module.css";
import DropDown from "../compnents/DropDown";
import { CDropdown , CDropdownToggle,CDropdownMenu,CDropdownItem} from '@coreui/react';
// import '@coreui/coreui/dist/css/coreui.min.css'
import { Dropdown } from "@nextui-org/react";
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ReactPhoneInput from "react-phone-input-2";


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
        <div className={styles.conatiner}>
        <div className={styles.overlay}>
        <FontAwesomeIcon icon={faXmark} className={styles.btn} onClick={handleClose}/>
        <label style={{ position: "absolute",
        // width:"112px",
       width:"150px",  height: "33px",left: "410px", top: "160px", fontFamily: 'Inter,sans-serif',
        fontStyle: "normal", fontWeight: "600", fontSize: "22px", lineHeight: "150%", color: "#111928",marginTop:"-100px",marginLeft:"-370px"
      }}> Invite User </label>
     <div style={{position: "absolute",
width: "620px",
height: "1px",
left: "410px",
top: "205px",
background: "#ECECEF",
marginTop:"-100px",
marginLeft:"-370px"
}}></div> <label className={styles.name}>Name</label>

{/* <CDropdown>
<CDropdownToggle  variant="outline" className={styles.drop1} style={{marginTop:"-100px",marginLeft:"-370px",textAlign:"left"}}>Harvard University</CDropdownToggle> 
  <CDropdownMenu>
    <CDropdownItem href="#">Harvard University</CDropdownItem>
    <CDropdownItem href="#">Harvard University </CDropdownItem>
    <CDropdownItem href="#">SHarvard University</CDropdownItem>
  </CDropdownMenu>
</CDropdown> */}
<div className={styles.drop1} style={{marginTop:"-100px",marginLeft:"-370px"}}>
<Dropdown >
         <Dropdown.Button light >Select One </Dropdown.Button>
         <Dropdown.Menu aria-label="Static Actions" >
           <Dropdown.Item key="new">Harvard University</Dropdown.Item>
           <Dropdown.Item key="copy">Harvard University</Dropdown.Item>
           <Dropdown.Item key="edit">Harvard University</Dropdown.Item>
           <Dropdown.Item key="delete"
         //    color="error"
            >
          Harvard University
           </Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown> </div>
<label className={styles.email} style={{marginTop:"-100px",marginLeft:"-370px"}} >Email</label>
       <DropDown />
<label className={styles.phno} style={{marginTop:"-100px",marginLeft:"-370px"}} >Phone Number</label>
       <label className={styles.role} style={{marginTop:"-100px",marginLeft:"-370px"}} >Role</label>
       <div className={styles.drop3} style={{marginTop:"-100px",marginLeft:"-370px"}}>  
       <Dropdown >
         <Dropdown.Button light >Select One</Dropdown.Button>
         <Dropdown.Menu aria-label="Static Actions" >
           <Dropdown.Item key="new">Harvard University</Dropdown.Item>
           <Dropdown.Item key="copy">Harvard University</Dropdown.Item>
           <Dropdown.Item key="edit">Harvard University</Dropdown.Item>
           <Dropdown.Item key="delete"
         //    color="error"
            >
          Harvard University
           </Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown></div> 
       <div className={styles.phnoinput} style={{marginTop:"-100px",marginLeft:"-370px"}}>
       <ReactPhoneInput value="+3802343252" 
      //  inputStyle={{boxSizing:"border-box", position:"absolute",width:"360px",height:"48px",left: "410px",top: "455px",
      //  background: "#FFFFFF",border: "1px solid #DCDCE0",borderRadius: "6px"}}
      //  dropdownStyle={{boxSizing: "border-box",
      //  position: "absolute",
      //  width: "68px",
      //  height: "48px",
      //  left: "410px",
      //  top: "455px",
       
      //  /* blue/50 */
       
      //  background: "#EBF5FF",
      //  border: "1px solid #DCDCE0"}}
  
       /></div>
       <button className={styles.buttonAdd} style={{marginTop:"145px", marginLeft:"-70px"}}>+ Add Another</button>
      <button className={styles.cancel} style={{marginTop:"-100px",marginLeft:"-370px"}}>Cancel</button> 
      <button className={styles.invite} style={{marginTop:"-100px",marginLeft:"-370px"}}disabled>Invite User</button>
  </div> 
  
      <div>{children}</div>
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