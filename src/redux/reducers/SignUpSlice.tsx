import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISignUpData {
    fullName: string;
    email: string;
    password: string;
    role: string;
  }
  
  interface IState {
    signUpData: ISignUpData;
  }
  
  const initialState: IState = {
    signUpData: {
      fullName: "",
      email: "",
      password: "",
      role: ""
    }
  };
  

const SignUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    updateSignUpData: (state, action: PayloadAction<Partial<ISignUpData>>) => {
      state.signUpData = { ...state.signUpData, ...action.payload };
    },
    clearSignUpData: (state, action: PayloadAction) => {
      state.signUpData = { fullName: "", email: "", password: "", role: "" };
    },
  },
  extraReducers(builder) {},
});

export const {updateSignUpData,clearSignUpData } = SignUpSlice.actions;
export default SignUpSlice.reducer;
