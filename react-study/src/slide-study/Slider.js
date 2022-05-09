import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Slide from "./Slide";
import img1 from "./public/마라탕.jpg";
import img2 from "./public/짜장면.jpg";
import img3 from "./public/치킨.jpg";

function Slider() {
  const TotalSlieds = 2;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const NextSlide = () => {
    if (currentSlide >= TotalSlieds) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((cur) => cur + 1);
    }
  };
  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TotalSlieds);
    } else {
      setCurrentSlide((cur) => cur - 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  });
  return (
    <Container>
      <SliderContainer ref={slideRef}>
        <Slide img={img1} />
        <Slide img={img2} />
        <Slide img={img3} />
      </SliderContainer>
      <Center>
        <Button onClick={PrevSlide}>Prev</Button>
        <Button onClick={NextSlide}>Next</Button>
      </Center>
    </Container>
  );
}

export default Slider;

const Container = styled.div`
  width: 500px;
  margin: auto;
  height: 1000px;
  overflow: hidden; // 선을 넘어간 이미지들은 숨겨줍니다.
`;

const SliderContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 2em;
  display: flex;
`;

const Center = styled.div`
  text-align: center;
`;
const Button = styled.div`
  all: unset; //요소의 모든 속성을, 속성이 값을 상속하는 경우 상속값으로, 아니면 초깃값으로 변경합니다.
  margin: 2em 2em;
  padding: 1em 2em;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  color: black;
  &:hover {
    background-color: black;
    color: white;
  }
`;
