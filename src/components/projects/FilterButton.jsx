import { useState } from "react";
import styled from "styled-components";
import { DevelopmentIcon } from "./DevelopmentIcon";

const Button = styled.button`
  box-sizing: border-box;
  border: none;
  text-align: center;
  cursor: pointer;
  font-size: 0.5em;
  transition: all 0.3s ease;
  background: ${({ active }) => (active ? "white" : `transparent`)};
  color: ${({ active }) => (active ? "black" : `white`)};
  opacity: ${({ active }) => (active ? "100%" : `35%`)};
  padding: 0.5em;
  border-radius: 2.55px 2.5px 0 0;
`;

const FilterButton = ({ filter, name }) => {
  const [active, setActive] = useState(false);

  return (
    <Button
      onClick={(e) => {
        filter(e.target.title);
        setActive((prev) => !prev);
      }}
      active={active}
      title={name}
    >
      <DevelopmentIcon name={name} size={"3em"} />
    </Button>
  );
};

export default FilterButton;
