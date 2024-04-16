import axios from "axios"

export async function getPokemonByiD(id:string){
    try {
        const {data}=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        
        return data
    } catch (error) {
        throw new Error("internal error")

    }
}