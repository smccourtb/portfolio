import styled from "styled-components/macro";
import { Container } from "./global/GlobalStyles";
import { motion } from "framer-motion";

export const ProjectContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  min-width: 100%;
  max-width: 700px;
  min-height: 70vh;
  max-height: 80vh;
  font-size: 12px;
  gap: 0.5em;
  padding: 2em;
`;

export const Div = styled(motion.div)`
  flex: 1 1;
`;

export const SortButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
  color: whitesmoke;
`;

export const OuterProjectContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 100%;
`;

export const ProjectsContainer = styled(Container)`
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  z-index: 1;
  flex-wrap: wrap;
  width: 70vw;
  justify-content: space-between;
  border-bottom: 2px solid whitesmoke;,
`;
