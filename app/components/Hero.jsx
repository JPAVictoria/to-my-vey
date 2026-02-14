"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import visuallyHidden from "@mui/utils/visuallyHidden";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

const VideoBackground = styled("video")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: -2,
}));

const VideoOverlay = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background:
    "linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%)",
  zIndex: -1,
}));

const AnimatedTitle = styled(motion.div)({
  fontFamily: '"Pacifico", cursive',
  fontSize: "clamp(3rem, 10vw, 3.5rem)",
  color: "white",
  textAlign: "center",
  letterSpacing: "0.05em",
  position: "relative",
  "@media (max-width: 360px)": {
    fontSize: "clamp(2.5rem, 10vw, 1rem)",
    letterSpacing: "0.02em",
  },
});

const CursiveText = ({ text, delay = 0 }) => {
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
      rotateZ: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateZ: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      style={{ display: "inline-block", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          style={{
            display: "inline-block",
            marginRight: letter === " " ? "0.3em" : "0",
          }}
          variants={child}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function Hero() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
        rel="stylesheet"
      />

      <Box
        id="hero"
        sx={{
          width: "100%",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <VideoBackground autoPlay loop muted playsInline>
          <source src="/sample-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </VideoBackground>

        <VideoOverlay />

        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Stack
            spacing={2}
            useFlexGap
            sx={{ alignItems: "center", width: { xs: "100%", sm: "70%" } }}
          >
            <AnimatedTitle>
              <CursiveText text="Kano Kabana" delay={0} />
            </AnimatedTitle>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2, ease: "easeOut" }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  color: "rgba(255, 255, 255, 0.8)",
                  width: { sm: "100%", md: "80%" },
                  mx: "auto",
                }}
              >
                Located in Mariveles, Bataan, Kano Kabana offers a one-of-a-kind
                destination that blends comfort, local charm, scenic beauty, and
                unforgettable experiences.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.5, ease: "easeOut" }}
              style={{ width: "100%" }}
            >
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1}
                useFlexGap
                sx={{ pt: 2, width: { xs: "100%", sm: "350px" }, mx: "auto" }}
              >
                <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
                  Email
                </InputLabel>
                <TextField
                  id="email-hero"
                  hiddenLabel
                  size="small"
                  variant="outlined"
                  aria-label="Enter your email address"
                  placeholder="Your email address"
                  fullWidth
                  slotProps={{
                    htmlInput: {
                      autoComplete: "off",
                      "aria-label": "Enter your email address",
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                      },
                    },
                  }}
                />
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    minWidth: "fit-content",
                    border: "0",
                    background:
                      "linear-gradient(135deg, #FD7A31 0%, #FF6B1A 50%, #E85A00 100%)",
                    color: "white",
                    fontWeight: "600",
                    boxShadow: "0 4px 15px rgba(253, 122, 49, 0.3)",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #FF6B1A 0%, #FD7A31 50%, #FF8F4A 100%)",
                      boxShadow: "0 6px 20px rgba(253, 122, 49, 0.4)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  Start now
                </Button>
              </Stack>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3, ease: "easeOut" }}
            >
              <Typography
                variant="caption"
                color="rgba(255, 255, 255, 0.7)"
                sx={{ textAlign: "center" }}
              >
                By clicking &quot;Start now&quot; you agree to be part of our
                community
              </Typography>
            </motion.div>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
