import axios from "axios"

export async function getPokemonByName(name:string){
    console.log(name,"name")
    try {
        const {data}=await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
        
        return data
    } catch (error) {
        throw new Error("internal error")

    }
}