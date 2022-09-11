
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
        <div className={styles.conatiner} >
        <div className={styles.box}>
        <FontAwesomeIcon icon={faXmark} className={styles.btn} onClick={handleClose} style={{marginTop:"-130px",marginLeft:"-370px"}}/>
        <label className={styles.heading} style={{marginTop:"-130px",marginLeft:"-370px"}}>Add Skills</label>
        <div className={styles.line} style={{marginTop:"-130px",marginLeft:"-370px"}}></div>
        <label className={styles.name}style={{marginTop:"-130px",marginLeft:"-370px"}}>Skills Name</label> 
        <input type="text" className={styles.input} style={{marginTop:"-130px",marginLeft:"-370px"}}placeholder="Enter"></input>
        <label className={styles.description}style={{marginTop:"-130px",marginLeft:"-370px"}}>Skill Description</label>
        <input type="text" className={styles.text} style={{marginTop:"-130px",marginLeft:"-370px"}}placeholder="Type your text here"></input>
        <label className={styles.no} style={{marginTop:"-130px",marginLeft:"-370px"}}>0/200</label>
        <label className={styles.status} style={{marginTop:"-130px",marginLeft:"-370px"}}>Skill Status</label>
        <div className={styles.drop} style={{marginTop:"-130px",marginLeft:"-370px"}}>
        <select>
          <option value="please select">Please select...</option>
          <option value="Harvard">jackson</option>
          <option value="Harvard">jackson</option>
          <option value="Harvard">jackson</option>
        </select></div>
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
