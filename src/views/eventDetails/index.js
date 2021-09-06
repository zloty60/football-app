import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { getData } from "./../../utils/api";
import { Flex, Margin } from "./../../components/lib/grid";
import {
  EventDetailsCard,
  EventDetailsCardLoader,
  EventVideo,
} from "./../../components/eventDetailsCard";

function EventDetails() {
  const { eventId } = useParams();

  const eventData = useQuery(["eventDetails", eventId], () =>
    getData(
      `https://www.thesportsdb.com/api/v1/json/1/lookupevent.php?id=${eventId}`
    )
  );
  const homeTeamId =
    Array.isArray(eventData.data?.events) &&
    eventData.data?.events[0].idHomeTeam;

  const homeTeamData = useQuery(
    ["team", homeTeamId],
    () =>
      getData(
        `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${homeTeamId}`
      ),
    {
      enabled: !!homeTeamId,
    }
  );

  const awayTeamId =
    Array.isArray(eventData.data?.events) &&
    eventData.data?.events[0].idAwayTeam;

  const awayTeamData = useQuery(
    ["team", awayTeamId],
    () =>
      getData(
        `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${awayTeamId}`
      ),
    {
      enabled: !!awayTeamId,
    }
  );

  if (eventData.isFetched && !Array.isArray(eventData.data?.events)) {
    return <p>nie ma takiego eventu</p>;
  }

  if (eventData.isLoading || awayTeamData.isLoading || homeTeamData.isLoading) {
    return (
      <Flex justifyContent="center">
        <EventDetailsCardLoader />
      </Flex>
    );
  }

  if (eventData.data && homeTeamData.data && awayTeamData.data) {
    return (
      <Flex alignItems="center" flexDirection="column">
        <EventDetailsCard
          event={eventData.data.events[0]}
          homeTeamImg={homeTeamData.data.teams[0].strTeamBadge}
          awayTeamImg={awayTeamData.data.teams[0].strTeamBadge}
        />
        <Margin mt={40} />
        <EventVideo strVideo={eventData.data.events[0].strVideo} />
      </Flex>
    );
  }

  return null;
}

export { EventDetails };
