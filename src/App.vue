<script setup lang="ts">

import axios from "axios";

import {onMounted} from "vue";
import {useStorage} from "@vueuse/core";

onMounted(()=> {
  getPokemon()
})

async function getPokemon() {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/2')
    console.log(response.data.name)
  } catch (error) {
    console.error(error)
  }
}

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
        <v-card class="mx-auto" max-width="344">
          <v-card-title></v-card-title>
          <v-card-subtitle></v-card-subtitle>
          <v-icon></v-icon>
          <v-card-actions>
            <v-btn color="orange-lighten-2" variant="text">
              Infos
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>
