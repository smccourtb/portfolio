import { Container, Header, variants } from "../styles/global/GlobalStyles";
import {
  ContentContainer,
  ContentGrid,
  ContentGridContentContainer,
  Paragraph,
  Snippet,
  Strikethrough,
} from "../styles/about-styles";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const techIconData = [
  { name: "akar-icons:javascript-fill", size: "3em" },
  { name: "simple-icons:html5", size: "1em" },
  { name: "simple-icons:css3", size: "1em" },
  { name: "akar-icons:react-fill", size: "2em" },
  { name: "simple-icons:styledcomponents", size: "1.5em" },
  { name: "simple-icons:webstorm", size: "1.5em" },
  { name: "simple-icons:webpack", size: "1.5em" },
  { name: "bxl:git", size: "1.5em" },
  { name: "akar-icons:github-fill", size: "1.5em" },
  { name: "fontisto:trello", size: "1.5em" },
];

const hobbyIconData = [
  { name: "bx:bx-cycling", size: "1em" },
  { name: "fluent:guitar-24-filled", size: "3em" },
  { name: "ic:baseline-hiking", size: "1em" },
  { name: "fa-solid:dice-d20", size: "2em" },
  { name: "dashicons:games", size: "1.5em" },
];

const ranNum = (min, max) => {
  return Math.random() * (max - min) + min;
};

const up = {
  visible: (ranNum) => {
    const xValue = ranNum(5, 10);
    return {
      translateY: ["100%", "-900%"],
      translateX: [-xValue, xValue, -xValue],
      transition: {
        delay: ranNum(3, 10),
        duration: 15,
        repeat: Infinity,
        translateX: {
          duration: ranNum(3, 6),
          type: "spring",
          repeat: Infinity,
        },
      },
    };
  },
};
const down = {
  visible: (ranNum) => {
    const xValue = ranNum(5, 10);
    return {
      translateY: ["-100%", "900%"],
      translateX: [-xValue, xValue, -xValue],
      transition: {
        delay: ranNum(3, 10),
        duration: 15,
        repeat: Infinity,
        translateX: {
          duration: ranNum(3, 6),
          type: "spring",
          repeat: Infinity,
        },
      },
    };
  },
};

export const AboutMe = () => {
  const floatingIcons = (iconList, direction) => {
    return iconList.map((item) => (
      <motion.p
        key={item.name}
        style={{ position: "absolute", left: `${ranNum(10, 90)}%` }}
        animate={"visible"}
        variants={direction === "up" ? up : down}
        custom={ranNum}
        inital={{
          x: `${ranNum(-900, 90)}%`,
        }}
      >
        <Icon width={item.size} icon={item.name} />
      </motion.p>
    ));
  };

  return (
    <Container
      color={"tomato"}
      initial="exit"
      animate="enter"
      exit="exit"
      variants={variants}
      layout
    >
      <Header>About</Header>

      <ContentContainer>
        <ContentGrid>
          <ContentGridContentContainer>
            <Paragraph
              first={"true"}
              animate={{ x: ["100%", "0%"] }}
              transition={{ delay: 2 }}
            >
              Hi, I'm Shawn! I started down this path seeing all these amazing
              websites and getting <Strikethrough>jealous</Strikethrough>{" "}
              curious about how they were made. The world is challenging,
              exciting, frustrating and everything rolled into one. Every day is
              an opportunity to learn something new, and I love bringing new
              ideas to life.
            </Paragraph>
          </ContentGridContentContainer>
          <ContentGridContentContainer>
            <motion.div
              animate={{ y: ["100%", "0%"] }}
              transition={{ delay: 1 }}
              style={{
                backgroundColor: "whitesmoke",
                height: "100%",
                width: "100%",
              }}
            />
          </ContentGridContentContainer>
          <ContentGridContentContainer
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            {floatingIcons(techIconData, "up")}
          </ContentGridContentContainer>
          <ContentGridContentContainer>
            {floatingIcons(hobbyIconData, "down")}
          </ContentGridContentContainer>
          <ContentGridContentContainer>
            <motion.div
              animate={{ y: ["-100%", "0%"] }}
              transition={{ delay: 1 }}
              style={{
                backgroundColor: "whitesmoke",
                height: "100%",
                width: "100%",
              }}
            />
          </ContentGridContentContainer>

          <ContentGridContentContainer>
            <Paragraph
              animate={{ x: ["-100%", "0%"] }}
              transition={{ delay: 2 }}
            >
              When i'm not working, you can find me trying to keep up with my 3
              boys, playing board games with friends, jamming out on my
              acoustic-campfire style, or belly-laughing with my{" "}
              <Strikethrough>best friend</Strikethrough> wife. Life is busy but
              short, and I try to spend everyday improving myself.
            </Paragraph>
          </ContentGridContentContainer>
        </ContentGrid>
      </ContentContainer>

      <Snippet>
        I'm looking to join a team of like-minded people to learn and grow with.
      </Snippet>
    </Container>
  );
};
