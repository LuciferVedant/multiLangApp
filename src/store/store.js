import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "../components/slice/generalSlice";

export const store = configureStore({
  reducer: {
    general: generalSlice,
  },
});
