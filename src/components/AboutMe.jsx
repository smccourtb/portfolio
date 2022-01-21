import { Container, Header } from "../styles/shared-styles";
import ProfilePic from "../assets/images/profile.jpg";
import styled from "styled-components/macro";

const ProfilePicture = styled.img`
  border-radius: 50%;
  height: 8em;
  width: 8em;
  align-self: flex-end;
  float: right;
`;
export const AboutMe = () => {
  return (
    <Container column center fullPage>
      <header
        style={{
          width: "27px",
          height: "70px",
          backgroundColor: "#EFC269",
        }}
      >
        <Header>About</Header>
      </header>
      <div>
        <ProfilePicture src={ProfilePic} alt="Me! Shawn McCourt" />
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
      </div>
    </Container>
  );
};
