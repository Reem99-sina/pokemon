interface TypeIdProps {
  params: { idType: string };
}
import { getPokemonByiD } from "@/action/get-pokemon";
import CardComponent from "@/components/card/carditemPokemon";
import PokemonDetail, {
  PokemonDetailSkeleton,
} from "@/components/pokemon/pokemonDetail";

import { PokemonDetailType } from "@/type/types";
import { toast } from "sonner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TypeId = async ({ params }: TypeIdProps) => {
  const typeofId = await getPokemonByiD(params.idType)
    .then((data) => data)
    .catch(() => console.log("internal error"));
    console.log(typeofId,"typeofId")
  if (typeofId) {
    return (
      <div>
        <PokemonDetail pokemon={typeofId} />
      </div>
    );
  } else {
    return (
      <div>
        <PokemonDetailSkeleton />
      </div>
    );
  }
};
export default TypeId;
