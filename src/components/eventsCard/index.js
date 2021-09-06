import Skeleton from "react-loading-skeleton";
// eslint-disable-next-line no-unused-vars
import { css } from "styled-components/macro";

import { Card, CardHeader, CardLink } from "./../lib/card";
import { Flex } from "./../lib/grid";
import { ClearBtn, Img } from "./../lib/base";
import rightArrow from "./../../assets/icons/arrow-forward.svg";
import leftArrow from "./../../assets/icons/arrow-back.svg";

function EventsCard({
  round,
  setRound,
  isEventsRoundLoading,
  eventsRound,
  clubBadges,
  lastRound,
}) {
  return (
    <Card>
      <CardHeader>
        <Flex justifyContent="space-between">
          <span>{round} Kolejka</span>
          <div>
            {round < 2 ? null : (
              <ClearBtn
                css={`
                  margin-right: 10px;
                `}
                onClick={() => setRound(round - 1)}
              >
                <Img src={leftArrow} alt="" height={18} />
              </ClearBtn>
            )}
            {round < lastRound ? (
              <ClearBtn onClick={() => setRound(round + 1)}>
                <Img src={rightArrow} alt="" height={18} />
              </ClearBtn>
            ) : null}
          </div>
        </Flex>
      </CardHeader>
      {isEventsRoundLoading ? (
        <div
          css={`
            padding: 15px;
          `}
        >
          <Skeleton
            css={`
              margin-top: 8px;
            `}
            count={12}
            height={30}
          />
        </div>
      ) : (
        <>
          {eventsRound &&
            eventsRound.map((el) => (
              <CardLink to={`/mecz/${el.idEvent}`} key={el.idEvent}>
                <span
                  style={
                    el.intHomeScore > el.intAwayScore
                      ? { fontWeight: "bold" }
                      : { fontWeight: "normal" }
                  }
                >
                  {el.strHomeTeam}
                </span>
                <Img
                  height={20}
                  src={clubBadges[el.idHomeTeam]}
                  ml={12}
                  mr={12}
                />
                {el.intHomeScore} - {el.intAwayScore}
                <Img
                  height={20}
                  src={clubBadges[el.idAwayTeam]}
                  ml={12}
                  mr={12}
                />
                <span
                  style={
                    el.intAwayScore > el.intHomeScore
                      ? { fontWeight: "bold" }
                      : { fontWeight: "normal" }
                  }
                >
                  {el.strAwayTeam}
                </span>
              </CardLink>
            ))}
        </>
      )}
    </Card>
  );
}

function EventsCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Flex justifyContent="space-between">
          <Skeleton height={22} />
        </Flex>
      </CardHeader>
      <div
        css={`
          padding: 15px;
        `}
      >
        <Skeleton
          css={`
            margin-top: 8px;
          `}
          count={12}
          height={30}
        />
      </div>
    </Card>
  );
}

export { EventsCard, EventsCardSkeleton };
