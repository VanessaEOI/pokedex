import axios from "axios"
import {Pokemon} from "@/typedef/pokemon"

const useFetchPokemon = () => {

    const fetchPokemon = async(pokemonName: string): Promise<Pokemon> => {
        const cachedPokemonData = localStorage.getItem(`pokemon-${pokemonName}`)
        if (cachedPokemonData) {
            return JSON.parse(cachedPokemonData)
        } else {
            const response = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            const pokemonData = response.data
            localStorage.setItem(`pokemon-${pokemonName}`, JSON.stringify(pokemonData))
            return pokemonData
        }
    }

    return {
        fetchPokemon,
    }
}

export default useFetchPokemon


