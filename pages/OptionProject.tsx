import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ProjectViewModal from './ProjectViewModal';
import ProjectUtil from './ProjectUtil'

const ITEM_HEIGHT = 48;

export default function Icon() {
  const[openViewModal,setOpenViewModal]=React.useState(false)
  
  const[openUtil,setOpenUtil]= React.useState(false)
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
     <MenuItem  onClick={() => setOpenViewModal(true)}>
      View 
      
    </MenuItem>
     <MenuItem  onClick={handleClose}>
      Active/Inactive
    </MenuItem>
    <MenuItem  onClick={() => setOpenUtil(true)}>
      Utilization
    </MenuItem>
    </Menu>
    <ProjectUtil show={openUtil} onClose={() => setOpenUtil(false)} children={undefined}/>
   <ProjectViewModal show={openViewModal} onClose= {() => setOpenViewModal(false)} children={undefined}/>
     
    </div>
  );
}