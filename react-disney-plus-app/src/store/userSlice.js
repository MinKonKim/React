import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  email: "",
  photoURL: "",
  diplayName: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.photoURL = action.payload.photoURL;
      state.diplayName = action.payload.diplayName;
    },
    removeUser: (state) => {
      state.id = "";
      state.email = "";
      state.photoURL = "";
      state.diplayName = "";
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
