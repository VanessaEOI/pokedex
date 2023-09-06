<template>
  <v-app>
    <v-main>

      <header>
        <div class="d-flex">
          <v-switch label="Switch" inset></v-switch>
          <v-img src="./assets/pokedex.png"></v-img>
          <v-icon
            icon="mdi-github"
          ></v-icon>
        </div>
        <div class="d-flex">
          <v-autocomplete
            clearable
            label="Regions"
            :items="['Kanto (1-151)', 'Johto (152-251)', 'Hoenn (252-386)', 'Sinnoh (387-494)', 'Unova (495-649)', 'Kalos (650-721)', 'Alola (722-809)', 'Galar (810-898)']"
            multiple
          ></v-autocomplete>
          <v-autocomplete
            clearable
            label="Types"
            :items="['Grass', 'Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Steel', 'Water']"
            multiple
          ></v-autocomplete>
          <v-autocomplete
            clearable
            label="Sort by"
            :items="['Name', 'ID']"
            multiple
          ></v-autocomplete>
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
        </div>
      </header>
      <main>

      </main>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">

</script>
