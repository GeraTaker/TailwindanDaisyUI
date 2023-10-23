<script>
export default {
    props: {
        game: Object,
    },
    data() { return {} },
    components: {},
    methods: {},
    beforeMount() { },
    mounted() { },
    computed: {},
    watch: {}
}
</script>

<template>
    <div v-if="game" class="hero p-10 text-white bg-gradient-to-b from-blue-950 to-blue-500 ">
        
        <div class="hero-content flex-col lg:flex-row">
            <div class="overflow-hidden rounded-lg">
                <img v-bind:src="game.thumbnail"
                    class="transition ease-in-out duration-1000 max-w-sm shadow-2xl hover:scale-125" />
            </div>
            <div>
                <h1 class="text-5xl font-bold">{{ game.title }} <span class="text-start">({{
                    game.release_date.substring(0, 4) }})</span></h1>
                <h2 class="text-2xl font-extralight underline underline-offset-8">Developer: {{ game.developer }}</h2>
                <div class="mt-5">
                    <span class="badge badge-accent mr-5">{{ game.genre }}</span>
                    <span class="badge badge-neutral">{{ game.platform }}</span>
                </div>

                <p class="py-6">{{ game.short_description }}</p>
                <a v-bind:href="game.game_url" target="_blank"><button class="btn bg-blue-900 border-none hover:bg-blue-700 text-white">Let's Play</button></a>
            </div>

        </div>
    </div>
</template>