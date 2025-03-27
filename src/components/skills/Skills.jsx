import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Informatique from "./Informatique";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Compétences</h2>
      <span className="section__subtitle">Découvrer mes compétences</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <Informatique />
      </div>
    </section>
  );
};

export default Skills;
