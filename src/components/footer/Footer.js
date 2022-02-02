import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#D3E0EA" }}>
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          minHeight={{ xs: "80px", md: "100px" }}
        >
          <Grid item>
            <Typography variant="caption">
              Developed by Eugene Kasimov. Copyright 2022
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
