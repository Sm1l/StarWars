import { configureStore } from "@reduxjs/toolkit";
import PeopleSlice from "./PeopleSlice";
// import themeSlice from "./themeSlice";
// import menuSlice from "./menuSlice";

export default configureStore({
  reducer: {
    people: PeopleSlice,
    // theme: themeSlice,
    // menu: menuSlice,
  },
});
