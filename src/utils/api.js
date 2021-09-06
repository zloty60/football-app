import axios from "axios";

import { leagues } from "./../data/index";

async function getData(url) {
  const { data } = await axios.get(url);
  return data;
}

function checkIsCorrectLeagueId(leagueId) {
  const res = leagues.filter((league) => league.id === leagueId);

  if (res.length) {
    return true;
  } else {
    return false;
  }
}

export { getData, checkIsCorrectLeagueId };
