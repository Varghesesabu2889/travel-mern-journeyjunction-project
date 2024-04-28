import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  email: "",
  image: "",
  _id: ""
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      state.isAuthenticated = true;
      state._id = action.payload.data._id;
      state.email = action.payload.data.email;
      state.image = action.payload.data.image;
    },
    logoutRedux: (state, action) => {
      state.isAuthenticated = false;
      state.email = "";
      state.image = "";
    }
  }
});

export const { loginRedux, logoutRedux } = userSlice.actions;
export default userSlice.reducer;
