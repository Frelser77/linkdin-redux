import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { token } from "../../token";

const initialState = {
  postList: null,
  status: "idle",
  error: "",
  post: {
    text: "",
  },
  myPosts: [],
};

export const fetchAllPosts = createAsyncThunk("profile/fetchAllPosts", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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

export const addPost = createAsyncThunk("profile/addPost", async ({ dataToPost }, { rejectWithValue }) => {
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/`, {
      method: "POST",
      body: JSON.stringify(dataToPost),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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

const fetchPostSlice = createSlice({
  name: "fetchPost",
  initialState,
  reducers: {
    setPostText: (state, action) => {
      state.post.text = action.payload;
    },
    resetPostText: (state, action) => {
      state.post.text = "";
    },
    addMyPost: (state, action) => {
      if (!state.myPosts.includes(action.payload)) {
        state.myPosts.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.postList = action.payload;
      })
      .addCase(fetchAllPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const selectMyProfileData = (state) => state.fetchPost.postList;
export const { setPostText, resetPostText, addMyPost } = fetchPostSlice.actions;
export default fetchPostSlice.reducer;
