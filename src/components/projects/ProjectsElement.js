import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Link, Paper } from "@mui/material";
import "aos/dist/aos.css";

export default function ProjectsElement(props) {
  return (
    <Box className="box-module" sx={{ padding: "15px", marginBottom: "35px" }}>
      <Grid container>
        <Grid
          item
          md={5}
          textAlign={{ xs: "center", md: "left" }}
          mb={{ xs: "20px", md: 0 }}
        >
          <img className="projects-image" src={props.imgUrlProject} />
        </Grid>
        <Grid item md={7}>
          <Box sx={{ color: "text.secondary" }}>
            <Typography variant="h5" textAlign="justify" mb={1}>
              {props.titleProject}
            </Typography>
            <Typography
              fontSize="1.1em"
              variant="body1"
              textAlign="justify"
              mb={3}
            >
              {props.contentProject}
            </Typography>
            <Typography
              variant="h6"
              fontSize="1.1em"
              textAlign="justify"
              mb={1}
            >
              Built with
            </Typography>
            <Typography
              fontSize="1.1em"
              variant="body1"
              textAlign="justify"
              mb={3}
            >
              {props.builtWithProject}
            </Typography>
            <Typography
              fontSize="1.1em"
              variant="body1"
              textAlign="justify"
              mb={1}
            >
              <Link
                href={props.liveUrlProject}
                target="_blank"
                mr={2}
                sx={{ color: "#1687A7" }}
              >
                Live
              </Link>
              <Link
                href={props.repoUrlProject}
                target="_blank"
                sx={{ color: "#1687A7" }}
              >
                Repo
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
