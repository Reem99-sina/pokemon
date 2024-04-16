import axios from "axios"

export async function getType(){
    try {
        const {data}=await axios.get(`https://pokeapi.co/api/v2/type`)
        console.log(data,"data",data.count)
        return data.results
    } catch (error) {
        throw new Error("internal error")

    }
}