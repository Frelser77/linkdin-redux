import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NotFound from "./components/NotFound";
import { Container } from "react-bootstrap";
import Profile from "./components/Profile";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProfiles } from "./redux/slice/fetchAllProfilesReducers";
import AllProfiles from "./components/AllProfiles";

function App() {
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.fetchAllProfiles.data);

  useEffect(() => {
    if (!profiles) {
      dispatch(fetchAllProfiles());
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/profile" element={<AllProfiles />} />
            <Route path="/profile/me" element={<Profile />} />
            <Route path="/profile/:userId" element={<Profile />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
