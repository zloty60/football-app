// eslint-disable-next-line no-unused-vars
import { css } from "styled-components/macro";
import Skeleton from "react-loading-skeleton";

import { Card, CardHeader, CardContent } from "./../lib/card";
import { Img } from "./../lib/base";
import { Flex } from "./../lib/grid";

function TeamJersey({ img }) {
  return (
    <Card>
      <CardHeader>Koszulka</CardHeader>
      <CardContent>
        <Flex justifyContent="center">
          {img ? (
            <Img
              src={img}
              height={397}
              objectFit="contain"
              css={`
                width: 100%;
              `}
            />
          ) : (
            <p>Brak zdjęcia</p>
          )}
        </Flex>
      </CardContent>
    </Card>
  );
}

function CardSkeleton({ txt, height }) {
  return (
    <Card>
      <CardHeader>{txt}</CardHeader>
      <CardContent>
        <Skeleton height={height} />
      </CardContent>
    </Card>
  );
}

function Stadium({ img }) {
  return (
    <Card>
      <CardHeader>Stadion</CardHeader>
      <CardContent>
        <Flex justifyContent="center">
          {img ? (
            <Img
              src={img}
              height={180}
              objectFit="cover"
              css={`
                width: 100%;
              `}
            />
          ) : (
            <p>Brak zdjęcia</p>
          )}
        </Flex>
      </CardContent>
    </Card>
  );
}

export { TeamJersey, Stadium, CardSkeleton };
