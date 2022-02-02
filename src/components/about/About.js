import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function About(props) {
  return (
    <Typography
      variant="body1"
      component={"span"}
      sx={{ color: "text.secondary" }}
      gutterBottom
    >
      <Typography gutterBottom>
        I'm new to the Web development industry, although back in my school time
        I was very passionate about web design and development. I used to be a
        freelancer building websites using HTML and CSS, and integrating them
        into Joomla CMS.
      </Typography>
      <Typography gutterBottom>
        During my career, I have worked in different industries and positions
        such as salesperson, manager, and filmmaker. In each role, I have always
        achieved high performance.
      </Typography>

      <Typography gutterBottom>
        Analyzing the current labor market I can see that the IT industry, in
        particular, Software Development is one of the most in-demand and
        prospective niches. So, I decided to get back into the industry and
        start from the beginning.
      </Typography>

      <Typography gutterBottom>
        I recently finished an online Web Development Bootcamp and learned many
        things such as HTML, CSS, JavaScript, Bootstrap, DOM, jQuery, API, NPM,
        Node.js, Express.js, GitHub, React, MongoDB, Redux. My current knowledge
        and comprehension of those technologies allow me to build a modern
        responsive web application from scratch.
      </Typography>

      <Typography gutterBottom>
        I never stop learning new features and tools that are used for Web
        Development. I have also started learning algorithms and using LeetCode
        to improve my ability to solve problems most efficiently.
      </Typography>
    </Typography>
  );
}
