import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Pratham was founded in 1995 to provide pre-school education to children
        in Mumbai slums. Over the years, we have grown to become one of the
        largest non-governmental organizations in India, working to improve the
        quality of education across the country.
      </p>
      <img
        src="https://www.pratham.org/wp-content/uploads/2019/02/teacher.jpg"
        alt="About Pratham"
      />
      <p>
        Our mission is to ensure "every child in school and learning well". We
        focus on high-quality, low-cost, and replicable interventions to address
        gaps in the education system.
      </p>
    </div>
  );
};

export default About;
