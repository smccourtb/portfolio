import { Container } from "../../styles/global/GlobalStyles";
import { useParams } from "react-router-dom";

const ProjectDocs = () => {
  let { name } = useParams();
  return (
    <Container style={{ background: "white", color: "black", zIndex: "10" }}>
      `HELLO ${name}`
    </Container>
  );
};

export default ProjectDocs;
