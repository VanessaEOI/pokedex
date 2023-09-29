import axios from "axios"
import {Pokemon} from "@/typedef/pokemon"
import * as localforage from "localforage"

const useFetchPokemon = () => {

  const fetchPokemon = async (pokemonName: string): Promise<Pokemon> => {
    const cachedPokemonData = await localforage.getItem(`pokemon-${pokemonName}`)
    if (cachedPokemonData) {
      return JSON.parse(cachedPokemonData)
    } else {
      const response = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      const pokemonData = response.data
      await localforage.setItem(`pokemon-${pokemonName}`, JSON.stringify(pokemonData))
      return pokemonData
    }
  }

  return {
    fetchPokemon,
  }
}

export default useFetchPokemon


