<template>
  <div class="nc-app">
    <Nuxt class="nc-app__wrapper flex-1 mt-6" />
    <TheFooter class="nc-app__wrapper" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

// Components
import TheFooter from '@/components/footer/TheFooter.vue'

@Component({ components: { TheFooter } })
export default class Layout extends Vue {}
</script>

<style lang="scss" scoped>
.nc-app {
  @apply flex flex-col h-screen;

  &__wrapper {
    @apply container mx-auto px-6 py-4;
  }
}
</style>
