import React, { useState } from 'react';
import './project.css';
import { Element } from 'react-scroll';

const ProjectItem = ({ img, title, desc }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="project-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img} alt={title} />
      <div className="project-details" style={{ display: hovered ? 'block' : 'none' }}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const Project = () => {
  const cli_Projects = [
    {
      img: "https://cdn.analyticsvidhya.com/wp-content/uploads/2023/09/data-science-projects.png",
      title: "Railway Ticket Booking System",
      desc: "A Desktop Application which is developed with the help of NETBEANS IDE",
    },
    {
      img: "https://cdn.analyticsvidhya.com/wp-content/uploads/2023/09/data-science-projects.png",
      title: "Water Level Indicator",
      desc: "A MicroProcessor Project which is designed with the help of Arduino IDE and Arduino Kit",
    },
    {
      img: "https://cdn.analyticsvidhya.com/wp-content/uploads/2023/09/data-science-projects.png",
      title: "Bus Ticket Booking System",
      desc: "A Web Application which is developed with the help of HTML, CSS, SQL",
    },
  ];

  return (
    <Element className="projectcontainer" id="projectid">
      <h1>Projects</h1>
      <p>Here are some of the Projects done by me during my Bachelors Program under Computer Science and Engineering</p>
      <div className="projects">
        {cli_Projects.map((project, index) => (
          <ProjectItem key={index} img={project.img} title={project.title} desc={project.desc} />
        ))}
      </div>
    </Element>
  );
};

export default Project;
