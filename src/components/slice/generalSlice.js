import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  delayedShowLoader: false,
  language: localStorage.getItem("language") || "en",
  displayLanguage: localStorage.getItem("displayLanguage") || "English",
  currency: localStorage.getItem("currency") || "USD",
  darkMode: false,
  name: "",
  contactNo: "",
  message: "",
  email: "",
  country: "",
  countryCode: "",
  companyName: "",
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.loading = action.payload;
    },
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
      state.direction = action.payload === "ar" ? "rtl" : "ltr";
      localStorage.setItem("language", action.payload);
    },
    setDisplayLanguage: (state, action) => {
      state.displayLanguage = action.payload;
      localStorage.setItem("displayLanguage", action.payload);
    },
    setCurrency: (state, action) => {
      state.currency = action.payload;
      localStorage.setItem("currency", action.payload);
    },
    setDelayedShowLoader: (state, action) => {
      state.delayedShowLoader = action.payload;
    },
    // contact form options
    setName(state, action) {
      state.name = action.payload;
    },
    setContactNo(state, action) {
      state.contactNo = action.payload;
    },
    setMessage(state, action) {
      state.message = action.payload;
    },
    setCountry(state, action) {
      state.country = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setCountryCode(state, action) {
      state.countryCode = action.payload;
    },
    setCompanyName(state, action) {
      state.companyName = action.payload;
    },
    resetAllContactFields(state, action) {
      state.companyName = "";
      state.countryCode = "";
      state.email = "";
      state.country = "";
      state.message = "";
      state.name = "";
      state.contactNo = "";
    },
  },
});

export const actions = generalSlice.actions;

export const generalSelector = (state) => state.general;

export default generalSlice.reducer;
