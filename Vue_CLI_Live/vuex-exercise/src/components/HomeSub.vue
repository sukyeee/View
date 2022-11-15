<template>
    <div>
        <h4>Home Sub</h4>
        {{ $store.state.message }} {{ $store.state.count }}

        <button @click="changeCount">change count to 10</button>
        <button @click="changeMessage">change meessage to ssafy</button>
        
    </div>
</template>

<script>
export default {
    methods: {
        changeCount(){
            this.$store.dispatch('setCount', 10)
        },
        changeMessage(){
            this.$store.dispatch('setMessage', 'SSAFY')
        }
    }
}
</script>

<style scoped>
</style>