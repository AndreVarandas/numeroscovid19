<template>
  <div class="nc-app">
    <the-nav />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

// Components
import TheNav from '@/components/header/TheNav.vue'

@Component({ components: { TheNav } })
export default class Layout extends Vue {}
</script>

<style lang="scss" scoped>
.nc-app {
  background-color: gray;
}
</style>
