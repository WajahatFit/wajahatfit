import React from "react";
import SkillCard from "./SkillCard";
import Reactjs from "../images/React-icon.svg.png";
import JavaScript from "../images/javascript-logo-transparent-logo-javascript-images-3.png";
import Mongo from "../images/mongodb-replicaset.png";
import Express from "../images/express.png";
import Node from "../images/node.png";
import Css from "../images/css.png";
import Html from "../images/html.png";
import Tailwind from "../images/tailwind.jpg";
import Next from "../images/nextjs.jpeg";
import Axios from "../images/axios.png";
import Handlebars from "../images/handlebars.webp";

export default function Skills() {
  return (
    <div
      id="skills"
      className="h-full flex flex-col justify-evenly items-center bg-black-600 pt-20 pb-20"
    >
      <h1 className="font-serif text-center text-4xl font-semibold tracking-widest lg:text-6xl">
        Skills
      </h1>
      <h2 className="text-center text-2xl text-gray-500 p-8">
        My stack is MERN. Mongo, Express, React & Node. I also use all the
        folowing technologies.
      </h2>
      <div className="flex flex-wrap justify-evenly space-y-8 items-end p-12 xl:flex flex-wrap items-end hover:flex  w-full">
        <SkillCard image={Reactjs} />
        <SkillCard image={JavaScript} />
        <SkillCard image={Mongo} />
        <SkillCard image={Express} />
        <SkillCard image={Node} />
        <SkillCard image={Css} />
        <SkillCard image={Html} />
        <SkillCard image={Tailwind} />
        <SkillCard image={Next} />
        <SkillCard image={Axios} />
        <SkillCard image={Handlebars} />
      </div>
    </div>
  );
}
