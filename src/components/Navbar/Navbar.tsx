import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import logo from "../../assets/Images/Home.png";
import { TfiEmail } from 'react-icons/tfi';
import { FiPhoneCall } from "react-icons/fi";
import profileImg from '../../assets/Images/ProfileImg.png'

// const navItems = ["Home", "About", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography>Kahi tari taaku yaat</Typography>
    </Box>
  );
  return (
    <Box sx={{ width: "100%", backgroundColor: "#fff",minWidth:'430px' }}>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            backgroundColor: "#fff",
            pt: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100px",
            width:'100%',
            minWidth:'425px',
            // flexWrap:'wrap'
          }}
        >
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu />
          </IconButton> */}

          <Box sx={{ display: "flex", alignItems: "center",ml:3 }}>
            <img src={logo} alt="Logo" width="150px" height="50px" />
          </Box>
          <Box
            sx={{
              color: "#32373C",
              display: "flex",
              gap: 8,
              mr: {xs:0.5,sm:4},
              alignItems: "center",
            }}
          >
            <Box sx={{ display: {xs: 'none',lg: 'flex'}, color: "inherit"}}>
             
                <TfiEmail size={42} />
           
              <Box sx={{ pl: 1, color: "#32373C" }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Poppins",
                    fontWeight: 500,
                  }}
                >
                  Email
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Poppins",
                    fontWeight: 500,
                  }}
                >
                  Email Info@organics.com
                </Typography>
              </Box>
            </Box>  
            <Box  sx={{ display: {xs: 'none',lg: 'flex'}, color: "inherit",alignItems:'center'}}>
             
              <FiPhoneCall size={35} />
              <Box sx={{ pl: 1, color: "#32373C" }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Poppins",
                    fontWeight: 500,
                  }}
                >
                 +91-040-2711-8688
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Poppins",
                    fontWeight: 500,
                  }}
                >
                  +91-9390538942
                </Typography>
              </Box>
            </Box>
            <Box sx={{display:'flex'}}>
                <Avatar src={profileImg} alt="User Profile" />
                <Box sx={{ pl: 1, color: "#32373C" }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Poppins",
                    fontWeight: 500,
                    color:'#056839'
                  }}
                >
                 Profile
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Poppins",
                    fontWeight: 500,
                  }}
                >
                  Shubham Teja
                </Typography>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
