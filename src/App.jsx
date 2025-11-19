import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeaturedCourses } from "./components/FeaturedCourses";
import { Categories } from "./components/Categories";
import { TrustedCompanies } from "./components/TrustedCompanies";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedCourses />
      <Categories />
      <TrustedCompanies />
    </div>
  );
}
