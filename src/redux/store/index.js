import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fetchProfileReducer from "../slice/fetchProfileReducer";
import fetchAllProfilesReducers from "../slice/fetchAllProfilesReducers";
import editProfileReducer from "../slice/editProfileReducer";
import ExperienceSlice from "../slice/ExperienceSlice";

const rootReducer = combineReducers({
  fetchProfile: fetchProfileReducer,
  fetchAllProfiles: fetchAllProfilesReducers,
  editProfile: editProfileReducer,
  FetchExperiences: ExperienceSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
