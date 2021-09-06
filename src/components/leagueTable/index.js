import Skeleton from "react-loading-skeleton";

import { Table, LegendSquare } from "./styles/leagueTable";
import { Img } from "./../../components/lib/base";
import { Card, CardContent } from "./../../components/lib/card";
import { Flex, Margin } from "./../../components/lib/grid";
import { Link } from "./../lib/base";

function LeagueTable({ leagueTable }) {
  const legendDataObj = {};
  return (
    <>
      <Card>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Drużyna</th>
              <th title="Punkty">PKT.</th>
              <th title="Mecze rozegrane">M</th>
              <th title="Wygrane">W</th>
              <th title="Remisy">R</th>
              <th title="Przegrane">P</th>
              <th title="Bramki">B</th>
            </tr>
          </thead>
          <tbody>
            {leagueTable.map((el) => {
              const specialIndexColor = setSpecialColor(el.strDescription);
              if (
                !legendDataObj[el.strDescription] &&
                el.strDescription !== ""
              ) {
                legendDataObj[el.strDescription] = {
                  color: specialIndexColor.color,
                  txt: specialIndexColor.txt,
                };
              }
              return (
                <tr key={el.idTeam}>
                  <th
                    style={{
                      backgroundColor: specialIndexColor.color,
                      color: specialIndexColor === "#F7F7F7" ? "#000" : "#fff",
                      fontWeight: 500,
                    }}
                  >
                    {el.intRank}
                  </th>
                  <td>
                    <Img
                      mr={15}
                      ml={15}
                      height={20}
                      src={el.strTeamBadge}
                      alt=""
                    />
                    <Link to={`/klub/${el.idTeam}`} hover="true">
                      {el.strTeam}
                    </Link>
                  </td>
                  <td>{el.intPoints}</td>
                  <td>{el.intPlayed}</td>
                  <td>{el.intWin}</td>
                  <td>{el.intDraw}</td>
                  <td>{el.intLoss}</td>
                  <td>
                    {el.intGoalsFor}:{el.intGoalsAgainst}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card>
      <Margin mt={30}>
        {Object.keys(legendDataObj).map((key) => (
          <Flex key={key} alignItems="center">
            <LegendSquare bgColor={legendDataObj[key].color} />
            <Margin ml={12} />
            <p>{legendDataObj[key].txt}</p>
          </Flex>
        ))}
      </Margin>
    </>
  );
}

function LeagueTableSkeleton() {
  return (
    <Card>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Drużyna</th>
            <th>PKT.</th>
            <th>M</th>
            <th>W</th>
            <th>R</th>
            <th>P</th>
            <th>B</th>
          </tr>
        </thead>
      </Table>
      <CardContent>
        <Skeleton style={{ marginTop: "8px" }} height={20} count={20} />
      </CardContent>
    </Card>
  );
}

function setSpecialColor(strDescription) {
  if (strDescription.startsWith("Relegation")) {
    return { color: "#932835", txt: "Spadek do niższej ligi" };
  }

  if (strDescription.includes("(Relegation)")) {
    return { color: "#ef6c00", txt: "Baraż o utrzymanie" };
  }

  if (strDescription === "Promotion - Champions League (Group Stage)") {
    return { color: "#283593", txt: "Awans - Liga Mistrzów (Runda grupowa)" };
  }

  if (
    strDescription === "Promotion - Champions League (Qualification)" ||
    strDescription === "UEFA Champions League Qualifiers"
  ) {
    return { color: "#1565c0", txt: "Awans - Liga Mistrzów (Kwalifikacje)" };
  }

  if (strDescription === "Promotion - Europa League (Group Stage)") {
    return { color: "#938628", txt: "Awans - Liga Europy (Runda grupowa)" };
  }

  if (
    strDescription === "Promotion - Europa Conference League (Qualification)" ||
    strDescription === "UEFA Conference League Qualifiers"
  ) {
    return {
      color: "#935128",
      txt: "Awans - Liga Konferencji Europy (Kwalifikacje)",
    };
  }

  if (
    strDescription === "Promotion - Eredivisie (Conference League - Play Offs)"
  ) {
    return { color: "#455a64", txt: "Liga Konferencji - Play off" };
  }

  return "#F7F7F7";
}

export { LeagueTable, LeagueTableSkeleton };
