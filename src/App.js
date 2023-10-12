import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/main/Profile/ProfileContainer";
import DialogsContainer from "./components/main/Dialogs/DialogsContainer";
import Music from "./components/main/Music/Music";
import UsersContainer from "./components/main/Users/UsersContainer";
// import Photos from "./components/main/Photos/Photos";
import News from "./components/main/News/News";
import Settings from "./components/main/Settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar
        // isFriend={props.isFriend}
        />
        <main className="main-content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={<DialogsContainer store={props.store} />}
            />
            <Route path="/profile/*" element={<ProfileContainer store={props.store} />} />
            <Route path="/users" element={<UsersContainer store={props.store}/>}/>
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            {/* <Route path="/photos" element={<Photos />} /> */}
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
