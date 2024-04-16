"use client";
import styled,{keyframes} from "styled-components";

const Container = styled.div`
  display: flex;
  height:95vh;
  flex-direction:column;
`;
const DivCenter=styled.div`
display: flex;
justify-content:center;
align-items:center;
height:100%;
width:100%;
`;
const Loader = styled.div`
  border-width: 0.5rem;
  border-style: solid;
  border-color: #87a379 #87a379 #87a379 #87a379;
  width: 3.625rem;
  height: 3.625rem;
  border-radius: 50%;
  position: relative;
  -webkit-animation:  ${keyframes`
  0%{
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`}  2s infinite;
  animation: ${keyframes`
  0%{
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`}  2s infinite;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition:transform 1s;
  &:before,
  &:after {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: #87a379;
    position: absolute;
    left: 0.125rem;
  }

  &:before {
    top: 0.063rem;
  }

  &:after {
    bottom: 0.063rem;
  }

`;
const LoadingPage = () => {
  return (
    <Container>
        
         <DivCenter>
      <Loader />
      </DivCenter>
    </Container>
  );
};
export default LoadingPage;
