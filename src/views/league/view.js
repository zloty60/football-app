// eslint-disable-next-line no-unused-vars
import { css } from "styled-components/macro";

import { Row, Col, Margin } from "./../../components/lib/grid";
import {
  LeagueTable,
  LeagueTableSkeleton,
} from "./../../components/leagueTable";
import { EventsCard, EventsCardSkeleton } from "./../../components/eventsCard";
import { LeagueInfo, LeagueInfoSkeleton } from "./../../components/common";

function View({
  leagueDetails,
  eventsRound,
  leagueTable,
  setRound,
  round,
  clubBadges,
  isEventsRoundLoading,
}) {
  const {
    intFormedYear,
    strBadge,
    strFacebook,
    strLeague,
    strTwitter,
    strWebsite,
    strYoutube,
  } = leagueDetails;

  const lastRound = (leagueTable.length - 1) * 2;

  return (
    <Row>
      <Col xs={12} md={6}>
        <LeagueInfo
          img={strBadge}
          name={strLeague}
          intFormedYear={intFormedYear}
          strTwitter={strTwitter}
          strWebsite={strWebsite}
          strYoutube={strYoutube}
          strFacebook={strFacebook}
        />
        <Margin mb={25} />
        <EventsCard
          round={round}
          setRound={setRound}
          isEventsRoundLoading={isEventsRoundLoading}
          eventsRound={eventsRound}
          clubBadges={clubBadges}
          lastRound={lastRound}
        />
      </Col>
      <Col xs={12} md={6}>
        <LeagueTable leagueTable={leagueTable} />
      </Col>
    </Row>
  );
}

function Loader() {
  return (
    <Row>
      <Col xs={12} md={6}>
        <LeagueInfoSkeleton />
        <Margin mb={25} />
        <EventsCardSkeleton />
      </Col>
      <Col xs={12} md={6}>
        <LeagueTableSkeleton />
      </Col>
    </Row>
  );
}

export { View, Loader };
