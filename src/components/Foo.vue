<template>
    <div>
        <h2>{{ $t("message.foo") }}</h2>
        <p>{{ count }}</p>
        <button v-on:click="increment">
            Increment
        </button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    computed: {
        ...mapState({
            count: 'count',
        })
    },
    methods: {
        ...mapMutations([
            'increment',
        ])
    },
};
</script>

<style scoped>
    h2 {
        color: red;
    }
</style>
