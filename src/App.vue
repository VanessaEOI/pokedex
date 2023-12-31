<script setup lang="ts">
import {onMounted, ref} from "vue"
import PokemonCard from "@/components/PokemonCard.vue"
import {NamedAPIResource} from "@/typedef/utility"
import usePokemonList from "@/utils/usePokemonList"

const pokemons = ref<NamedAPIResource[]>([])
const searchText = ref('')
const nextUrl = ref<NamedAPIResource[]>([])

const {fetchPage} = usePokemonList()

async function loadPages() {
  pokemons.value = await fetchPage()
  nextUrl.value = await fetchPage(true)
}

onMounted(async () => {
  await loadPages()
})

const loadMore = async () => {
  if (nextUrl.value) {
    const nextPageData = await fetchPage(true)
    pokemons.value = pokemons.value.concat(nextPageData)
  }
}

</script>

<template>
  <v-app class="ma-8">
    <v-app-bar scroll-behavior="elevate" class="pa-8">
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
    <v-main class="mt-2">
      <v-container class="ma-2 mt-2 pa-8 ma-auto">
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
              label="Sort by"
              :items="['Name', 'ID']"
            ></v-autocomplete>
          </v-col>
          <v-col>
            <v-text-field
              placeholder="Search Pokemon"
              prepend-inner-icon="mdi-magnify"
              variant="solo"
              v-model="searchText"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="d-flex flex-wrap v-col-10">
        <PokemonCard v-for="pokemon in pokemons"
                     :key="pokemon.name"
                     :pokemonName="pokemon.name"
        />
      </v-container>
      <v-container class="d-flex justify-center">
        <v-btn @click="loadMore">
          Load more
        </v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>
