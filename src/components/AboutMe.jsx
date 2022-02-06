import Slide from "./aboutMe/Slide";
import { useState } from "react";
import { Container, Header } from "../styles/global/GlobalStyles";
import { DevelopmentIcon } from "./projects/DevelopmentIcon";
import {
  AnimContainer,
  Content,
  ContentContainer,
  Paragraph,
  Row,
  Snippet,
  Strikethrough,
  TextBorder,
} from "../styles/about-styles";

const techIconData = [
  { name: "Javascript", size: "3em" },
  { name: "HTML 5", size: "1em" },
  { name: "CSS 3", size: "1em" },
  { name: "React", size: "2em" },
  { name: "Styled Components", size: "1.5em" },
  { name: "Webstorm", size: "1.5em" },
  { name: "Webpack", size: "1.5em" },
  { name: "Git", size: "1.5em" },
  { name: "Github", size: "1.5em" },
  { name: "Trello", size: "1.5em" },
];

const hobbyIconData = [
  { name: "Go for a Bike Ride", size: "1em" },
  { name: "Play Guitar", size: "3em" },
  { name: "Go Hiking", size: "1em" },
  { name: "Play Board Games", size: "2em" },
  { name: "Develop Video Games", size: "1.5em" },
];

export const AboutMe = () => {
  const [active, setActive] = useState(false);

  const ranNum = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const floatingIcons = (iconList, direction) => {
    return iconList.map((item, idx) => (
      <AnimContainer
        key={idx}
        position={ranNum(-10, 10)}
        delay={ranNum(1, 25)}
        speed={ranNum(15, 25)}
        down={direction}
      >
        <DevelopmentIcon name={item.name} size={item.size} />
      </AnimContainer>
    ));
  };

  return (
    <Container onTransitionEnd={() => setActive(true)}>
      <Header>About</Header>
      {active ? (
        <ContentContainer>
          <Content>
            <Slide direction={"up"} delay={0.5}>
              <Row>
                <Slide direction={"left"} delay={1.2}>
                  <Paragraph first>
                    Hi, I'm Shawn! I started down this path seeing all these
                    amazing websites and getting{" "}
                    <Strikethrough>jealous</Strikethrough> curious about how
                    they were made. The world is challenging, exciting,
                    frustrating and everything rolled into one. Every day is an
                    opportunity to learn something new, and I love bringing new
                    ideas to life.
                  </Paragraph>
                </Slide>
                <TextBorder right />
                {floatingIcons(techIconData, false)}
              </Row>
            </Slide>
            <Slide direction={"down"} delay={0.5}>
              <Row>
                {floatingIcons(hobbyIconData, true)}

                <TextBorder left />

                <Slide direction={"right"} delay={1.2}>
                  <Paragraph>
                    When i'm not working, you can find me trying to keep up with
                    my 3 boys, playing board games with friends, jamming out on
                    my acoustic-campfire style, or belly-laughing with my{" "}
                    <Strikethrough>best friend</Strikethrough> wife. Life is
                    busy but short, and I try to spend everyday improving
                    myself.
                  </Paragraph>
                </Slide>
              </Row>
            </Slide>
          </Content>
        </ContentContainer>
      ) : (
        <Content />
      )}

      <Snippet>
        I'm looking to join a team of like-minded people to learn and grow with.
      </Snippet>
    </Container>
  );
};
