import React from "react";
import "./Programs.css";

const Programs = () => {
  return (
    <div className="programs">
      <h2>Our Programs</h2>
      <div className="program-list">
        <div className="program">
          <h3>Education for All</h3>
          <p>
            We work to provide quality education to children in underserved
            communities.
          </p>
          <img
            src="https://www.pratham.org/wp-content/uploads/2019/02/community.jpg"
            alt="Education for All"
          />
        </div>
        <div className="program">
          <h3>Digital Learning</h3>
          <p>
            Our digital initiatives aim to bring technology-based education to
            every child.
          </p>
          <img
            src="https://www.pratham.org/wp-content/uploads/2019/02/digital.jpg"
            alt="Digital Learning"
          />
        </div>
        <div className="program">
          <h3>Vocational Training</h3>
          <p>
            We provide vocational training to youth to enhance their employment
            opportunities.
          </p>
          <img
            src="https://www.pratham.org/wp-content/uploads/2019/02/vocational.jpg"
            alt="Vocational Training"
          />
        </div>
        <div className="program">
          <h3>Community Outreach</h3>
          <p>
            Our community outreach programs engage local communities to support
            education initiatives.
          </p>
          <img
            src="https://www.pratham.org/wp-content/uploads/2019/02/outreach.jpg"
            alt="Community Outreach"
          />
        </div>
      </div>
    </div>
  );
};

export default Programs;
