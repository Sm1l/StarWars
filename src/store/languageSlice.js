import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    language: "en",
  },
  reducers: {
    setLanguage(state) {
      state.language === "en" ? (state.language = "wookie") : (state.language = "en");
    },
  },
});
export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
