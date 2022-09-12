import React from "react";
import Input from "./input";
import Buttons from "./buttons";
import { Wrapper } from "./styled";

export default React.memo(({ name }) => {
  return (
    <Wrapper>
      <Input name={name} />
      <Buttons name={name} />
    </Wrapper>
  );
});
