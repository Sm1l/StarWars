import { configureStore } from "@reduxjs/toolkit";
import peopleSlice from "./peopleSlice";
import languageSlice from "./languageSlice";

export default configureStore({
  reducer: {
    people: peopleSlice,
    language: languageSlice,
  },
});
