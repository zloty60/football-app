import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { css } from "styled-components/macro";

import { useGlobalState } from "./../../context/globalState";
import {
  Nav,
  Logo,
  LeagueIconBtn,
  IconImage,
  ChooseLeagueWrapper,
  OutsideClickWrapper,
} from "./styles/navbar";
import { Container, Flex } from "./../lib/grid";
import { leagues } from "./../../data";
import { Img } from "./../lib/base";
import { CardLink } from "./../lib/card";

import england from "./../../assets/flags/england.png";

export function Navbar() {
  const [currentLeague] = useGlobalState();
  const [isOpenLeagueWrapper, setOpenLeagueWrapper] = useState(false);

  return (
    <Nav>
      <Container
        css={`
          position: relative;
        `}
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Logo to="/">football app</Logo>
          <LeagueIconBtn
            data-testid="leagueIconBtn"
            onClick={() => setOpenLeagueWrapper(true)}
          >
            <IconImage
              src={currentLeague ? currentLeague.logo : england}
              alt={
                currentLeague
                  ? `${currentLeague.name} Logo`
                  : "Premier League Logo"
              }
            />
          </LeagueIconBtn>
        </Flex>
        {isOpenLeagueWrapper && (
          <>
            <OutsideClickWrapper
              data-testid="outsideClickWrapper"
              onClick={() => setOpenLeagueWrapper(false)}
            />
            <ChooseLeagueWrapper data-testid="leagueWrapper">
              <ul
                css={`
                  margin: 0;
                `}
              >
                {leagues.map((league) => (
                  <li key={league.id}>
                    <CardLink
                      data-testid={`cardLink-${league.id}`}
                      onClick={() => setOpenLeagueWrapper(false)}
                      to={`/liga/${league.id}`}
                    >
                      <Img
                        mr={12}
                        height={20}
                        src={league.logo}
                        alt={`${league.name} Logo`}
                      />
                      <span>{league.name}</span>
                    </CardLink>
                  </li>
                ))}
              </ul>
            </ChooseLeagueWrapper>
          </>
        )}
      </Container>
    </Nav>
  );
}
