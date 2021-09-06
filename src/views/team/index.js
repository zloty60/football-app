import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { getData } from "./../../utils/api";
import { View, Loader } from "./view";

function Team() {
  const { teamId } = useParams();

  const { data, isLoading, isFetched } = useQuery(["team", teamId], () =>
    getData(
      `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
    )
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isFetched && !Array.isArray(data?.teams)) {
    return <p>nie ma takiej drużny</p>;
  }

  if (isFetched) {
    return <View teamData={data.teams[0]} />;
  }

  return null;
}

export { Team };
