import React from "react";
import styled from "styled-components";
import Container from "../global-styled-component";

const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftContainer = styled.div`
  flex: 1;
  background-color: green;
`;

const RightContainer = styled.div`
  flex: 1;
`;

const StyledHeading = styled.h1``;
const Desc = styled.p``;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;

const Input = styled.input`
  height: 65px;
  padding-left: 28px;
  font-size: 16px;
  font-weight: 600;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border: 2px solid #01b289;
`;
const SubmitBtn = styled.button`
  height: 70px;
  padding-right: 37px;
  padding-left: 37px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #00b289;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: white;
  display: inline-block;
  border: none;
  cursor: pointer;
`;

const HeroSection = () => {
  return (
    <Wrapper>
      <LeftContainer>
        <StyledHeading>Everthing you need to run your buisness</StyledHeading>
        <Desc>
          Bonsai’s all-in-one product suite with smart automation lets you focus
          on your passion, not your paperwork.
        </Desc>

        <Form>
          <Input placeholder="Enter your email" />
          <SubmitBtn>START FREE</SubmitBtn>
        </Form>
      </LeftContainer>
      <RightContainer></RightContainer>
    </Wrapper>
  );
};

export default HeroSection;
