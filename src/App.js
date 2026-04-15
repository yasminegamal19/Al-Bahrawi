import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useTranslation } from "react-i18next";
import {useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from './shared/components/Navbar/Navbar';
import Layouts from './shared/components/Layouts/Layouts'
import Footer from './shared/components/Footer/Footer';
import CopyRight from "./shared/components/Copy-Right/CopyRight";
function App() { 

   const {i18n} = useTranslation();

  useEffect(() => {
    const isArabic = i18n.language === "ar";

    document.documentElement.lang = isArabic ? "ar" : "en";
    document.documentElement.dir = isArabic ? "rtl" : "ltr";

    document.body.classList.toggle("lang-ar", isArabic);
    document.body.classList.toggle("lang-en", !isArabic);
  }, [i18n.language]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Layouts />} />
      </Routes>
      <Footer />
      <CopyRight />
    </div>
  );
}

export default App;
