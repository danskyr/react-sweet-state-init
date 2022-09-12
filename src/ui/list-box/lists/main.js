import { PlaceHolder, Wrapper } from "./styled";
import React from "react";

export default React.memo(({ name }) => {
  return (
    <Wrapper>
      <h2>{name}</h2>
      <PlaceHolder>add an item here</PlaceHolder>
    </Wrapper>
  );
});
