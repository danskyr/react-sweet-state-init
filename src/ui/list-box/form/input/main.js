import React from "react";
import { Input } from "./styled";

export default React.memo(({ name }) => {
  return <Input value="" onChange={(ev) => console.log(ev.target.value)} />;
});
