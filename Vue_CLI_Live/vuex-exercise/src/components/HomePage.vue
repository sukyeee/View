<template>
    <div>
        <h4>Home Page</h4>
        <hr>
        <h4>from data</h4>
        {{ message }} {{ count }}
        <!-- 이후 변화에는 위 count는 변화 없음. -->
        <hr>
        <h4>from store</h4>
        {{ $store.state.message }} {{ $store.state.count  }}
        <hr>
        <h4>from store getters</h4>
        {{ $store.getters.getReversedMessage }} {{ $store.getters.isCountEven  }}
        <hr>
        <h4>from store map getters</h4>
        {{ getReversedMessage }} {{ checkCountIsEven  }}
        <hr>
        <HomeSub></HomeSub>
    </div>
</template>

<script>
import HomeSub from '@/components/HomeSub.vue'

import { mapGetters } from 'vuex' 

export default {
components: { HomeSub },
data() {
    return {
        message: this.$store.state.message,
        count: this.$store.state.count, // 최초에 읽어와서 집어 넣은 것.
    }
},
computed: {
    ...mapGetters(['getReversedMessage']),
    ...mapGetters({checkCountIsEven: 'isCountEven'}) // alias
}
}
</script>

<style scoped>
</style>