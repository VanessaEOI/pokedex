<script setup lang="ts">
import {onMounted, ref} from "vue"
import {Pokemon} from "@/typedef/pokemon"
import useFetchPokemon from "@/utils/fetchPokemon"

const props = defineProps<{
  pokemonName: string,
}>()

const { fetchPokemon } = useFetchPokemon()

const pokemon = ref<Pokemon | null>(null)

async function load() {
  pokemon.value = await fetchPokemon(props.pokemonName)
}

onMounted(async () => {
  await load()
})

</script>

<template>
  <v-lazy :options="{'threshold':0.5}"
          transition="fade-transition"
          class="v-col-3">
    <v-hover v-slot="{ isHovering, props }" >
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
