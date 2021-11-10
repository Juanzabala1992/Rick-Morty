export interface character{
    id:number,
    name:string,
    status:string,
    species:string,
    type:string,
    gender:string,
    origin:string,
    location:string,
    created:string,
    image:string
}

export interface capitulosDTO{

    id: number;
    name: string,
    air_date: Date,
    episode: string,
    characters: string[],
    url: string,
    created: Date,
    personajes: personajesDTO[],

}
export interface personajesDTO{

    url: string,
    name: string
}


