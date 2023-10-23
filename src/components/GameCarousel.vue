<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { useGameStore } from '../stores/game'

export default {
    props: {
        games: Array,
    },
    data() { return {} },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    methods: {
        updateGameIndex(index) {
            useGameStore().gameIndex = index;
            console.log(useGameStore().gameIndex);
        }
    },
    beforeMount() { },
    mounted() { },
    computed: {
        GameIndex() {
            return useGameStore().gameIndex;
        }
    },
    watch: {}
}
</script>

<template>
    <div class="min-w-[1200px] overflow-hidden " v-if="games">
        <carousel :items-to-show="4" :items-to-scroll="4" :wrap-around="true" :transition="1000" snapAlign="start">
            <slide class="flex items-center object-cover text-white bg-transparent" v-for="(game, index) in games"
                :key="game">
                <div class="max-w-[400px] max-h-[200px] overflow-hidden rounded-xl">
                    <img v-on:click="updateGameIndex(index)"
                        class="shadow-xl rounded-lg  transition ease-in-out duration-1000 hover:scale-110 cursor-pointer"
                        img v-bind:src="game.thumbnail" v-bind:alt="game.title" />
                </div>
            </slide>

            <template #addons>
                <navigation />
            </template>
        </carousel>
    </div>
</template>
