import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { token } from "../../token";
import { useSelector } from "react-redux";

const initialState = {
  data: null,
  status: "idle",
  error: "",
};

export const fetchProfile = createAsyncThunk("profile/fetchProfile", async (_, { rejectWithValue }) => {
  const queryParam = useSelector((state) => state.queryParam.query);
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${queryParam}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        // Assicurati di includere qualsiasi header per l'autenticazione se necessario
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json(); // Il tuo profilo è ora nel formato corretto
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const fetchProfileSlice = createSlice({
  name: "fetchProfile",
  initialState,
  builder: {
    [fetchProfile.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchProfile.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
      console.log(state.data);
    },
    [fetchProfile.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});
export const {} = fetchProfileSlice.actions; // esporta qualsiasi azione sincrona
export default fetchProfileSlice.reducer;
