import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function About(props) {
  return (
    <Box sx={{ color: "text.secondary" }}>
      <Typography fontSize="1.1em" variant="body1" textAlign="justify" mb={1}>
        I'm new to the Web Development industry, although back in my school time
        I was very passionate about web design and development. I used to be a
        freelancer building websites using HTML and CSS, and integrating them
        into Joomla CMS.
      </Typography>
      <Typography fontSize="1.1em" variant="body1" textAlign="justify" mb={1}>
        During my career, I have worked in different industries and positions
        such as salesperson, manager, and filmmaker. In each role, I have always
        achieved high performance.
      </Typography>

      <Typography fontSize="1.1em" variant="body1" textAlign="justify" mb={1}>
        I recently finished an online Web Development Bootcamp and learned many
        things such as HTML, CSS, JavaScript, Bootstrap, DOM, jQuery, API, NPM,
        Node.js, Express.js, GitHub, React, MongoDB, Redux. My current knowledge
        and comprehension of those technologies allow me to build a modern
        responsive web application from scratch.
      </Typography>
      <Typography fontSize="1.1em" variant="body1" textAlign="justify" mb={1}>
        I never stop learning new features and tools that are used for Web
        Development.
      </Typography>
    </Box>
  );
}
