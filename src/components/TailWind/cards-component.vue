<template>
  <h1>Games</h1>
  <div class="grid sm:grid-cols-1 xl:grid-cols-4 gap-4">
    <div v-for="(game, index) in games" :key="index" class="bg-gradient-to-br  from-green-500 to-blue-500">
      <h2>{{ game.title }}</h2>
      <img class="animate-bounce mt-9" :src="game.thumbnail" />
      <a :href="game.game_url">Jugar ahora</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    games: null,
  },
};
</script>
