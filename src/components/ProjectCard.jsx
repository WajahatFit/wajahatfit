import React from "react";
export default function ProjectCard(props) {
  return (
    <div className="md:transition md:ease-in-out md:delay-110 md:hover:-translate-y-2 md:hover:scale-150 h-full w-96 flex flex-col items-center space-y-4 pb-8 drop-shadow-lg">
      <h1 className="text-2xl text-gray-500 bg-transparent pb-2 border-b-4 border-indigo-500 rounded-md shadow-2xl">
        {props.title}
      </h1>
      <a href={props.link} target="_blank" rel="noreferrer">
        <img className="rounded-lg" src={props.image} alt={props.imgAlt} />
      </a>
    </div>
  );
}
