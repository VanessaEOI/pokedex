<script setup lang="ts">
import {onMounted, ref} from "vue";
import axios from "axios";
import {Pokemon} from "@/typedef/pokemon";

const pokemon = ref<Pokemon | null>(null)
const props = defineProps<{
  pokemonName: string,
}>()

onMounted(() => {
  getPokemon()
})

async function getPokemon() {
  try {
    const response = await axios.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/' + props.pokemonName)
    pokemon.value = response.data
    console.log(response.data)
  } catch (error: any) {
    const errorCode = error.response.status
    switch (errorCode) {
      case 404:
        console.log("Pokémons introuvables !")
        break
      case 500:
        console.log("Une erreur interne s'est produite")
        break
      default:
        console.log("Une erreur inconnue s'est produite")
        break
    }
  }
}

</script>

<template>
  <v-lazy :options="{'threshold':0.5}"
          transition="fade-transition"
          class="v-col-2">
    <v-hover v-slot="{ isHovering, props }">
      <v-card class="mx-auto ma-2 pa-6 rounded-xl"
              max-width="344"
              :elevation="isHovering ? 12 : 2"
              :class="{ 'on-hover': isHovering }"
              v-bind="props"
              height="fit-content">
        <v-card-item>
          <v-card-title>{{ pokemonName }}</v-card-title>
          <v-card-subtitle>#{{ pokemon?.id }}</v-card-subtitle>
        </v-card-item>
        <v-img height="10em" class="ma-auto"
               :src="pokemon?.sprites?.front_default">
        </v-img>
      </v-card>
    </v-hover>
  </v-lazy>
</template>
