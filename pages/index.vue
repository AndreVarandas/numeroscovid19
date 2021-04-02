<template>
  <div class="container">
    <h1 class="title text-white text-6xl">Hello, world.</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
