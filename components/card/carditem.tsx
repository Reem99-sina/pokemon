"use client"
import styled from 'styled-components';
import {useRouter} from "next/navigation"
import Image from "next/image"
const Card = styled.div`
  background-image: url(${props=>props.title});
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  width:95%;
  height:70vh;
  cursor:pointer;
  flex:1;
  overflow:hidden;
  background-size:cover;
  background-position:center;
`;

const CardTitle = styled.h2`
color:${({ theme: { colors } }) => colors.text};
text-transform: capitalize;
`;

const CardContent = styled.p`
  color: #666;
`;


const CardComponent = ({title,href}:{title:string,href:string}) => {
    const router=useRouter()
    const idType=href.split('/')[href.split('/').length-2]
    
  return (
    <Card onClick={()=>router.push(`/${idType}`)} title={`/${title}.jpg`}>
      <CardTitle>{title}</CardTitle>
      {/* <Image src={`/${title}.jpg`} width={300} height={300} alt={title}/> */}
    </Card>
  );
};

export default CardComponent;