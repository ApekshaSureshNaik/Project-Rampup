 import { Dropdown } from "@nextui-org/react";
import styles from "../styles/Modal.module.css";

 export default function DropDown() {
    return (
         <>
         <div className={styles.drop2} style={{marginTop:"-100px",marginLeft:"-370px"}}>
       <Dropdown >
         <Dropdown.Button light css={{ tt: "capitalize" }}>Select One</Dropdown.Button>
         <Dropdown.Menu aria-label="Static Actions" css={{ tt: "capitalize" }}>
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
       </>
     );
   }

