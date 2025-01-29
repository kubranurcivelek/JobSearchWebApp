import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import JobPosts from "./pages/JobPosts";
import JobPostsDetail from "./pages/JobPostsDetail";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  return (
    <>
      <Navbar user={user} setUser={setUser} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/giriş"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route path="/is-ilanlari" element={<JobPosts />} />
        <Route path="/is-ilanlari/:ilanadi" element={<JobPostsDetail />} />
      </Routes>
    </>
  );
}

export default App;
