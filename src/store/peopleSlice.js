import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    peoples: [],
    modalPeople: {},
    peoplesWookie: [],
  },
  reducers: {
    getPeoples(state, action) {
      state.peoples = action.payload.peoples;
    },
    getModalPeople(state, action) {
      state.modalPeople = action.payload.modalPeople;
    },
    getPeoplesWookie(state, action) {
      state.peoplesWookie = action.payload.peoplesWookie;
    },
  },
});
export const { getPeoples, getModalPeople, getPeoplesWookie } = peopleSlice.actions;
export default peopleSlice.reducer;
