import styled from "styled-components/macro";

const Container = styled.div`
  min-width: 100%;
  min-height: 350px;
  border-radius: 20px;
  position: relative;
  -webkit-transition: 1s ease-in-out;
  transition: 1s ease-in-out;
  transform-style: preserve-3d;

  :hover {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
`;
const Front = styled.div`
  z-index: 2;
  background-color: ${({ theme: { colors } }) => colors.lightShade};
  position: absolute;
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 20px 50px;
  color: #fff;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  border-radius: 20px;
  background-size: cover;
  background-image: url(https://livewallpaperhd.com/wp-content/uploads/2017/07/Dark-Elegant-Wallpaper.jpg);
`;
const Back = styled.div`
  background-color: #333;
  transform: rotateY(180deg);
  z-index: 0;
  position: absolute;
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 20px 50px;
  color: #fff;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  border-radius: 20px;
`;

const Content = styled.div`
  transform: translatez(70px) scale(0.8);
  line-height: 1.5em;

  :before {
    content: "";
    position: absolute;
    bottom: -20px;
    height: 3px;
    background-color: #3e3;
    width: 70px;
    left: 50%;
    transform: translateX(-50%);

    :first-child {
      position: relative;
    }
`;

export const Project = () => {
  return (
    <Container>
      <Front>
        <Content>
          <h3>Hakkam Abdullah</h3>
          <p>
            I am a graphic designer and art director. I am as well specialised
            in front end web design, user experience and creating identities.
            Throughout my career, I have worked with companies of all shapes and
            sizes that enriched my experience
          </p>
        </Content>
      </Front>
      <Back>
        <Content>
          <h3>Contact Me</h3>
        </Content>
      </Back>
    </Container>
  );
};
