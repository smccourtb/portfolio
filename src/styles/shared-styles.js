import styled from "styled-components/macro";

export const Header = styled.h2`
  font-family: "Rock Salt", serif;
  font-weight: 700;
  font-size: 3em;
  opacity: 15%;
  top: -4%;
  right: 0;
  position: absolute;
`;

export const Container = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  transform: ${({ home }) =>
    home ? `translateY(10%) !important` : `translateY(360%)`};
  transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1.25);

  /* keep an eye on these two. thing s were working fine before these guys */
  display: flex;
  flex-direction: column;
`;
