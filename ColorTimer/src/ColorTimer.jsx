import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Circle from "./Circle";

const Container = styled.div`
  background-color: #7e9a9a;
`;

const ParentCircle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const Timer = styled.h1`
  font-size: 30px;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: aqua;
`;
const ColorContianer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const CirclesWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 20px;
`;

const ColorTimer = () => {
  const [isMouseInside, setIsMouseInside] = useState(false);
  const countDownRef = useRef(null);
  const [timerValue, setTimerValue] = useState(3);
  const [parentColor, setParentColor] = useState("black");
  const [currentCircleId, setCurrentCircleId] = useState("");

  const handleMouseEnter = (event) => {
    if (!isMouseInside) {
      setIsMouseInside(true);
      setCurrentCircleId(event.target.id);

      if (countDownRef.current === null) {
        countDownRef.current = setInterval(() => {
          setTimerValue((prevTimer) => prevTimer - 1);
        }, 1000);
      }
    }
    console.log("mouse Enter");
  };

  const handleMouseLeave = (event) => {
    setIsMouseInside(false);
    if (countDownRef.current !== null) {
      clearInterval(countDownRef.current);
      countDownRef.current = null;
      setTimerValue(3);
    }
    console.log("mouse Leave");
  };

  useEffect(() => {
    if (timerValue <= 0 && countDownRef !== null) {
      clearInterval(countDownRef.current);
      countDownRef.current = null;
      setTimerValue(3);
      const currentCircleElement = document.getElementById(currentCircleId);
      const computedStyle = window.getComputedStyle(currentCircleElement);
      setParentColor(computedStyle.backgroundColor);
    }
  }, [timerValue]);

  const CircleInfo = [
    { color: "green", id: "circle-one" },
    { color: "red", id: "circle-two" },
    { color: "blue", id: "circle-three" },
  ];

  return (
    <>
      <Container>
        <TopContainer>
          <Heading>CHANGING COLOR IN </Heading>
          <Timer>{timerValue}</Timer>
          <ParentCircle color={parentColor} />
        </TopContainer>
        <ColorContianer>
          <Heading style={{ fontSize: "50px" }}>Hover over us</Heading>
          <CirclesWrapper>
            {CircleInfo.map((item, index) => (
              <Circle
                key={index}
                color={item.color}
                id={item.id}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              />
            ))}
          </CirclesWrapper>
        </ColorContianer>
      </Container>
    </>
  );
};

export default ColorTimer;
