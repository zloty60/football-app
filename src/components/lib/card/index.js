import styled, { css } from "styled-components";

import { Link } from "./../base";

const Card = styled.div`
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth}px;
    `};
  ${({ bgColor }) =>
    bgColor &&
    css`
      background-color: ${bgColor};
    `};
`;

const CardHeader = styled.h3`
  font-weight: bold;
  font-size: 16px;
  border-bottom: 2px solid #eee;
  padding: 16px;
  margin: 0;
  letter-spacing: 0.3px;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardLink = styled(Link)`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #eee;
  padding: 15px;
  transition: background-color 0.4s;

  &:hover {
    background-color: #eee;
  }
`;

export { Card, CardHeader, CardContent, CardLink };
