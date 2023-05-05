import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menuIndex: JSON.parse(localStorage?.getItem("LiasMenuIndex")) || 0,
  },
  reducers: {
    toggleMenuIndex(state, action) {
      state.menuIndex = action.payload.menuIndex;
    },
  },
});

export const { toggleMenuIndex } = menuSlice.actions;
export default menuSlice.reducer;
