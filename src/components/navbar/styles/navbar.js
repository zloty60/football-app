import styled from "styled-components";

import { Link, ClearBtn } from "./../../lib/base";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color.navbar};
  padding-top: 12px;
  padding-bottom: 12px;
`;

const Logo = styled(Link)`
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  font-weight: 500;
`;

const LeagueIconBtn = styled(ClearBtn)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ddd;
`;

const IconImage = styled.img`
  width: 100%;
`;

const ChooseLeagueWrapper = styled.div`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.leagueMenu};
  right: 16px;
  top: 50px;
  background-color: #fff;
  width: 100%;
  max-width: 300px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

const OutsideClickWrapper = styled.div`
  z-index: ${({ theme }) => theme.zIndex.leagueMenu - 1};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: fixed;
`;

export {
  Nav,
  Logo,
  LeagueIconBtn,
  IconImage,
  ChooseLeagueWrapper,
  OutsideClickWrapper,
};
