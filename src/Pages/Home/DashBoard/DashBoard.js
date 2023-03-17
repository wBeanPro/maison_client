import * as React from 'react';
import './DashBoard.css';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Outlet, Link} from 'react-router-dom';
import logo from '../../../Images/logotop.jpg';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import LogoutIcon from '@mui/icons-material/Logout';
import useAuth from '../../../hooks/useAuth';
import PaidIcon from '@mui/icons-material/Paid';
import HouseIcon from '@mui/icons-material/House';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import NoteAltIcon from '@mui/icons-material/NoteAlt';


const drawerWidth = 240;

function DashBoard(props) {

  const {logOut, admin} = useAuth()

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="dashBg">
      <Toolbar />
      
      <Link className="text-decoration-none d-flex align-items-center" to="/">
        <img className="ms-2" src={logo} alt="logo" /> <span className="logoMaison fs-3">Maison</span>
      </Link>

     <div className="logodivider">
     <button onClick={logOut} className="dash-btn" ><LogoutIcon/>  Log Out</button>
    
     <Link className="text-decoration-none" to="/">
        <button className="dash-btn">
          <HouseIcon className="me-2"/> Go to home
        </button>
      </Link>
      <br />
     
     {!admin ? <Box>
     
     <Link className="text-decoration-none" to="myOrders">
        <button className="dash-btn">
          <ProductionQuantityLimitsIcon className="me-2"/> My Orders
        </button>
      </Link>
      <br />
      <Link className="text-decoration-none" to="payment">
        <button className="dash-btn">
          <PaidIcon className="me-2"/> Payment
        </button>
      </Link>
      <br />
      <Link className="text-decoration-none" to="userReviews">
      <button className="dash-btn">
      <RecentActorsIcon className="me-2"/>  Users Review
      </button>
      </Link>
     </Box>
      :
    <Box>
      <Link className="text-decoration-none" to="makeAdmin">
      <button className="dash-btn">
      <HowToRegIcon className="me-2"/>  Make Admin
      </button>
      </Link>
      <Link className="text-decoration-none" to="addProducts">
      <button className="dash-btn">
      <DashboardCustomizeIcon className="me-2"/> Add Products
      </button>
      </Link>
      <Link className="text-decoration-none" to="manageProducts">
      <button className="dash-btn">
      <NoteAltIcon className="me-2"/>Manage Products
      </button>
      </Link>
    </Box>}
    
     </div>
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{backgroundColor:"#fff"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{color:"#1a1a1b"}} noWrap component="div">
           Dash Board
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Outlet /> 
      </Box>
      
    </Box>
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;
