<script>
import axiosClient from './util/axiosClient'

export default {
    computed: {
      
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
    components: { }
}

</script>

<template>
<div>Hola mundo</div>
</template>


