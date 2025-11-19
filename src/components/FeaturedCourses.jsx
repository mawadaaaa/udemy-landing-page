import React from "react";
import { heroCourses } from "../data/dummyData";

export function FeaturedCourses() {
  return (
    <section className="featured-courses">
      <h3>Students are viewing</h3>
      <div className="featured-courses-grid">
        {heroCourses.map(course => (
          <div key={course.id} className="featured-courses-card">
            <img src={course.img} alt={course.title} />
            <h4>{course.title}</h4>
            <p>{course.instructor}</p>
            <p><strong>{course.price}</strong></p>
          </div>
        ))}
      </div>
    </section>
  );
}
