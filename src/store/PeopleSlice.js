import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    peoples: [],
    modalPeople: {},
  },
  reducers: {
    getPeoples(state, action) {
      state.peoples = action.payload.peoples;
    },
    getModalPeople(state, action) {
      state.modalPeople = action.payload.modalPeople;
    },
  },
});
export const { getPeoples, getModalPeople } = peopleSlice.actions;
export default peopleSlice.reducer;
