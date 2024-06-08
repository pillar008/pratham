import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h2>Welcome to Pratham NGO</h2>
        <p>Improving the quality of education in India.</p>
        <img
          src="https://www.pratham.org/wp-content/uploads/2019/03/pratham-logo.svg"
          alt="Pratham Logo"
        />
      </section>
      <section className="intro">
        <h3>Who We Are</h3>
        <p>
          Pratham is an innovative learning organization created to improve the
          quality of education in India. We aim to ensure that every child is in
          school and learning well.
        </p>
        <a href="/about" className="learn-more">
          Learn More
        </a>
      </section>
    </div>
  );
};

export default Home;
