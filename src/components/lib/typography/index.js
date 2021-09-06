import styled, { css } from "styled-components";

const P = styled.p`
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `};
  ${({ textAlign }) =>
    textAlign &&
    css`
      text-align: ${textAlign};
    `};
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${fontSize}px;
    `}
`;

export { P };
