import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  border-radius: 10px;
  background-color: #d3d3d3;
  padding: 1rem;
  & + & {
    margin-left: 1rem;
  }
`;
