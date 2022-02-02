import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function Module(props) {
  return (
    <Grid container justifyContent="center" alignItems="center" mb={15}>
      <Grid container justifyContent="start" display="inline">
        <Typography
          pb={4}
          pl={2}
          variant="h5"
          fontSize="1.5em"
          sx={{ color: "#276678" }}
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
  );
}
