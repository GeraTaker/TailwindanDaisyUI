<script>
import GameDetails from './components/GameDetails.vue';
import GameCarousel from './components/GameCarousel.vue';
import GameCatalog from './components/GameCatalog.vue';
import GameFooter from './components/GameFooter.vue';


import axiosClient from './util/axiosClient';

import { useGameStore } from './stores/game'

export default {
    computed: {
        GameIndex() {
            return useGameStore().gameIndex;
        }
    },
    data() {
        return {
            games: null,
            game: null
        };
    },
    methods: {},
    async mounted() {
        try {
            const response = await axiosClient.axios.request(axiosClient.options);
            this.games = response.data;
            this.game = this.games[0];
            console.log(this.games);
        }
        catch (error) {
            console.error(error);
        }

    },
    components: { GameDetails, GameCarousel , GameCatalog, GameFooter}
}

</script>

<template>
    <div class="navbar bg-blue-950 text-primary-content p-5">
        <div class="navbar-start">
            <button class="btn bg-blue-900 border-none hover:bg-blue-700 text-white">Game Store</button>
        </div>
        <div class="navbar-center gap-2">
            <button class="btn btn-ghost hover:underline hover:text-white" v-for="item in ['Store', 'Community', 'About', 'Support']">{{ item }}</button>
        </div>
    </div>
    
    <GameDetails v-if="games" :game="games[GameIndex]" />
    <div class=" bg-blue-500 ">
        <h1 class="inline hover:cursor-pointer text-2xl font-bold text-white p-5">Recommended Games</h1>
        <GameCarousel :games="games"/>
        <span class="hover:cursor-pointer text-2xl font-bold text-white p-5">All Games</span>
        <GameCatalog  :games="games"/>
    </div>
    <GameFooter />
    
</template>

