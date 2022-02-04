import { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { SiReact } from "react-icons/si";
import { DevelopmentIcon } from "./DevelopmentIcon";

const Button = styled.button`
  box-sizing: border-box;
  border: none;
  text-align: center;
  cursor: pointer;
  font-size: 0.5em;
  //transform: ${({ active }) => active && `scale(1.2)`};
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
      if (prev.filterItems.includes(x)) {
        const newData = prev.filterItems.filter((item) => item !== x);
        return { ...prev, filterItems: newData };
      } else {
        return { ...prev, filterItems: [...prev.filterItems, x] };
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
        filter(e.target.value);
        setActive((prev) => !prev);
      }}
      value={name}
      active={active}
    >
      <DevelopmentIcon name={name} size={"3em"} />
      {/*{name}*/}
    </Button>
  );
};

export default FilterButton;
