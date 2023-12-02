/** External */
import { configureStore } from "@reduxjs/toolkit";

/** Internal */
import counterReducer from "./counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
