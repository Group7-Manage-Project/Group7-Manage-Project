import React,{ useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'
import logo from './images/logo.jpg'
import {Link} from 'react-router-dom'

import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';


const options = [
    {
      name: <i className="fa fa-bars"></i>,
      scroll: true,
      backdrop: false,
    },
  ];

  function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
  
    return (
      <>
        <button onClick={toggleShow} style={{backgroundColor:"transparent", border:"none"}}>
          {name}
        </button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
                <span><img src={logo} alt="logo" width="60" height="60" /></span>&emsp;
                <span style ={{fontSize:"30px", color:"#fff", fontWeight:"700"}}>JHS Group</span>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>

          <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}>
            <TreeItem nodeId="1" label="Project Management">
              <Link to="/"><TreeItem nodeId="2" label="Requirement" /></Link>
            </TreeItem>
            <TreeItem nodeId="3" label="Employees Management">
              <Link to="/admin/employees"><TreeItem nodeId="4" label="Employees" /></Link>
            </TreeItem>
            <TreeItem nodeId="5" label="Schedule Management">
              <Link to="/admin/schedule"><TreeItem nodeId="6" label="Schedule" /></Link>
            </TreeItem>
            <TreeItem nodeId="7" label="Satstatistical">
              <Link to="/admin/statistical"><TreeItem nodeId="8" label="Tasks" /></Link>
            </TreeItem>
          </TreeView>

          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

function NavbarClick() {
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
    </>
  );
}

export default NavbarClick;