import styled from "styled-components/macro";
import { motion } from "framer-motion";

export const Paragraph = styled(motion.p)`
  text-align: ${({ first }) => (first ? "right" : "left")};
  font-size: 0.9em;
  align-self: center;
  padding: ${({ first }) => (first ? `0 0.5em 0 0` : `0 0 0 0.5em`)};
  height: 100%;
  width: 100%;
`;

export const ContentGrid = styled(motion.div)`
  display: grid;
  padding: 2em 1em;
  max-width: 700px;
  max-height: 600px;
  grid-template-columns: 1fr 3px 1fr;
  grid-template-rows: 1fr 1fr;
`;

export const ContentGridContentContainer = styled.div`
  overflow: hidden;
  position: relative;
`;

export const Strikethrough = styled.span`
  text-decoration: line-through;
`;

export const Snippet = styled.span`
  font-style: italic;
  font-weight: bold;
  position: absolute;
  bottom: 15%;
  left: 0;
  right: 0;
  padding: 0 3em;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;
