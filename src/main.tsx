import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@pages/home/home";
import "./styles/_reset.scss";
import "@src/main.scss";
import AboutUs from "./pages/AboutUs/AboutUs";
import Article from "./pages/Article/Article";
import Error from "./pages/Error/Error";
import Login from "./pages/Login/Login";
import Products from "./pages/Product/Products";
import ProductDetail from "./pages/ProductDetails/ProductDetail";
import Services from "./pages/Services/Services";
import SignUp from "./pages/SignUp/SignUp";
import MainLayout from "./layouts/MainLayout/MainLayout";
import ArticleDetail from "./pages/ArticleDetail/ArticleDetail";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        {/* MainLayout begin */}
        <Route path="/" element={<MainLayout />}>

          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="services" element={<Services />} />
          <Route path="articles" element={<Article />} />
          <Route path="articles/:id" element={<ArticleDetail />} />
          <Route path="about-us" element={<AboutUs />} />

        </Route>
        {/* MainLayout end */}

        {/* AuthLayout begin */}
        <Route path="/auth" element={<AuthLayout />}>

          <Route index path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />

        </Route>
        {/* Authlayout end */}

        {/* 404 Not Found */}
        <Route path="/*" element={<Error />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
