<template>
    <div>
    <h4>About Page</h4>
        <hr>
        <h4>from data</h4>
        {{ message }} {{ count }}
        <hr>
        <h4>from store</h4>
        {{ $store.state.message }} {{ $store.state.count }}
      
    </div>
</template>

<script>
export default {
    data() {
    return {
        message: this.$store.state.message,
        count: this.$store.state.count, // 최초에 읽어와서 집어 넣은 것.
    }
},
}
</script>

<style scoped>
</style>