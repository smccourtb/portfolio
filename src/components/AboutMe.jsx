import { Header } from "../styles/shared-styles";
import { Container } from "../App";
import ProfilePic from "../assets/images/profile.jpg";
import styled from "styled-components/macro";

const ProfilePicture = styled.img`
  border-radius: 50%;
  height: 8em;
  width: 8em;
  align-self: flex-end;
`;
export const AboutMe = () => {
  return (
    <Container column center>
      <header
        style={{
          width: "27px",
          height: "70px",
          backgroundColor: "#EFC269",
        }}
      >
        <Header>About</Header>
      </header>
      <ProfilePicture src={ProfilePic} alt="" />
      <p
        style={{
          color: "#33404e",
          fontWeight: "500",
          fontFamily: "Raleway",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
        blanditiis distinctio eligendi error excepturi fuga, illum iure magnam
        maxime optio possimus quibusdam recusandae, reprehenderit unde vero
        vitae voluptatum. Itaque, reiciendis.
      </p>
    </Container>
  );
};
