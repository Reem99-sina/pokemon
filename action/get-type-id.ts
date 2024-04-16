
import axios from "axios"

export async function getTypeByiD({id}:{id:string}){
    console.log(id,"id")
    try {
        const {data}=await axios.get(`https://pokeapi.co/api/v2/type/${id}/`)
        return data.pokemon
    } catch (error) {
        throw new Error("internal error")

    }
}