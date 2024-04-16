"use client";
import { PokemonDetailType } from "@/type/types";
import dynamic from "next/dynamic";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import CardComponent from "@/components/card/cardtype";
import CardComponentAbility from "@/components/card/cardability";
import { PokemonType } from "@/type/types";

import Slider from "react-slick";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const StyleDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 40px 0px;

    @media  ${({ theme: { devices } }) => devices.mobileL} {
      flex-direction:column;
    }
  `;
const PokemonDetail = ({ pokemon }: { pokemon: PokemonDetailType }) => {
  
  const option = {
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: pokemon.stats.map(({ stat }: { stat: any }) => stat.name),
    },
    yaxis: {
      title: {
        text: 'Values',
    },
      categories: pokemon.stats.map((stat) => String(stat.base_stat)),
    },
  };
  const series = [
    {
      name: "status",
      data: pokemon?.stats?.map((stat) => stat.base_stat),
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log(pokemon.abilities.map(({ ability }) => ability));
  return (
    <div >
      <h2 style={{ textTransform: "capitalize" }}>{pokemon?.name}</h2>
      <Slider {...settings}>
        <Image
          src={pokemon.sprites.back_default}
          width={100}
          height={200}
          alt={"back default"}
        />
        <Image
          src={pokemon.sprites.back_shiny}
          width={100}
          height={200}
          alt={"back default"}
        />
        <Image
          src={pokemon.sprites.front_default}
          width={100}
          height={200}
          alt={"back default"}
        />
        <Image
          src={pokemon.sprites.front_shiny}
          width={100}
          height={200}
          alt={"back default"}
        />
      </Slider>
      <h2 style={{ textTransform: "capitalize" }}>Abilities</h2>
      <StyleDiv>
        {pokemon?.abilities?.map(({ ability }:  {ability:PokemonType} ) => (
          <CardComponentAbility
            key={ability.name}
            title={ability.name}
            href={ability.url}
          />
        ))}
      </StyleDiv>
      <StyleDiv>
        {pokemon?.types?.map(({ type } ) => (
          <CardComponent key={type.name} title={type.name} href={type.url} />
        ))}
      </StyleDiv>
      <ApexChart
        type="bar"
        options={option}
        series={series}
        height={200}
        width={"100%"}
      />
    </div>
  );
};
export default PokemonDetail;

export const PokemonDetailSkeleton = () => {
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
  return (
    <div>
      <Skeleton />
      <h2 style={{ textTransform: "capitalize" }}>Abilities</h2>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
};
