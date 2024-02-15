import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/mynotes" Component={() => <MyNotes />} />
        </Routes>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
