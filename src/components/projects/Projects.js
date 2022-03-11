import React from "react";
import Grid from "@mui/material/Grid";
import ProjectsElement from "./ProjectsElement";
import { Divider } from "@mui/material";

const projects = [
  {
    id: 1,
    title: "Spacestagram",
    content: `The App shows you an Astronomy Picture of the Day gitting by
              NASA's free API based on the current date for default. You can
              choose any date and get a picture/video taken on that day. You
              also can like or unlike pictures. The App will remember your likes
              even after refreshing or closing the App.`,
    builtWith: "JavaScript, React, HTML, CSS, MUI.",
    imgUrl: "/projects-images/Spacestagram.png",
    liveUrl: "https://romantic-franklin-f8be37.netlify.app/",
    repoUrl: "https://github.com/ekasimov1/spacestagram-v2",
  },
  {
    id: 2,
    title: "Bill Splitter",
    content:
      "The App helps you calculate tips and bill amounts splitting them per person. You can choose pre-built tip amounts or set a custom one. The App has a responsive design and works well on desktop and mobile devices.",
    builtWith: "JavaScript, React, HTML, CSS.",
    imgUrl: "/projects-images/Billsplitter.png",
    liveUrl: "https://epic-stonebraker-f27683.netlify.app/",
    repoUrl: "https://github.com/ekasimov1/Bill-Splitter",
  },
  {
    id: 3,
    title: "To-Do List",
    content: (
      <span>
        A To-Do lists app allows you to add or delete tasks. You can also create
        new lists by adding a name of a new list in the browser's address bar.{" "}
        <img
          alt="address bar"
          style={{ width: "100%", marginBottom: "5px", marginTop: "5px" }}
          src="/projects-images/todolist-bar.png"
        />
        All data is stored in a database.
      </span>
    ),
    builtWith: "JavaScript, Node.js, Express.js, MongoDB, HTML, CSS.",
    imgUrl: "/projects-images/Todolist.png",
    liveUrl: "https://secure-shore-29498.herokuapp.com/",
    repoUrl: "https://github.com/ekasimov1/mytodolistapp",
  },
];

export default function Projects() {
  return (
    <Grid container>
      {projects.map((project) => (
        <ProjectsElement
          key={project.id}
          titleProject={project.title}
          contentProject={project.content}
          builtWithProject={project.builtWith}
          imgUrlProject={project.imgUrl}
          liveUrlProject={project.liveUrl}
          repoUrlProject={project.repoUrl}
        />
      ))}
    </Grid>
  );
}
