import styled, { css } from "styled-components";
import { Link as RouterLink } from "react-router-dom";

import { MEDIA_SM } from "./../../../theme/mainTheme";

const Img = styled.img`
  ${({ height }) =>
    height &&
    css`
      height: ${height}px;
    `};
  ${({ height_sm }) =>
    height_sm &&
    css`
      ${MEDIA_SM} {
        height: ${height_sm}px;
      }
    `}
  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `};
  ${({ ml }) =>
    ml &&
    css`
      margin-left: ${ml}px;
    `}
  ${({ mr }) =>
    mr &&
    css`
      margin-right: ${mr}px;
    `}
    ${({ objectFit }) =>
    objectFit &&
    css`
      object-fit: ${objectFit};
    `}
`;

const Link = styled(RouterLink)`
  text-decoration: none;
  color: #000;

  ${({ hover }) =>
    hover &&
    css`
      &:hover {
        text-decoration: underline;
      }
    `}
`;

const ClearBtn = styled.button`
  // display: inline-block;
  border: none;
  background-color: transparent;
  padding: 0;
  font-size: 0px;
  cursor: pointer;
`;

export { Link, ClearBtn, Img };
