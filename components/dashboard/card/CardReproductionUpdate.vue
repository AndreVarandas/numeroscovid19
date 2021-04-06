<template>
  <article class="nc-card-rupdate">
    <div>
      <h1 class="nc-card-rupdate__title">Último R conhecido</h1>
      <p class="nc-card-rupdate__subtitle">
        Índice de transmissibilidade de {{ data }}
      </p>
    </div>
    <div class="ml-6">
      <p class="nc-card-rupdate__value">{{ reproduction }}</p>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class CardReproductionUpate extends Vue {
  @Prop({ required: true }) reproduction!: string
  @Prop({ required: true }) data!: string
}
</script>

<style lang="scss" scoped>
.nc-card-rupdate {
  min-width: 350px;
  @apply flex justify-between items-center bg-white px-6 py-4 rounded;

  &__title {
    @apply text-lg text-gray-600;
  }

  &__subtitle {
    @apply text-sm text-gray-400;
  }

  &__value {
    @apply font-bold text-xl text-gray-600;
  }
}
</style>
