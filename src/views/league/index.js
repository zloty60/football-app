import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { Card, CardContent } from "./../../components/lib/card";

import {
  useGlobalState,
  filterCurrentLeague,
} from "./../../context/globalState";
import { getData, checkIsCorrectLeagueId } from "./../../utils/api";
import { View, Loader } from "./view";

function LeagueWrapper() {
  const { leagueId } = useParams();

  if (!checkIsCorrectLeagueId(leagueId)) {
    return (
      <Card bgColor="#cbcbcb">
        <CardContent>
          <p>Nie ma takiej ligi!</p>
        </CardContent>
      </Card>
    );
  }

  return <League leagueId={leagueId} />;
}

function League({ leagueId }) {
  const [currentLeague, setCurrentLeague] = useGlobalState();
  const [round, setRound] = useState(1);
  const [clubBadges, setClubBadges] = useState({});

  useEffect(() => {
    setCurrentLeague(filterCurrentLeague(leagueId));
  }, [currentLeague, setCurrentLeague, leagueId]);

  const leagueDetails = useQuery(["leagueDetails", leagueId], () =>
    getData(
      `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`
    )
  );

  const currentSeason = leagueDetails.data?.leagues[0].strCurrentSeason;

  const leagueTable = useQuery(
    ["leagueTable", leagueId],
    () =>
      getData(
        `https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=${leagueId}&s=${currentSeason}`
      ),
    {
      enabled: !!currentSeason,
    }
  );

  let currentRound = leagueTable.data?.table[0].intPlayed;

  useEffect(() => {
    if (currentRound === "0") {
      return setRound(1);
    }

    setRound(parseInt(currentRound));
  }, [currentRound]);

  const eventsRound = useQuery(
    ["eventRound", leagueId, round],
    () =>
      getData(
        `https://www.thesportsdb.com/api/v1/json/1/eventsround.php?id=${leagueId}&r=${round}&s=${currentSeason}`
      ),
    {
      enabled: !!currentSeason && !!round,
    }
  );

  useEffect(() => {
    let obj = {};
    if (leagueTable.data) {
      leagueTable.data.table.forEach((el) => {
        obj[el.idTeam] = el.strTeamBadge;
      });

      setClubBadges(obj);
    }
  }, [leagueId, leagueTable.data]);

  if (leagueDetails.isError || eventsRound.isError || leagueTable.isError) {
    return <p>error</p>;
  }

  if (leagueDetails.isLoading || leagueTable.isLoading) {
    return <Loader />;
  }

  return (
    <View
      leagueDetails={leagueDetails.data.leagues[0]}
      eventsRound={eventsRound.data?.events}
      leagueTable={leagueTable.data.table}
      setRound={setRound}
      round={round}
      clubBadges={clubBadges}
      isEventsRoundLoading={eventsRound.isLoading}
    />
  );
}

export { League, LeagueWrapper };
