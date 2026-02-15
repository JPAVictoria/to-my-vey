"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const TransitionContainer = styled(motion.div)({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#000",
  zIndex: 9999,
});

const TransitionText = styled(motion.h1)({
  fontFamily: '"Pacifico", cursive',
  fontSize: "clamp(2.5rem, 8vw, 4rem)",
  color: "#FF69B4",
  textAlign: "center",
  letterSpacing: "0.05em",
});

export default function Transition({ show, onComplete }) {
  React.useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onComplete();
      }, 5000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, [show, onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <TransitionContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TransitionText
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            Let's take a trip down memory lane...
          </TransitionText>
        </TransitionContainer>
      )}
    </AnimatePresence>
  );
}
