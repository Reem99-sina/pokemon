"use client"
interface TypeIdProps {
  params: { idType: string };
}
import { getTypeByiD } from "@/action/get-type-id";
import CardComponent, { CardSkeleton } from "@/components/card/carditemPokemon";
import { PokemonType } from "@/type/types";
import { toast } from "sonner";
import {useEffect,useTransition,useState,useCallback} from "react"
const TypeId =  ({ params }: TypeIdProps) => {
    const [isPending, startTransition] = useTransition();
    const [typeofId,settypeofId]=useState([])
    let limit=10

    const onScroll = useCallback(async () => { 
        
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 ) {
            limit+=10
            startTransition(async()=>{
                await getTypeByiD({id:params.idType}).then((data) => settypeofId(data.filter((ele:any,index:number)=>index<=limit)))
                .catch(() => console.log("internal error"));
            })
        }
      }, []); // Dependencies
    
      useEffect(() => {
         getTypeByiD({id:params.idType}).then((data) => settypeofId(data.filter((ele:any,index:number)=>index<=limit)))
        .catch(() => console.log("internal error"));
        window.addEventListener('scroll', onScroll);
        
        return () => window.removeEventListener('scroll', onScroll);
      }, [onScroll]); 
  
    
  if (typeofId?.length > 0) {
    return (
      <div>
        {typeofId?.map(({ pokemon }: { pokemon: PokemonType }) => (
          <CardComponent
            key={pokemon?.name}
            title={pokemon?.name}
            href={pokemon?.url}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        {[...Array(3)]?.map((_, i) => (
          <CardSkeleton key={i}/>
        ))}
      </div>
    );
  }
};
export default TypeId;
