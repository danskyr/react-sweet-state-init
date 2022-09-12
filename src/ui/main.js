import { Wrapper } from "./styled";
import ListBox from "./list-box";

export default () => {
  return (
    <div>
      <h1>Todo items</h1>
      <Wrapper>
        <ListBox name="Bob" />
        <ListBox name="John" />
      </Wrapper>
    </div>
  );
};
