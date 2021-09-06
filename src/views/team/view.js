import { Row, Col, Margin } from "./../../components/lib/grid";
import { LeagueInfo, LeagueInfoSkeleton } from "./../../components/common";
import { TeamJersey, Stadium, CardSkeleton } from "./../../components/team";

function View({ teamData }) {
  const {
    intFormedYear,
    strTeamBadge,
    strFacebook,
    strTeam,
    strTwitter,
    strWebsite,
    strYoutube,
    strTeamJersey,
    strStadiumThumb,
  } = teamData;
  return (
    <Row>
      <Col xs={12} md={6}>
        <LeagueInfo
          img={strTeamBadge}
          name={strTeam}
          intFormedYear={intFormedYear}
          strTwitter={strTwitter}
          strWebsite={strWebsite}
          strYoutube={strYoutube}
          strFacebook={strFacebook}
        />
        <Margin mb={25} />
        <Stadium img={strStadiumThumb} />
      </Col>
      <Col xs={12} md={6}>
        <TeamJersey img={strTeamJersey} />
      </Col>
    </Row>
  );
}

function Loader() {
  return (
    <Margin>
      <Row>
        <Col xs={12} md={6}>
          <LeagueInfoSkeleton />
          <Margin mb={25} />
          <CardSkeleton txt="Stadion" height={180} />
        </Col>
        <Col xs={12} md={6}>
          <CardSkeleton txt="Koszulka" height={397} />
        </Col>
      </Row>
    </Margin>
  );
}

export { View, Loader };
