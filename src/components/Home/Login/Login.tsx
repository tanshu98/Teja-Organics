import {
  Box,
  Button,
  Checkbox,
  Grid,
  InputLabel,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import singUp from "./../../../assets/Images/SigninBg.png";
import logo from "../../../assets/Images/Home.png";
import {signInWithGooglePopup} from '../../../firebase';
import googleLogo from '../../../assets/Images/google (1) 1.png';

const roles = [
    {
      value: 1,
      label: "I'm a Customer",
    },
    {
      value: 2,
      label: "I'm an Admin",
    },
    {
      value: 3,
      label: "I'm a Delivery Boy",
    },
  ];

const Login = () => {

    const logGoogleUser =async ()=> {
        let response = await signInWithGooglePopup();
        console.log(response);
        
    }

  return (
    <Grid container sx={{ overflow: "hidden" }}>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <img src={logo} alt="Logo" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
              alignContent: "center",
              flexWrap: "wrap",
              mt: 3,
              //   width: "100%",
              //   minWidth:'446px'
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: { xs: "13px", sm: "16px", md: "20px" },
              }}
            >
              Elevate your life with pure organic goodness.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
              }}
            >
              Welcome Back, Please login to your account
            </Typography>
            <form
              style={{
                marginTop: "14px",
                // display: "flex",
                // flexDirection: "column",
                // textAlign: "start",
                // alignContent: "start",
                // flexWrap: "wrap",
                // gap: 5,
                // width:'100%'
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: { xs: "14px", sm: "14px", md: "16px" },
                }}
              >
                Email
              </Typography>
              <TextField
                sx={{ width: "100%" }}
                variant="outlined"
                type="email"
                name="email"
              />
              <Typography sx={{ fontFamily: "Poppins", fontWeight: 600 }}>
                Password
              </Typography>
              <TextField
                sx={{ width: "100%" }}
                variant="outlined"
                type="password"
                name="password"
              />
              <Typography sx={{ fontFamily: "Poppins", fontWeight: 600 }}>
                Role
              </Typography>
              <TextField
                variant="outlined"
                select
                defaultValue="I'm a Customer"
                sx={{ width: "100%" }}
              >
                {roles.map((role) => (
                  <MenuItem key={role.value} value={role.label}>
                    {role.label}
                  </MenuItem>
                ))}
              </TextField>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    // flexDirection: { xs: "column", sm: "row" },

                    alignItems: "center",
                  }}
                >
                  <Checkbox
                    sx={{
                      "& .MuiSvgIcon-root": { fontSize: 14, color: "#00B207" },
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#898989",
                    }}
                  >
                    Remember me
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  Forgot password?
                </Typography>
              </Box>
              <Stack
                sx={{
                  // flexDirection:"row",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  justifyContent: "space-between",
                  textAlign:'center',
                  alignItems:'center',
                  mt:1
                }}
              >
                <Button
                  sx={{
                    backgroundColor: "#00B207",
                    fontSize: "16px",
                    fontWeight: 600,
                    fontFamily: "Poppins",
                    borderRadius: "8px",
                    "&:hover": { backgroundColor: "#00A307" },
                    width: "200px",
                  }}
                  variant="contained"
                >
                  Login
                </Button>
                <Button
                  sx={{
                    color: "#00B207",
                    fontSize: "16px",
                    fontWeight: 600,
                    fontFamily: "Poppins",
                    borderRadius: "8px",
                    border: "1px solid #00B207 ",
                    width: "200px",
                    "&:hover": {
                      border: "1px solid #00B207 ",
                      color: "#00B207",
                    },
                  }}
                  variant="outlined"
                >
                  Sign Up
                </Button>
              </Stack>
              <Box onClick={logGoogleUser} sx={{display:'flex', justifyContent:'center', cursor:'pointer',gap:1,alignItems:'center',mt:2}} >
                <Typography>or</Typography>
                {/* <Button variant="contained" onClick={logGoogleUser}>Continue with Google</Button> */}
                <img src={googleLogo} alt="" />
                <Typography>Continue with Google</Typography>
              </Box>
            </form>
          </Box>
        </Box>
      </Grid>
      <Grid item lg={6} md={6}>
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            height: "100vh",
            // pb: 0.9,
          }}
        >
          <img
            src={singUp}
            alt=""
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
