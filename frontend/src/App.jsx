import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <LandingPage></LandingPage>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
