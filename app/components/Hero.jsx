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
          <source src="/baby.mov" type="video/mp4" />
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
              <CursiveText text="To my Vey," delay={0} />
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
                The strongest and most beautiful girl I know. 
              </Typography>
            </motion.div>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
