// eslint-disable-next-line no-unused-vars
import { css } from "styled-components/macro";
import Skeleton from "react-loading-skeleton";
import ReactPlayer from "react-player/youtube";

import { Card, CardContent, CardHeader } from "./../lib/card";
import { Flex, Row, Col } from "./../lib/grid";
import { Img } from "./../lib/base";
import { P } from "./../lib/typography";
import { TeamLink } from "./styles/eventDetailsCard";

function EventDetailsCard({ event, homeTeamImg, awayTeamImg }) {
  const {
    dateEvent,
    strHomeTeam,
    strAwayTeam,
    idAwayTeam,
    idHomeTeam,
    intAwayScore,
    intHomeScore,
    intRound,
    strLeague,
  } = event;

  return (
    <Card maxWidth={650}>
      <CardHeader>
        {strLeague} - Kolejka {intRound}
      </CardHeader>
      <CardContent>
        <P textAlign="center" color="#747474">
          {dateEvent}
        </P>
        <Row alignItems="center">
          <Col
            xs={5}
            css={`
              display: flex;
              flex-direction: column;
              align-items: center;
            `}
          >
            <Img src={homeTeamImg} height={60} alt="" />
            <TeamLink
              to={`/klub/${idHomeTeam}`}
              bold={intHomeScore > intAwayScore ? "true" : ""}
            >
              {strHomeTeam}
            </TeamLink>
          </Col>
          <Col
            xs={2}
            css={`
              padding: 0;
            `}
          >
            <P textAlign="center" color="#00897B" bold fontSize={24}>
              {intHomeScore} - {intAwayScore}
            </P>
          </Col>
          <Col
            xs={5}
            css={`
              display: flex;
              flex-direction: column;
              align-items: center;
            `}
          >
            <Img src={awayTeamImg} height={60} alt="" />
            <TeamLink
              to={`/klub/${idAwayTeam}`}
              bold={intAwayScore > intHomeScore ? "true" : ""}
            >
              {strAwayTeam}
            </TeamLink>
          </Col>
        </Row>
      </CardContent>
    </Card>
  );
}

function EventDetailsCardLoader() {
  return (
    <Card maxWidth={650}>
      <CardHeader>
        <Skeleton height={22} />
      </CardHeader>
      <CardContent>
        <Flex justifyContent="center">
          <Skeleton width={120} />
        </Flex>
        <Row
          alignItems="center"
          css={`
            margin-top: 15px;
            margin-bottom: 15px;
          `}
        >
          <Col
            xs={5}
            css={`
              display: flex;
              flex-direction: column;
              align-items: center;
            `}
          >
            <Skeleton height={60} width={75} />
            <Skeleton
              css={`
                margin-top: 12px;
              `}
              height={18}
              width={90}
            />
          </Col>
          <Col
            xs={2}
            css={`
              padding: 0;
            `}
          >
            <Skeleton height={24} />
          </Col>
          <Col
            xs={5}
            css={`
              display: flex;
              flex-direction: column;
              align-items: center;
            `}
          >
            <Skeleton height={60} width={75} />
            <Skeleton
              css={`
                margin-top: 12px;
              `}
              height={18}
              width={90}
            />
          </Col>
        </Row>
      </CardContent>
    </Card>
  );
}

function EventVideo({ strVideo }) {
  if (strVideo) {
    return (
      <Card maxWidth={650}>
        <CardHeader>Skrót meczu</CardHeader>
        <CardContent>
          <ReactPlayer url={strVideo} controls width="100%" />
        </CardContent>
      </Card>
    );
  }

  return null;
}

export { EventDetailsCard, EventDetailsCardLoader, EventVideo };
