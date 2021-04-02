<template>
  <nav class="nc-nav">
    <ul>
      <li>Home</li>
    </ul>
  </nav>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class TheNav extends Vue {}
</script>

<style lang="scss" scoped>
.nc-nav {
  color: white;
}
</style>
