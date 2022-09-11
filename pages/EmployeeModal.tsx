import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState, useEffect} from "react"
import ReactDOM from "react-dom"
import _document from "../pages/_document";
import styles from "../styles/EmpModal.module.css";
import { Dropdown } from "@nextui-org/react";
import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

type ModalProp = {
    show :boolean;
    onClose:() => void;
    children:any;
  }

const ModalEmp = ({ show, onClose, children } :ModalProp) => {

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
        <FontAwesomeIcon icon={faXmark} className={styles.btn} onClick={handleClose} style={{marginTop:"-130px",marginLeft:"-370px"}}/>
        <label className={styles.heading} style={{marginTop:"-90px",marginLeft:"-155px"}}>Add employee</label>
        <div className={styles.line} style={{marginTop:"-130px",marginLeft:"-370px"}}></div> 
        <label className={styles.name} style={{marginTop:"-160px",marginLeft:"-155px"}}>Name</label> 
         <input type="text" className={styles.inputname} placeholder="Enter" style={{marginTop:"-140px",marginLeft:"-370px"}}></input> 
         <label className={styles.email}style={{marginTop:"-130px",marginLeft:"-370px"}}>Email</label>   
        <input type="text" className={styles.inputemail} placeholder="email" style={{marginTop:"-130px",marginLeft:"-370px"}}></input> 
        <label className={styles.phone} style={{marginTop:"-50px",marginLeft:"-155px"}}>Phone Number</label>  
        <div className={styles.inputph} style={{marginTop:"-130px",marginLeft:"-370px"}} >
       <ReactPhoneInput value="+3802343252" />
       </div>
       <label className={styles.join} style={{marginTop:"-130px",marginLeft:"-370px"}}>Joining Date</label>
         <input type="date" placeholder="Please Select" className={styles.cal1} style={{marginTop:"-130px",marginLeft:"-370px"}}></input> 

         <label className={styles.skills} style={{marginTop:"-130px",marginLeft:"-370px"}}>Skills</label> 
        <div className={styles.drop1} style={{marginTop:"-130px",marginLeft:"-370px"}}>
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
       <label className={styles.emp}  style={{marginTop:"-130px",marginLeft:"-370px"}}>Employee Type</label>
        <div className={styles.drop2} style={{marginTop:"-130px",marginLeft:"-370px"}}>
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
         <label className={styles.salary} style={{marginTop:"-130px",marginLeft:"-370px"}}>Salary</label>
         <input type="date" placeholder="Please Select" className={styles.cal2} style={{marginTop:"-130px",marginLeft:"-370px"}}></input>

         <label className={styles.util} style={{marginTop:"-130px",marginLeft:"-370px"}}>Utilization</label>
         <input type="date" placeholder="Please Select" className={styles.cal3} style={{marginTop:"-130px",marginLeft:"-370px"}}></input> 

         <label className={styles.revenu} style={{marginTop:"-130px",marginLeft:"-370px"}}>Revenue Opportunity</label> 
       <div className={styles.drop3} style={{marginTop:"-130px",marginLeft:"-370px"}}>
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
       <button className={styles.add} style={{marginTop:"-130px",marginLeft:"-370px"}}>Add Employee</button> 

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

    export default ModalEmp