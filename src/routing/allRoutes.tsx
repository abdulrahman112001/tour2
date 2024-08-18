import { t } from "i18next";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { useAuth } from "../context/auth-and-perm/AuthProvider";

import { Home } from "../pages/home";

import { ErrorPage } from "./ErrorPage";
import { Root } from "./Root";
import { Login } from "../pages/login";
import { Countries } from "../pages/countries/Index";
import { Cities } from "../pages/cities/Index";
import { Places } from "../pages/places/Index";
import { Categories } from "../pages/categories/Index";
import { Tours } from "../pages/tours/Index";
import AddTour from "../pages/tours/add";
import { Blogs } from "../pages/blogs/Index";

export const AllRoutesProvider = () => {
  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;
  const [toggled, setToggled] = useState(false);
  const { hasPermission } = useAuth();

  // tail
  return (
    <Routes>
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route path="*" element={<ErrorPage />} />
        <Route element={<Home title={t("Home")} />} />
        <Route
          path="/countries"
          element={<Countries title={t("Countries")} />}
        />
        <Route path="/cities" element={<Cities title={t("Cities")} />} />
        <Route path="/places" element={<Places title={t("Places")} />} />
        <Route
          path="/categories"
          element={<Categories title={t("Categories")} />}
        />
        <Route path="/tours" element={<Tours title={t("Tours")} />} />
        <Route path="/tours/add" element={<AddTour title={t("Add Tours")} />} />
        <Route path="/blogs" element={<Blogs title={t("blogs")} />} />


      </Route>

      <Route
        errorElement={<ErrorPage />}
        path="/login"
        element={<Login title={t("login")} />}
      />
    </Routes>
  );
};
