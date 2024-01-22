import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
};

const queryParamSlice = createSlice({
  name: "queryParam",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});
export const { setQuery } = queryParamSlice.actions;
export default queryParamSlice.reducer;
