<template>
  <section class="nc-grid-report">
    <h4 class="nc-grid-report__header">
      Diferenças face ao relatório anterior
    </h4>
    <div class="nc-grid-report-row nc-grid-report__row">
      <div class="nc-grid-report-column nc-grid-report__column">
        <span class="nc-grid-report-column__value">{{ vigilancia }}</span>
        <p class="nc-grid-report-column__label">Vigilância</p>
      </div>
      <div class="nc-grid-report-column nc-grid-report__column">
        <span class="nc-grid-report-column__value">{{ activos }}</span>
        <p class="nc-grid-report-column__label">Activos</p>
      </div>
      <div class="nc-grid-report-column nc-grid-report__column">
        <span class="nc-grid-report-column__value">{{ internadosUci }}</span>
        <p class="nc-grid-report-column__label">UCI</p>
      </div>
      <div class="nc-grid-report-column nc-grid-report__column">
        <span class="nc-grid-report-column__value">{{
          internadosEnfermaria
        }}</span>
        <p class="nc-grid-report-column__label">Enfermaria</p>
      </div>
    </div>
    <div class="nc-grid-report-row nc-grid-report__row">
      <div class="nc-grid-report-column nc-grid-report__column">
        <span class="nc-grid-report-column__value">{{ confirmadosM }}</span>
        <p class="nc-grid-report-column__label">Masculinos</p>
      </div>
      <div class="nc-grid-report-column nc-grid-report__column">
        <span class="nc-grid-report-column__value">{{ confirmadosF }}</span>
        <p class="nc-grid-report-column__label">Femininos</p>
      </div>
      <div class="nc-grid-report-column nc-grid-report__column">
        <span class="nc-grid-report-column__value">{{ obitosM }}</span>
        <p class="nc-grid-report-column__label">Óbi. Masc.</p>
      </div>
      <div class="nc-grid-report-column nc-grid-report__column">
        <span class="nc-grid-report-column__value">{{ obitosF }}</span>
        <p class="nc-grid-report-column__label">Óbi. Femi.</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class GridDailyReport extends Vue {
  @Prop({ required: true }) vigilancia!: number
  @Prop({ required: true }) activos!: number
  @Prop({ required: true }) internadosUci!: number
  @Prop({ required: true }) internadosEnfermaria!: number
  @Prop({ required: true }) confirmadosM!: number
  @Prop({ required: true }) confirmadosF!: number
  @Prop({ required: true }) obitosM!: number
  @Prop({ required: true }) obitosF!: number
}
</script>

<style lang="scss" scoped>
.nc-grid-report {
  &__header {
    @apply font-semibold text-lg text-gray-700 bg-green-300 px-4 py-2 mb-4 rounded inline-block;
  }

  &__row {
    @apply flex mb-8;
  }

  &__column {
    @apply w-1/4 flex-col flex lg:w-1/6;
  }
}

.nc-grid-report-column {
  &__value {
    @apply font-semibold text-lg text-gray-700;
  }

  &__label {
    @apply text-sm text-gray-500 mt-2;
  }
}
</style>
