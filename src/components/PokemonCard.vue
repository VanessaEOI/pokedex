<script setup lang="ts">
const props = defineProps<{}>()
</script>

<template>
  <v-card class="mx-auto"
          max-width="344"
          >
    <v-card-title>ID: {{  }}</v-card-title>
    <v-img
        height="200px"
        cover
    ></v-img>
    <v-card-subtitle>{{  }}</v-card-subtitle>
    <v-icon>{{  }}</v-icon>
    <v-card-actions>
      <v-btn color="orange-lighten-2" variant="text">
        Infos
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
