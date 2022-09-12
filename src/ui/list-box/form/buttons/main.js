import React from "react";
import { Button } from "./styled";

export default React.memo(({ name }) => {
  return (
    <>
      <Button
        type="button"
        onClick={() => {
          console.log("add personal item");
        }}
      >
        Assign to myself
      </Button>
      <Button
        type="button"
        onClick={() => {
          console.log("add shared item");
        }}
      >
        Assign to everyone
      </Button>
    </>
  );
});
