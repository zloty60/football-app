// eslint-disable-next-line no-unused-vars
import { css } from "styled-components/macro";

import { Flex } from "./../components/lib/grid";
import { Card, CardHeader, CardLink } from "./../components/lib/card";
import { Img } from "./../components/lib/base";
import { leagues } from "./../data";

export function Root() {
  return (
    <Flex justifyContent="center">
      <Card maxWidth={650}>
        <CardHeader>WYBIERZ LIGĘ:</CardHeader>
        <ul
          css={`
            margin: 0;
          `}
        >
          {leagues.map((league) => (
            <li key={league.id}>
              <CardLink to={`/liga/${league.id}`}>
                <Img mr={12} height={30} src={league.logo} />
                <span>{league.name}</span>
              </CardLink>
            </li>
          ))}
        </ul>
      </Card>
    </Flex>
  );
}
