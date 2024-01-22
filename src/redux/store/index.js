import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import fetchProfileReducer from "../slice/fetchProfileReducer";
import fetchAllProfilesReducers from "../slice/fetchAllProfilesReducers";
import editProfileReducer from "../slice/editProfileReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  fetchProfile: fetchProfileReducer,
  fetchAllProfiles: fetchAllProfilesReducers,
  editProfile: editProfileReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
