<template>
  <article class="nc-grid-highlights">
    <h4 class="nc-grid-highlights__title">Em destaque</h4>
    <div class="nc-grid-highlights__content">
      <div class="nc-grid-highlights-col">
        <span class="nc-grid-highlights-col__value">{{
          highlights.internados
        }}</span>
        <p class="nc-grid-highlights-col__label">Internados</p>
      </div>
      <div>
        <span class="nc-grid-highlights-col__value">{{
          highlights.internadosUci
        }}</span>
        <p class="nc-grid-highlights-col__label">UCI</p>
      </div>
      <div>
        <span class="nc-grid-highlights-col__value">{{
          highlights.ativos
        }}</span>
        <p class="nc-grid-highlights-col__label">Activos</p>
      </div>
      <div>
        <span class="nc-grid-highlights-col__value">{{
          highlights.recuperados
        }}</span>
        <p class="nc-grid-highlights-col__label">Recuperados</p>
      </div>
      <div>
        <span class="nc-grid-highlights-col__value">{{
          highlights.obitos
        }}</span>
        <p class="nc-grid-highlights-col__label">Óbitos</p>
      </div>
      <div>
        <span class="nc-grid-highlights-col__value">{{
          highlights.confirmados
        }}</span>
        <p class="nc-grid-highlights-col__label">Confirmados</p>
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
    @apply text-lg text-gray-600 mb-4;
  }

  &__content {
    @apply grid grid-cols-3 gap-8;
  }
}

.nc-grid-highlights-col {
  &__value {
    @apply text-gray-600 font-bold;
  }

  &__label {
    @apply text-gray-400 text-sm mt-2;
  }
}
</style>
