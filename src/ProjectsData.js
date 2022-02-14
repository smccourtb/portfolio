import Memory from "./assets/images/memory.png";
import ToDo from "./assets/images/todo.png";
import RockPaperScissors from "./assets/images/rock-paper-scissors.png";
import Weather from "./assets/images/weather.png";
import Audiophile from "./assets/images/audiophile.png";

const projectData = [
  {
    id: 0,
    name: "Memory",
    description:
      "Play a round of the classic game Memory. With a timed solo mode,\n" +
      "              or play with up to four players. Change the difficulty by upping\n" +
      "              the grid size or try out the symbols option.",
    image: Memory,
    tag: "React",
    tools: {
      language: ["Javascript", "HTML 5", "CSS 3"],
      framework: ["Styled Components", "React"],
    },
    links: {
      Live: "https://smccourtb.github.io/memory-game/",
      Code: "https://github.com/smccourtb/memory-game",
      Docs: "memory",
    },
  },
  {
    id: 1,
    name: "Todo List",
    description:
      "Jot down your thoughts. Rearrange your tasks by dragging the task to the order you'd like. Filter through what you've completed, and what you still need to do.",
    image: ToDo,
    tag: "React",
    tools: {
      language: ["Javascript", "HTML 5", "CSS 3"],
      framework: ["Styled Components", "React"],
    },
    links: {
      Live: "https://smccourtb.github.io/todo-list/",
      Code: "https://github.com/smccourtb/todo-list",
      Docs: "/",
    },
  },
  {
    id: 2,
    name: "Rock Paper Scissors",
    description:
      "Play a round of rock, paper, scissors! Play against the computer with the classic version, or the new take, rock, paper, scissors, lizard, spock!",
    image: RockPaperScissors,
    tag: "React",
    tools: {
      language: ["Javascript", "HTML 5", "CSS 3"],
      framework: ["React"],
    },
    links: {
      Live: "https://smccourtb.github.io/rock-paper-scissors/",
      Code: "https://github.com/smccourtb/rock-paper-scissors",
      Docs: "rock-paper-scissors",
    },
  },
  {
    id: 3,
    name: "Weather",
    description:
      "Weather app with a hourly and daily forecast. Uses OpenWeatherAPI",
    image: Weather,
    tag: "Javascript",
    tools: {
      language: ["Javascript", "HTML 5", "CSS 3"],
      framework: [],
    },
    links: {
      Live: "/",
      Code: "https://github.com/smccourtb/weather-app",
      Docs: "weather",
    },
  },
  {
    id: 4,
    name: "Audiophile",
    description:
      "Mock website where you can browse and 'purchase' audio related products. Has a working shopping cart and form validation",
    image: Audiophile,
    tag: "React",
    tools: {
      language: ["Javascript", "HTML 5", "CSS 3"],
      framework: ["React", "Styled Components"],
    },
    links: {
      Live: "https://smccourtb.github.io/audiophile-ecommerce-website/",
      Code: "https://www.github.com/smccourtb/audiophile-ecommerce-website/",
      Docs: "audiophile",
    },
  },
  {
    id: 5,
    name: "Bones",
    description: "A small dice battle game with rpg elements.",
    image: Audiophile,
    tag: "GDScript",
    tools: {
      language: ["GDScript"],
      framework: [],
    },
    links: {
      Live: "https://smccourtb.github.io/bones/",
      Code: "https://github.com/smccourtb/bones",
      Docs: "/",
    },
  },
];

export default projectData;
