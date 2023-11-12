"use client"
import React from "react";
import Col from "react-bootstrap/Col";
import SkillsBar from "./SkillsBar";

const skillsData = {
    show: true,
    heading: "Skills",
    hardSkills: [
      { name: "Python", value: 90 },
      { name: "SQL", value: 75 },
      { name: "Data Structures", value: 85 },
      { name: "C/C++", value: 65 },
      { name: "JavaScript", value: 90 },
      { name: "React", value: 65 },
      { name: "HTML/CSS", value: 55 },
      { name: "C#", value: 80 },
    ],
    softSkills: [
      { name: "Goal-Oriented", value: 80 },
      { name: "Collaboration", value: 90 },
      { name: "Positivity", value: 75 },
      { name: "Adaptability", value: 85 },
      { name: "Problem Solving", value: 75 },
      { name: "Empathy", value: 90 },
      { name: "Organization", value: 70 },
      { name: "Creativity", value: 90 },
    ],
  };

function SkillsSection({ skills, isScrolled }) {

  return (
    <>
      {skills.map((skill, index) => (
        <SkillsBar
          key={`${skill}-${index}`}
          skill={skill.name}
          value={skill.value}
          isScrolled={isScrolled}
        />
      ))}
    </>
  );
}

function SkillsTab({ skills, isScrolled }) {
  return (
    <>
      <Col xs={12} md={6}>
        <SkillsSection
          skills={skillsData.hardSkills}
          isScrolled={isScrolled}
        />
      </Col>
      <Col xs={12} md={6}>
        <SkillsSection
          skills={skillsData.softSkills}
          isScrolled={isScrolled}
        />
      </Col>
    </>
  );
}

export default SkillsTab;