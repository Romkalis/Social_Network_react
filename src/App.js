import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/main/Profile/Profile";
import Dialogs from "./components/main/Dialogs/Dialogs";
import Music from "./components/main/Music/Music";
import News from "./components/main/News/News";
import Settings from "./components/main/Settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = ({postsData,messagesData,dialogsData}) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route 
              path="/dialogs/*"
              element={
                <Dialogs
                  messagesData={messagesData}
                  dialogsData={dialogsData}
                />
              }
            />
            <Route
              path="/profile"
              element={<Profile postsData={postsData} />}
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
