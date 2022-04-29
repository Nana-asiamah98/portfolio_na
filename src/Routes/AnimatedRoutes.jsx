import React from "react";
import { Route, Routes, useLocation } from "react-router";
import MainPage from "../Pages/MainPage/main-page";
import ProjectsPage from "../Pages/Projects/projects-page";
import AboutPage from "../Pages/About/about-page";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </AnimatePresence>
  );
}
