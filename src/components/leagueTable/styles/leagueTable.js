import styled, { css } from "styled-components";

const Table = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;

  thead {
    background-color: #eee;
  }

  td,
  th {
    padding-top: 8px;
    padding-bottom: 8px;
  }

  thead th {
    padding-top: 12px;
    padding-bottom: 12px;
  }

  tbody tr {
    border-bottom: 2px solid #eee;
  }

  thead tr th:nth-child(2),
  tbody tr td:nth-child(2) {
    text-align: left;
  }

  tbody tr td:nth-child(2) {
    display: flex;
    align-items: center;
  }
`;

const LegendSquare = styled.div`
  width: 32px;
  height: 32px;
  ${({ bgColor }) =>
    bgColor &&
    css`
      background-color: ${bgColor};
    `};
`;

export { Table, LegendSquare };
