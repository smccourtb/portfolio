import { Icon } from "@iconify/react";
import styled from "styled-components";

const Button = styled.button`
  background: none;
  border: none;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${({ active }) => (active ? "white" : `transparent`)} none;
  color: ${({ active }) => (active ? "black" : `white`)} none;

  padding: 0.5em;
  border-radius: 2.55px 2.5px 0 0;
`;

const SortButton = ({ data, setData, iconName, method }) => {
  const sortAscending = () => {
    const sorted = data.sort((a, b) => a.release - b.release);
    setData([...sorted]);
  };
  const sortDescending = () => {
    const sorted = data.sort((a, b) => b.release - a.release);
    setData([...sorted]);
  };

  const shuffle = () => {
    const sorted = data.sort(() => (Math.random() > 0.5 ? 1 : -1));
    setData([...sorted]);
  };

  return (
    <Button
      onClick={() =>
        method === "sortAscending"
          ? sortAscending()
          : method === "sortDescending"
          ? sortDescending()
          : shuffle()
      }
    >
      <Icon
        icon={iconName}
        style={{
          width: "2em",
          height: "2em",
        }}
      />
    </Button>
  );
};

export default SortButton;
