<template>
  <article class="nc-grid-highlights">
    <h1 class="nc-grid-highlights__title">Destaques</h1>
    <div class="grid grid-cols-3 gap-4">
      <div>
        <p>Internados {{ highlights.internados }}</p>
      </div>
      <div>
        <p>UCI {{ highlights.internadosUci }}</p>
      </div>
      <div>
        <p>Activos {{ highlights.ativos }}</p>
      </div>
      <div>
        <p>Recuperados {{ highlights.recuperados }}</p>
      </div>
      <div>
        <p>Óbitos {{ highlights.obitos }}</p>
      </div>
      <div>
        <p>Confirmados {{ highlights.confirmados }}</p>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

// Interfaces
import { IGridHighlightsProp } from '@/interfaces/components/grid/IGridHighlights.interface'

@Component
export default class GridTopData extends Vue {
  @Prop({ required: true }) highlights!: IGridHighlightsProp
}
</script>

<style lang="scss" scoped>
.nc-grid-highlights {
  &__title {
    @apply font-bold;
  }
}
</style>
