import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import emailjs from "emailjs-com";
import { Typography } from "@mui/material";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailCorrect, setIsEmailCorrect] = useState(true);
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [incorrectName, setIncorrectName] = useState(false);
  const [incorrectEmail, setIncorrectEmail] = useState(false);
  const [incorrectMessage, setIncorrectMessage] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = "service_wbc614r";
      const templateId = "template_ebsbp8z";
      const userId = "zjDVOAcD-xj09cyTF";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
      setTimeout(() => setEmailSent(false), 3000);
    } else {
      if (!name) {
        setIncorrectName(true);
      }
      if (!email || !isEmailCorrect) {
        setIncorrectEmail(true);
      }
      if (!message) {
        setIncorrectMessage(true);
      }
    }
  };

  const handleCorrectEmail = (e) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setIsEmailCorrect(regex.test(String(e.target.value).toLowerCase()));
  };

  return (
    <Box>
      {!emailSent ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "100%",
          }}
          alignItems="flex-start"
          marginLeft="auto"
          marginRight="auto"
        >
          <Box sx={{ width: "100%", display: "flex" }}>
            <Box
              component="form"
              sx={{ width: "50%" }}
              marginBottom={2}
              noValidate
              autoComplete="off"
            >
              <TextField
                fullWidth
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setIncorrectName(false);
                }}
                id="outlined-basic"
                error={incorrectName}
                type="text"
                label={incorrectName ? "Please, input your name" : "Name"}
                variant="outlined"
              />
            </Box>
            <Box sx={{ width: "50%" }} marginLeft={2} marginBottom={3}>
              <TextField
                fullWidth
                type="email"
                error={incorrectEmail}
                id="outlined-basic"
                label={incorrectEmail ? "Please, input correct email" : "Email"}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setIncorrectEmail(false);
                }}
                onBlur={handleCorrectEmail}
                variant="outlined"
              />
            </Box>
          </Box>
          <Box marginBottom={3} width="100%">
            <TextField
              id="outlined-multiline-flexible"
              label={incorrectMessage ? "Please, input a message" : "Message"}
              error={incorrectMessage}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setIncorrectMessage(false);
              }}
              multiline
              rows={5}
              fullWidth
            />
          </Box>
          <Button
            variant="outlined"
            size="large"
            href=""
            sx={{ color: "#1687A7", width: { xs: "100%", md: "200px" } }}
            onClick={submit}
          >
            Send
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "250px",
          }}
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h4"
            sx={{ color: "#1687A7", textAlign: "center" }}
          >
            Your message has been successfully sent!
          </Typography>
        </Box>
      )}
    </Box>
  );
}
