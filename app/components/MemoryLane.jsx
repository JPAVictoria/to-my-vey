"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { memories } from "../constants/memories/constants";

const MemoryContainer = styled(Box)({
  minHeight: "100vh",
  background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
  paddingTop: "80px",
  paddingBottom: "80px",
});

const MemoryCard = styled(motion.div)(({ reverse }) => ({
  display: "flex",
  flexDirection: reverse ? "row-reverse" : "row",
  alignItems: "center",
  gap: "60px",
  marginBottom: "120px",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    gap: "30px",
    marginBottom: "80px",
  },
}));

const ImageWrapper = styled(motion.div)({
  flex: "0 0 45%",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0 20px 60px rgba(255, 105, 180, 0.3)",
  "@media (max-width: 768px)": {
    flex: "0 0 100%",
    width: "100%",
  },
});

const MemoryImage = styled("img")({
  width: "100%",
  height: "400px",
  objectFit: "cover",
  display: "block",
  "@media (max-width: 768px)": {
    height: "300px",
  },
});

const MemoryVideo = styled("video")({
  width: "100%",
  height: "400px",
  objectFit: "cover",
  display: "block",
  "@media (max-width: 768px)": {
    height: "300px",
  },
});

const ContentWrapper = styled(motion.div)({
  flex: "1",
});

const MemoryTitle = styled(Typography)({
  fontFamily: '"Pacifico", cursive',
  fontSize: "clamp(2rem, 5vw, 3rem)",
  color: "#FF69B4",
  marginBottom: "20px",
  letterSpacing: "0.05em",
});

const MemoryDescription = styled(Typography)({
  fontSize: "1.1rem",
  lineHeight: "1.8",
  color: "rgba(255, 192, 203, 0.9)",
  "@media (max-width: 768px)": {
    fontSize: "1rem",
  },
});

const Header = styled(motion.div)({
  textAlign: "center",
  marginBottom: "80px",
});

const MainTitle = styled(Typography)({
  fontFamily: '"Pacifico", cursive',
  fontSize: "clamp(3rem, 8vw, 4.5rem)",
  color: "#FF69B4",
  marginBottom: "20px",
  letterSpacing: "0.05em",
});

const Subtitle = styled(Typography)({
  fontSize: "1.2rem",
  color: "rgba(255, 192, 203, 0.8)",
});

export default function MemoryLane() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <MemoryContainer>
      <Container maxWidth="lg">
        <Header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <MainTitle>Our Memory Lane</MainTitle>
        </Header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ marginTop: "30px" }}
        >
          {memories.map((memory, index) => (
            <MemoryCard
              key={index}
              reverse={index % 2 !== 0}
              variants={cardVariants}
            >
              <ImageWrapper variants={imageVariants}>
                {memory.type === "video" ? (
                  <MemoryVideo autoPlay loop muted playsInline>
                    <source src={memory.image} type="video/mp4" />
                  </MemoryVideo>
                ) : (
                  <MemoryImage src={memory.image} alt={memory.title} />
                )}
              </ImageWrapper>

              <ContentWrapper>
                <MemoryTitle>{memory.title}</MemoryTitle>
                <MemoryDescription>{memory.description}</MemoryDescription>
              </ContentWrapper>
            </MemoryCard>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ textAlign: "center", marginTop: "60px" }}
        >
          <Typography
            sx={{
              fontFamily: '"Pacifico", cursive',
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              color: "#FF69B4",
              letterSpacing: "0.05em",
            }}
          >
            And to many more...I LOVE YOU
          </Typography>
        </motion.div>
      </Container>
    </MemoryContainer>
  );
}
