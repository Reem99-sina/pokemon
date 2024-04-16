"use client";
import styled, { keyframes } from "styled-components";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Card = styled.div`
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  flex: 1;
  cursor:pointer;
  overflow: hidden;
  background-size: cover;
  background-postion: center;
`;
const Skeleton = styled.div`
width: 100%;
height: 50px;
border-radius: 8px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
padding: 20px;
margin: 10px;
background-color: #f0f0f0;
border-radius: 4px;
animation: ${keyframes`
0% {
opacity: 0.5;
}
50% {
opacity: 1;
}
100% {
opacity: 0.5;
}
`} 1.5s infinite;
`;
const CardTitle = styled.h2`
  color: ${({ theme: { colors } }) => colors.text};
  text-transform: capitalize;
`;

const CardContent = styled.p`
  color: #666;
`;

const CardComponent = ({ title, href }: { title: string; href: string }) => {
  const router = useRouter();
  const idType = href?.split("/")[href?.split("/")?.length - 2];

  // console.log(isPending,idType,pokemon)

  return (
    <Card onClick={() => router.push(`/pokemon/${idType}`)}>
      <CardTitle>{title}</CardTitle>
      {/* <Image src={`/${title}.jpg`} width={300} height={300} alt={title}/> */}
    </Card>
  );
};

export default CardComponent;

export const CardSkeleton = () => {

  return <Skeleton />;
};
