import styled, { css } from "styled-components";

import { MEDIA_LG, MEDIA_SM, MEDIA_MD } from "./../../../theme/mainTheme";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  max-width: 1280px;

  ${MEDIA_SM} {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const MAX_COLS = 12;

const Flex = styled.div`
  display: flex;
  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}
  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `}
    ${({ flexDirection }) =>
    flexDirection &&
    css`
      flex-direction: ${flexDirection};
    `}
`;

const Row = styled(Flex)`
  display: flex;
  flex-wrap: wrap;
  margin: -16px;

  ${MEDIA_SM} {
    margin: -24px;
  }
`;

function _calculateWidth(cols) {
  if (cols < 1 || cols > 12) {
    throw new Error(
      `Invalid prop, cols max value = ${MAX_COLS}, min value = 1`
    );
  }

  const width = (cols / MAX_COLS) * 100;
  return css`
    max-width: ${width}%;
    flex: 0 0 ${width}%;
  `;
}

const Col = styled.div`
  width: 100%;
  padding: 16px;

  ${({ xs }) => xs && _calculateWidth(xs)}

  ${({ sm }) =>
    sm &&
    css`
      ${MEDIA_SM} {
        ${_calculateWidth(sm)}
        padding: 24px;
      }
    `}
  ${({ md }) =>
    md &&
    css`
      ${MEDIA_MD} {
        ${_calculateWidth(md)}
      }
    `}
    ${({ lg }) =>
    lg &&
    css`
      ${MEDIA_LG} {
        ${_calculateWidth(lg)}
      }
    `};
`;

const Margin = styled.div`
  ${({ mt }) =>
    mt &&
    css`
      margin-top: ${mt}px;
    `}
  ${({ mt_sm }) =>
    mt_sm &&
    css`
      ${MEDIA_SM} {
        margin-top: ${mt_sm}px;
      }
    `}
  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${mb}px;
    `}
    ${({ mr }) =>
    mr &&
    css`
      margin-right: ${mr}px;
    `}
    ${({ ml }) =>
    ml &&
    css`
      margin-left: ${ml}px;
    `}
`;

export { Container, Col, Row, Flex, Margin };
