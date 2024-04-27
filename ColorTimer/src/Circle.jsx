import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const Circle = ({ color, id, handleMouseEnter, handleMouseLeave }) => {
  return (
    <Wrapper
      color={color}
      id={id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default Circle;
