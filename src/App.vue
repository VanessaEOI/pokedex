<script setup lang="ts">
import PokemonCard from "@/components/PokemonCard.vue";

import axios from 'axios'
import { useAxios } from '@vueuse/integrations/useAxios'
import {Pokemon} from "@/typedef/pokemon";

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
})

const { data: pokemonData, isFinished } = useAxios('/pokemon', { method: 'GET' }, instance)

let pokemons: Pokemon[] = []

</script>

<template>
  <v-app class="ma-8">
    <v-app-bar scroll-behavior="elevate" class="ma-2 pa-8">
      <v-container>
        <v-row>
          <v-col class="d-inline-flex">
            <v-switch label="Switch" inset></v-switch>
            <v-img height="2em" src="./assets/pokedex.png"></v-img>
            <v-icon
              icon="mdi-github"
            ></v-icon>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container class="ma-2 pa-8 ma-auto">
        <v-row>
          <v-col>
            <v-autocomplete
              clearable
              label="Regions"
              :items="['Kanto (1-151)', 'Johto (152-251)', 'Hoenn (252-386)', 'Sinnoh (387-494)', 'Unova (495-649)', 'Kalos (650-721)', 'Alola (722-809)', 'Galar (810-898)']"
              multiple
            ></v-autocomplete>
          </v-col>
          <v-col>
            <v-autocomplete
              clearable
              label="Types"
              :items="['Grass', 'Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Steel', 'Water']"
              multiple
            ></v-autocomplete>
          </v-col>
          <v-col>
            <v-autocomplete
              clearable
              label="Sort by"
              :items="['Name', 'ID']"
              multiple
            ></v-autocomplete>
          </v-col>
          <v-col>
            <v-autocomplete
              class="flex-full-width"
              density="comfortable"
              menu-icon=""
              placeholder="Search a Pokemon"
              prepend-inner-icon="mdi-magnify"
              rounded
              theme="light"
              variant="solo"
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <PokemonCard v-for="(pokemon, index) in pokemons" :key="index" :pokemon="pokemon"></PokemonCard>
      </v-container>
    </v-main>
  </v-app>
</template>
