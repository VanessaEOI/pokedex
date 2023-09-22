import axios from "axios"
import {NamedAPIResource} from "@/typedef/utility"

const useFetchAllPokemon = () => {

    const fetchAllPokemon = async(): Promise<NamedAPIResource[]> => {
        const cachedAllPokemonData = localStorage.getItem("allPokemonData")
        if (cachedAllPokemonData) {
            return JSON.parse(cachedAllPokemonData)
        } else {
            const response = await axios.get<NamedAPIResource[]>('https://pokeapi.co/api/v2/pokemon?limit=20')
            const allPokemonData = response.data
            localStorage.setItem("allPokemonData", JSON.stringify(allPokemonData))
            return allPokemonData
        }
    }

    return {
        fetchAllPokemon,
    }
}

export default useFetchAllPokemon


