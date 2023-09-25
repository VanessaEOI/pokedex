import axios from "axios"
import {NamedAPIResource, NamedAPIResourceList} from "@/typedef/utility"

const useFetchAllPokemon = () => {

    const fetchAllPokemon = async(): Promise<NamedAPIResource[]> => {
        const cachedAllPokemonData = localStorage.getItem("allPokemon" )
        if (cachedAllPokemonData) {
            return JSON.parse(cachedAllPokemonData)
        } else {
            const response = await axios.get<NamedAPIResourceList>('https://pokeapi.co/api/v2/pokemon?limit=20')
            const allPokemonData = response.data.results
            localStorage.setItem("allPokemon", JSON.stringify(allPokemonData))
            return allPokemonData
        }
    }

    return {
        fetchAllPokemon,
    }
}

export default useFetchAllPokemon


