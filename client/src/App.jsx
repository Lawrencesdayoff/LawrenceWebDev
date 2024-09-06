import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
