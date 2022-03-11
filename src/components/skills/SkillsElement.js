import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Aos from "aos";
import "aos/dist/aos.css";

const mySkills = [
  { name: "HTML", url: "/skills_icons/html-5.png" },
  { name: "CSS", url: "/skills_icons/css-3.png" },
  { name: "JavaScript", url: "/skills_icons/js.png" },
  { name: "Node.js", url: "/skills_icons/nodejs.png" },
  { name: "jQuery", url: "/skills_icons/jquery.png" },
  { name: "React", url: "/skills_icons/atom.png" },
  { name: "Redux", url: "/skills_icons/redux.png" },
  { name: "GitHub", url: "/skills_icons/github.png" },
  { name: "RESTful API", url: "/skills_icons/restapi.png" },
  { name: "MongoDB", url: "/skills_icons/mongodb.png" },
  { name: "Bootstrap", url: "/skills_icons/bootstrap.png" },
  { name: "MUI", url: "/skills_icons/mui.png" },
  { name: "VS Code", url: "/skills_icons/vscode.png" },
  { name: "Python", url: "/skills_icons/python.png" },
];

const Skills = (props) => {
  const [elevation, setElevation] = useState(2);

  return (
    <div>
      <Paper
        onMouseOver={() => setElevation(10)}
        onMouseLeave={() => setElevation(2)}
        elevation={elevation}
        sx={{
          width: "100px",
          height: "100px",
          textAlign: "center",
        }}
      >
        <img
          className="skills-icon"
          src={props.skill.url}
          alt={props.skill.name}
        />
        <Typography variant="body2" color="text.secondary][" mt={1}>
          {props.skill.name}
        </Typography>
      </Paper>
    </div>
  );
};

export default function SkillsElement() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Grid
      container
      spacing={{ xs: 3, md: 6 }}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {mySkills.map((skill) => {
        return (
          <Grid item data-aos="zoom-in" data-aos-once key={skill.name}>
            <Skills skill={skill} />
          </Grid>
        );
      })}
    </Grid>
  );
}
