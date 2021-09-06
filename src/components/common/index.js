// eslint-disable-next-line no-unused-vars
import styled, { css } from "styled-components/macro";
import Skeleton from "react-loading-skeleton";

import { Card, CardHeader, CardContent } from "./../lib/card";
import { Row, Col } from "./../lib/grid";
import { P } from "./../lib/typography";
import { Img } from "./../lib/base";
import globeIcon from "./../../assets/icons/globe.svg";
import youtubeIcon from "./../../assets/icons/youtube.svg";
import facebookIcon from "./../../assets/icons/facebook.svg";
import twitterIcon from "./../../assets/icons/twitter.svg";

const SocialIcon = styled.img`
  height: 26px;
`;

const SocialLink = styled.a`
  margin-right: 9px;
`;

function SocialMedia({ twitter, webiste, youtube, facebook }) {
  return (
    <div>
      <SocialLink href={`https://${webiste}`}>
        <SocialIcon src={globeIcon} alt="" />
      </SocialLink>
      <SocialLink href={`https://${youtube}`}>
        <SocialIcon src={youtubeIcon} alt="" />
      </SocialLink>
      <SocialLink href={`https://${facebook}`}>
        <SocialIcon src={facebookIcon} alt="" />
      </SocialLink>
      <SocialLink href={`https://${twitter}`}>
        <SocialIcon src={twitterIcon} alt="" />
      </SocialLink>
    </div>
  );
}

function LeagueInfo({
  img,
  name,
  intFormedYear,
  strTwitter,
  strWebsite,
  strYoutube,
  strFacebook,
}) {
  return (
    <Card>
      <CardHeader>INFORMACJE</CardHeader>
      <CardContent>
        <Row alignItems="center">
          <Col xs={4}>
            <Img ml={5} src={img} alt="" height={85} height_sm={120} />
          </Col>
          <Col xs={8}>
            <P
              bold
              css={`
                margin-top: 0;
              `}
            >
              {name}
            </P>
            <P>Data założenia: {intFormedYear}</P>
            <SocialMedia
              twitter={strTwitter}
              webiste={strWebsite}
              youtube={strYoutube}
              facebook={strFacebook}
            />
          </Col>
        </Row>
      </CardContent>
    </Card>
  );
}

function LeagueInfoSkeleton() {
  return (
    <Card>
      <CardHeader>INFORMACJE</CardHeader>
      <CardContent>
        <Row alignItems="center">
          <Col xs={4} sm={3}>
            <Skeleton height={125} />
          </Col>
          <Col xs={8} sm={9}>
            <Skeleton count={2} />
            <Skeleton height={26} width="70%" />
          </Col>
        </Row>
      </CardContent>
    </Card>
  );
}

export { SocialMedia, LeagueInfo, LeagueInfoSkeleton };
