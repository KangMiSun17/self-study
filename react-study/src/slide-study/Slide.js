import styled from "styled-components";

function Slide({ img }) {
  return <IMG src={img} />;
}

export default Slide;

const IMG = styled.img`
  width: 500px;
  height: 500px;
`;
