
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState, useEffect} from "react"
import ReactDOM from "react-dom"
import _document from "../pages/_document";
import styles from "../styles/AdminModal.module.css";
import { Dropdown } from "@nextui-org/react";
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

<div className={styles.drop1} style={{marginTop:"-100px",marginLeft:"-370px"}}>
<select className={styles.proj}>
          <option value="please select">Please select...</option>
          <option value="Harvard">jackson</option>
          <option value="Harvard">jackson</option>
          <option value="Harvard">jackson</option>
        </select> </div>
<label className={styles.email} style={{marginTop:"-100px",marginLeft:"-370px"}} >Email</label>
<select className={styles.proj}>
          <option value="please select">Please select...</option>
          <option value="Harvard">jackson</option>
          <option value="Harvard">jackson</option>
          <option value="Harvard">jackson</option>
        </select>
<label className={styles.phno} style={{marginTop:"-100px",marginLeft:"-370px"}} >Phone Number</label>
       <label className={styles.role} style={{marginTop:"-100px",marginLeft:"-370px"}} >Role</label>
       <div className={styles.drop3} style={{marginTop:"-100px",marginLeft:"-370px"}}>  
       <select className={styles.proj}>
          <option value="please select">Please select...</option>
          <option value="Harvard">jackson</option>
          <option value="Harvard">jackson</option>
          <option value="Harvard">jackson</option>
        </select></div> 
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