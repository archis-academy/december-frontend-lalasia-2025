import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@pages/home/home";
import "@src/main.scss";
import AboutUs from "./pages/AboutUs/AboutUs";
import Article from "./pages/Article/Article";
import Error from "./pages/Error/Error";
import Login from "./pages/Login/Login";
import Products from "./pages/Product/Products";
import ProductDetail from "./pages/ProductDetails/ProductDetail";
import Services from "./pages/Services/Services";
import SignUp from "./pages/SignUp/SignUp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/article" element={<Article />} />
        <Route path="/*" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
