import {
  Box,
  Button,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import singUp from "./../../../assets/Images/SigninBg.png";
import logo from "../../../assets/Images/Home.png";
import { signInWithGooglePopup } from "../../../firebase";
import googleLogo from "../../../assets/Images/google (1) 1.png";
import {
  updateSignUpData,
} from "../../../redux/reducers/SignUpSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";

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

const SignUp = () => {
  const dispatch = useDispatch();

  // const [signUpData, setSignUpData] = useState({fullName:"",email:"", password: "",role: "I'm a Customer" });
  const signUpData = useSelector((state: RootState) => state.signUp.signUpData);
  console.log(signUpData);
  

  const logGoogleUser = async () => {
    let response = await signInWithGooglePopup();
    console.log(response);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // setSignUpData((prevData)=> ({...prevData, [name]: value}));
    dispatch(updateSignUpData({
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("signUpData-----", signUpData);

    // setSignUpData(signUpData);
  };

  return (
    <Grid container sx={{ overflow: "hidden" }}>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Box sx={{ textAlign: "center", mt: 1 }}>
          <img src={logo} alt="Logo" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
              alignContent: "center",
              flexWrap: "wrap",
              mt: 2,
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
              onSubmit={handleSubmit}
              style={{
                marginTop: "12px",
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
                Full Name
              </Typography>
              <TextField
                sx={{ width: "100%" }}
                variant="outlined"
                type="text"
                name="fullName"
                value={signUpData.fullName}
                onChange={handleChange}
              />
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
                value={signUpData.email}
                onChange={handleChange}
              />
              <Typography sx={{ fontFamily: "Poppins", fontWeight: 600 }}>
                Password
              </Typography>
              <TextField
                sx={{ width: "100%" }}
                variant="outlined"
                type="password"
                name="password"
                value={signUpData.password}
                onChange={handleChange}
              />
              <Typography sx={{ fontFamily: "Poppins", fontWeight: 600 }}>
                Role
              </Typography>
              <TextField
                variant="outlined"
                select
                name="role"
                value={signUpData.role}
                onChange={handleChange}
                sx={{ width: "100%" }}
              >
                {roles.map((role) => (
                  <MenuItem key={role.value} value={role.label}>
                    {role.label}
                  </MenuItem>
                ))}
              </TextField>
            
              <Stack
                sx={{
                  // flexDirection:"row",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  justifyContent: "space-between",
                  textAlign: "center",
                  alignItems: "center",
                  mt: 1,
                }}
              >
                <Button
                  type="submit"
                  sx={{
                    backgroundColor: "#00B207",
                    fontSize: "16px",
                    fontWeight: 600,
                    fontFamily: "Poppins",
                    borderRadius: "8px",
                    "&:hover": { backgroundColor: "#00A307" },
                    width: "100%",
                  }}
                  variant="contained"
                >
                  Sign Up
                </Button>
              </Stack>
              <Box
                onClick={logGoogleUser}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  cursor: "pointer",
                  gap: 1,
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Typography>or</Typography>
                <img src={googleLogo} alt="" />
                <Typography>Singup with Google</Typography>
              </Box>
            </form>
          </Box>
        </Box>
      </Grid>
      <Grid item lg={6} md={6}>
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            height: "100%",
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

export default SignUp;
