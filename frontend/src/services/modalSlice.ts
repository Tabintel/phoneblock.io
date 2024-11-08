import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  savedRooms: [],
  loginmodal: false,
  registermodal: false,
  walletmodal: false,
};

export const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    onLoginModal: (state, action) => {
      state.loginmodal = true;
    },
    offLoginModal: (state, action) => {
      state.loginmodal = false;
    },

    onRegisterModal: (state, action) => {
      state.registermodal = true;
    },
    offRegisterModal: (state, action) => {
      state.registermodal = false;
    },

    onWalletModal: (state, action) => {
      state.walletmodal = true;
    },
    offWalletModal: (state, action) => {
      state.walletmodal = false;
    },
  },
});

export const {
  onLoginModal,
  onWalletModal,
  offWalletModal,
  offLoginModal,
  onRegisterModal,
  offRegisterModal,
} = modalSlice.actions;

export default modalSlice.reducer;
