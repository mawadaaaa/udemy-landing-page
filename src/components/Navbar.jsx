import React from "react";

export function Navbar() {
  return (
    <nav className="navbar">
      <h1>Udemy</h1>
      <input placeholder="Search for anything" />
      <div>
        <button>Udemy Business</button>
        <button>Teach on Udemy</button>
        <button>Login</button>
        <button className="signup">Sign Up</button>
      </div>
    </nav>
  );
}
