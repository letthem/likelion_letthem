import React from "react";
import styled from "styled-components";

export default function Auth() {
  return (
    <>
      <AuthContainer>Auth 페이지입니다.</AuthContainer>
    </>
  );
}

const AuthContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;
