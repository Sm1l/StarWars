import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const peopleSlice = createSlice({
  name: "people",
  initialState: [],
  reducers: {
    getPeople(state, action) {
      state.people = action.payload.people;
    },
    //  getPeople(state, action) {
    //    // const URL = "https://swapi.dev/api/people/";
    //    const url = action.payload.url;
    //    let people = [];

    //    const getCards = (url) => {
    //      axios
    //        .get(url)
    //        .then((response) => {
    //          people = people.concat(response.data.results);
    //          if (response.data.next) {
    //            getCards(response.data.next);
    //          } else {
    //            state.people = people;
    //          }
    //        })
    //        .catch((error) => console.log(error));
    //    };
    //    getCards(url);

    //    // console.log("people", people);
    //  },
  },
});
export const { getPeople } = peopleSlice.actions;
export default peopleSlice.reducer;
