import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const skills = [
	{
		skill: "Html+css",
		level: "advanced",
		color: "#0ced10",
	},
	{
		skill: "Javascript",
		level: "advanced",
		color: "#faf202",
	},
	{
		skill: "react",
		level: "intermediate",
		color: "#5381ed",
	},
	{
		skill: "wordpress",
		level: "intermediate",
		color: "#8f99b3",
	},
	{
		skill: "git and github",
		level: "intermediate",
		color: "#e81313",
	},
];

function App() {
	return (
		<div className="card">
			<Avatar />
			<div className="data">
				<Intro />
				<SkillList />
			</div>
		</div>
	);
}

function Avatar() {
	return <img className="avatar" src="/elahe.jpg" alt="elahe vakili" />;
}

function Intro() {
	return (
		<div>
			<h1>Elahe vakili</h1>
			<p>Front-end Developer, passionate about coding and creating stunning web experiences for businesses. I enjoy my work and take great pride in it.</p>
		</div>
	);
}

function SkillList() {
	return (
		<div className="skill-list">
			{skills.map((skill, index) => (
				<Skill key={index} skill={skill.skill} color={skill.color} level={skill.level} />
			))}
		</div>
	);
}

function Skill({ skill, color, level }) {
	return (
		<div className="skill" style={{ background: color }}>
			<span>{skill}</span>
			<span>
				{level === "bigginner" && "👶"}
				{level === "intermediate" && "👍"}
				{level === "advanced" && "💪"}
			</span>
		</div>
	);
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
