<script>
export default {
    props: {
        games: Array,
    },
    data() {
        return {
            searchGame: "",
            gamesByName: [],
            gamesToShow: this.games,
        }
    },
    components: {},
    methods: {
        filterByName() {
            this.gamesByName = [];
            for (let game of this.games) {
                var title = game.title.toLowerCase();
                this.searchGame = this.searchGame.toLowerCase();
                if (title.includes(this.searchGame)) {
                    this.gamesByName.push(game);
                }
            }
            console.log(this.gamesByName);
            this.gamesToShow = this.gamesByName;
        }
    },
    onMounted() { this.gamesToShow = this.games },
    beforeMount() {},
    mounted() { },
    computed: {},
    watch: {}

}
</script>

<template>
    <div class="bg-gradient-to-b from-blue-500 to-blue-300 text-gray-700 pb-[8em]">
        <div class="container mx-auto m-5">
            <input v-on:input="filterByName()" v-model="searchGame" type="text" placeholder="Search a game..."
                class="input input-bordered bg-blue-600 text-white placeholder:text-blue-950 hover:border-blue-100 w-full max-w-xs" />
        </div>

        <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <div v-if="gamesToShow" v-for="game in gamesToShow">
                <div
                    class="card w-96 h-full shadow-xl shadow-blue-600 bg-gradient-to-b from-blue-800  via-blue-500  to-blue-300">
                    <figure><img v-bind:src="game.thumbnail" v-bind:alt="game.title" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{{ game.title }}</h2>
                        <span class="badge badge-accent">{{ game.genre }}</span>
                        <span class="badge badge-neutral">{{ game.platform }}</span>
                        <span class="badge badge-warning ">{{ game.developer }}</span>
                        <div class="divider"></div>
                        <p>{{ game.short_description }}</p>
                        <div class="card-actions justify-end">
                            <a target="_blank" v-bind:href="game.game_url"> <button
                                    class="btn bg-blue-900 border-none hover:bg-blue-700 text-white">Play
                                    Now!</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else v-for="game in games">
                <div
                    class="card w-96 h-full shadow-xl shadow-blue-600 bg-gradient-to-b from-blue-800  via-blue-500  to-blue-300">
                    <figure><img v-bind:src="game.thumbnail" v-bind:alt="game.title" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{{ game.title }}</h2>
                        <span class="badge badge-accent">{{ game.genre }}</span>
                        <span class="badge badge-neutral">{{ game.platform }}</span>
                        <span class="badge badge-warning ">{{ game.developer }}</span>
                        <div class="divider"></div>
                        <p>{{ game.short_description }}</p>
                        <div class="card-actions justify-end">
                            <a target="_blank" v-bind:href="game.game_url"> <button
                                    class="btn bg-blue-900 border-none hover:bg-blue-700 text-white">Play
                                    Now!</button></a>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    </div>
</template>
