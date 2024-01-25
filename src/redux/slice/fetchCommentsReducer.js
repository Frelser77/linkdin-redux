import { createSlice } from "@reduxjs/toolkit";
import { tokenComments } from "../../token";

const initialState = {
  data: null,
  singleComment: null,
};

export const fetchAllComments = createAsyncThunk("comments/fetchAllComments", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenComments}`,
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const fetchCommentsSlice = createSlice({
  name: "fetchComments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllComments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchAllComments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
