<script setup lang="ts">
const props = defineProps<{
  pokemonId: number,
  pokemonName: string,
  pokemonImg: string
}>()
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
          <v-card-subtitle>#{{ pokemonId }}</v-card-subtitle>
        </v-card-item>
        <v-img height="10em" class="ma-auto"
               :src="pokemonImg">
        </v-img>
      </v-card>
    </v-hover>
  </v-lazy>
</template>
