
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState, useEffect} from "react"
import ReactDOM from "react-dom"
import _document from "../pages/_document";
import styles from "../styles/SettingModal.module.css";
import { Dropdown } from "@nextui-org/react";


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
        <div className={styles.box}>
        <FontAwesomeIcon icon={faXmark} className={styles.btn} onClick={handleClose}  style={{marginTop:"-130px",marginLeft:"-370px"}}/>
        <label className={styles.heading}  style={{marginTop:"-130px",marginLeft:"-370px"}}>Add Employee Type</label>
        <div className={styles.line}  style={{marginTop:"-130px",marginLeft:"-370px"}}></div>
        <label className={styles.name}  style={{marginTop:"-130px",marginLeft:"-370px"}}>Employee Type Name</label> 
        <input type="text" className={styles.input} placeholder="Enter" style={{marginTop:"-130px",marginLeft:"-370px"}}></input>
        <label className={styles.description} style={{marginTop:"-130px",marginLeft:"-370px"}}>Employee Type Description</label>
        <input type="text" className={styles.text} placeholder="Type your text here" style={{marginTop:"-130px",marginLeft:"-370px"}}></input>
        <label className={styles.no} style={{marginTop:"-130px",marginLeft:"-370px"}}>0/200</label>
        <label className={styles.status} style={{marginTop:"-130px",marginLeft:"-370px"}}>Employee Type Status</label>
        <div className={styles.drop} style={{marginTop:"-130px",marginLeft:"-370px"}}>
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
       <button className={styles.cancel} style={{marginTop:"-130px",marginLeft:"-370px"}}>Cancel</button> 
      <button className={styles.add} style={{marginTop:"-130px",marginLeft:"-370px"}}disabled>Add</button>
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