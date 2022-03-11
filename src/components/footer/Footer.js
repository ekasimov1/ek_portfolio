import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      id="footer"
      sx={{
        backgroundColor: "#276678",
      }}
    >
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          minHeight={{ xs: "80px", md: "100px" }}
        >
          <Grid item>
            <Typography variant="subtitle1" color="#F6F5F5">
              Developed by Eugene Kasimov. Copyright {currentYear}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
