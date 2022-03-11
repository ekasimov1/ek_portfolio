import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Module(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id={props.id}>
      <Grid
        data-aos="fade-up"
        data-aos-once
        container
        justifyContent="center"
        alignItems="center"
        mb={10}
        pt={5}
      >
        <Grid container justifyContent="start" display="inline">
          <Typography
            pb={4}
            pl={2}
            variant="h5"
            fontSize="1.5em"
            sx={{ color: "#1687A7" }}
          >
            {props.moduleTitle}
          </Typography>
          <Paper
            elevation={0}
            sx={{
              padding: { xs: 2, md: 5 },
              borderRadius: 2,
              backgroundColor: "#fff",
            }}
          >
            {props.moduleContent}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
