import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const TeamLink = styled(Link)`
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  margin-top: 18px;
  margin-bottom: 18px;
  color: #000000;

  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `};

  &:hover {
    text-decoration: underline;
  }
`;

export { TeamLink };
