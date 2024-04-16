"use client";
import styled from "styled-components";
import Image from "next/image";
import { useTransition, useState } from "react";
import {useRouter} from "next/navigation"
import { getPokemonByName } from "@/action/get-pokemon-name";
const NavbarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #87a379;
  //   background-color: ${({ theme: { colors } }) => colors.background};
  color: #fff;
  padding: 10px 20px;
  flex-direction:row;

  @media  ${({ theme: { devices } }) => devices.mobileL} {
    flex-direction:column;
  }
`;

const SearchInput = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const FilterButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
`;
const Styleh1 = styled.h1`
  color: ${({ theme: { colors } }) => colors.text};
`;
const Navbar = () => {
  const router=useRouter()
  const [isPending, startTransition] = useTransition();
  const [inputValue, setInput] = useState("");
  const handleFilterClick = () => {
    startTransition(() => {
      getPokemonByName(inputValue)
        .then((data) => router.push(`/pokemon/${data.id}`))
        .catch((error) => console.log(error, "error"));
    });
  };
  return (
    <NavbarStyle>
      <Image src={"/image.png"} alt="pokemon" width={200} height={100} />
      <div>
        <SearchInput
          type="text"
          placeholder="Search products..."
          onChange={(e) => setInput(e.target.value)}
          disabled={isPending}
        />
        <FilterButton onClick={handleFilterClick}>Filter</FilterButton>
      </div>
    </NavbarStyle>
  );
};
export default Navbar;
