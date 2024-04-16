export interface TypesOfCategory{
    name:String,
    url:String
}
export interface PokemonDetailType{
    
        abilities:{ ability: PokemonType, is_hidden: boolean, slot: number }[],
        base_experience:number,
        cries:{
            latest: string,
        legacy: string
    },
    forms:{name:string,url:string}[],
    game_indices:{game_index: number, version: any[]}[],
    height:number,
    held_items:any[],
    id:number,
    is_default:boolean,
    location_area_encounters:string,
    moves:{move:any[],version_group_details:any[]}[],
    name:string,
    order:number,
    past_abilities:any[],
    past_types:any[],
    species:{name:string,url:string},
    sprites:any,
    stats:{base_stat:number,effort:number,stat:any[]}[],
    types:{slot:number,type:PokemonType}[],
    weight:number
    
} 
export interface PokemonType{
    name:string,
    url:string
}