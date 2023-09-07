<script setup lang="ts">
const props = defineProps<{
  pokemon: any
}>()

const getPokemonImgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${props.pokemon.id}.png`

</script>

<template>
  <v-card class="mx-auto"
          max-width="344"
          >
    <v-card-title>ID: {{ props.pokemon.id }}</v-card-title>
    <v-img
        :src="getPokemonImgUrl"
        height="200px"
        cover
    ></v-img>
    <v-card-subtitle>{{ props.pokemon.name }}</v-card-subtitle>
    <v-icon>{{ props.pokemon.type }}</v-icon>
    <v-card-actions>
      <v-btn color="orange-lighten-2" variant="text">
        Infos
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
