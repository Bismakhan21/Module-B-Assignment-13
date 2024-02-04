import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FaHome } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { CiWallet } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { LuUsers2 } from "react-icons/lu";
import { PiNotepadLight } from "react-icons/pi";
import { FaList } from "react-icons/fa";

const drawerWidth = 240;

const navItems = [
    {
      label: "Dashboard",
      icon: <FaHome />,
      link: "/",
    },
    {
      label: "Order List",
     link: "/orderlist",
      icon: <FaList />,
    },
    {
      label: "Order Details",
     link: "/orderdetails",
      icon: <PiNotepadLight />,
    },
    {
        label: "Customer",
       link: "/customer",
        icon: <LuUsers2 />,
      },
      {
        label: "Analytics",
       link: "/analytics",
        icon: <MdAnalytics />,
      },
      {
        label: "Reviews",
       link: "/reviews",
        icon: <FaPen />,
      },
      {
        label: "Food",
       link: "/food",
        icon: <MdOutlineEmojiFoodBeverage />,
      },
      {
        label: "Food Details",
       link: "/fooddetails",
        icon: <FaRegEdit />,
      },
      {
        label: "Customer Details",
       link: "/customerdetails",
        icon: <CiUser />,
      },
      {
        label: "Calender",
       link: "/calender",
        icon: <SlCalender />,
      },
      {
        label: "Chat",
       link: "/chat",
        icon: <CiChat1 />,
      },
      {
        label: "Wallet",
       link: "/wallet",
        icon: <CiWallet />,
      },
  ];
  

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      
      <Typography variant='h5' sx={{pl:"20%", pt:'20px'}}>
            Sedap.
        </Typography>
        <Typography variant='p' sx={{pl:'20%', mb:'20%'}}>
              Modern Admin Dashboard
            </Typography>
       
        
      <Divider />
      <List className='activeClass'>
      {navItems.map((obj) => (
          <ListItem key={obj.label} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                {obj.icon}
              </ListItemIcon>
              <Link to={obj.link}>
              <ListItemText primary={obj.label} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </div>
  );

  // Remove this const when copying and pasting into your project.
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
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           Figma File
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
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
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
        <Typography paragraph>
        <Box sx={{ display: { xs: "none", sm: "block", gap: 5 } }}>
                <Box sx={{ mx: 2, fontSize:'32px', }} component="span"> 
                  <Outlet />
                </Box>
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;