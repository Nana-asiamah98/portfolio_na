import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes } from "react-router";
import AboutPage from "../Pages/About/about-page";
import MainPage from "../Pages/MainPage/main-page";
import ProjectsPage from "../Pages/Projects/projects-page";

export default function AnimatedRoutes() {
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
