import Lists from "./lists";
import Form from "./form";
import { Wrapper } from "./styled";

export default ({ name }) => {
  return (
    <Wrapper>
      <Lists name={name} />
      <Form name={name} />
    </Wrapper>
  );
};
