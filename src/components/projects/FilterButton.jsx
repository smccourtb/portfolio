import { useEffect, useState } from "react";
import styled from "styled-components";
import { DevelopmentIcon } from "./DevelopmentIcon";

const Button = styled.button`
  box-sizing: border-box;
  border: none;
  text-align: center;
  cursor: pointer;
  font-size: 0.5em;
  transition: all 0.3s ease;
  background: ${({ active }) => (active ? "white" : `transparent`)} none;
  color: ${({ active }) => (active ? "black" : `white`)} none;

  padding: 0.5em;
  border-radius: 2.55px 2.5px 0 0;
`;

const FilterButton = ({ setSettings, settings, name }) => {
  const [active, setActive] = useState(false);

  const filter = (x) => {
    setSettings((prev) => {
      // check if its already in the filtered array
      if (prev.includes(x)) {
        return prev.filter((item) => item !== x);
      } else {
        return [...prev, x];
      }
    });
  };

  useEffect(() => {
    if (settings.length < 1) {
      setActive(false);
    }
  }, [settings]);

  return (
    <Button
      onClick={(e) => {
        filter(e.target.title);
        setActive((prev) => !prev);
      }}
      value={name}
      active={active}
    >
      <DevelopmentIcon name={name} size={"3em"} />
    </Button>
  );
};

export default FilterButton;
