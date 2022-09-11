import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState, useEffect} from "react"
import ReactDOM from "react-dom"
import _document from "../pages/_document";
import styles from "../styles/ProjModal.module.css";
import { Dropdown } from "@nextui-org/react";



type ModalProp = {
    show :boolean;
    onClose:() => void;
    children:any;
  }

const ModalProject = ({ show, onClose, children } :ModalProp) => {

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
        <div className={styles.box} >
        <FontAwesomeIcon icon={faXmark} className={styles.btn} onClick={handleClose} />
          <div className={styles.heading}style={{marginTop:"-100px",marginLeft:"-370px"}}>Add Project </div>
          <div className={styles.line}style={{marginTop:"-100px",marginLeft:"-370px"}}></div>
          <label className={styles.name}style={{marginTop:"-100px",marginLeft:"-370px"}}>Name</label> 
          <input type="text" className={styles.input}style={{marginTop:"-100px",marginLeft:"-370px"}}></input>
          <label className={styles.client}style={{marginTop:"-100px",marginLeft:"-370px"}}> Client</label>
          <div className={styles.drop1} style={{marginTop:"-1px",marginLeft:"-370px"}}>
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
        <label className={styles.ptype} style={{marginTop:"-100px",marginLeft:"-370px"}}>Project Type</label> 
         <div className={styles.drop2}style={{marginTop:"-100px",marginLeft:"-370px"}}>
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
       </Dropdown>
         </div>
         <label className={styles.presponse}style={{marginTop:"-100px",marginLeft:"-370px"}}>Project Responsible</label>
         <div className={styles.drop3}style={{marginTop:"-100px",marginLeft:"-370px"}}>
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
       </Dropdown>
         </div>
        <label className={styles.start}style={{marginTop:"-100px",marginLeft:"-370px"}}>Start Date</label>
         <input type="date" placeholder="Please Select" className={styles.cal1} style={{marginTop:"-100px",marginLeft:"-370px"}}></input>

        <label className={styles.end}style={{marginTop:"-100px",marginLeft:"-370px"}}>End Date</label> 
        <input type="date" placeholder="Please Select" className={styles.cal2} style={{marginTop:"-100px",marginLeft:"-370px"}}></input>        

        <label className={styles.pstatus}style={{marginTop:"-100px",marginLeft:"-370px"}}>Project Status</label>
        <div className={styles.drop4}style={{marginTop:"-100px",marginLeft:"-370px"}}>
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
       </Dropdown>
         </div>
        <label className={styles.mstatus}style={{marginTop:"-100px",marginLeft:"-370px"}}>Monthly Status</label>
        <div className={styles.drop5}style={{marginTop:"-100px",marginLeft:"-370px"}}>
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
       </Dropdown>
         </div>
        <button className={styles.cancel}style={{marginTop:"-100px",marginLeft:"-370px"}}>Cancel</button>
        <button disabled className={styles.add}style={{marginTop:"-100px",marginLeft:"-370px"}}>Add Project</button>

        <div>{children}</div>
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
        export default ModalProject