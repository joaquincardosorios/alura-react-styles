import React from "react";

import Title from "../Title";
import Account from "../Account";
import styled from "styled-components";

const StyleContainer = styled.div`
  background-color: #f1f1f1;
  min-height: 90vh;
  padding: 0px 15vw;
`

const StyledContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Container = () => {
  return (
    <StyleContainer>
      <Title>Smart Bank</Title>
      <StyledContent>
        <Account />
      </StyledContent>
    </StyleContainer>
  );
};

export default Container;
