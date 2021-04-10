<template>
  <article class="nc-card-rupdate">
    <div>
      <h1 class="nc-card-rupdate__title">Último R conhecido</h1>
      <p class="nc-card-rupdate__subtitle">
        Índice de transmissibilidade a {{ data }}
      </p>
    </div>
    <div class="flex mt-4">
      <div class="flex flex-col items-center">
        <p
          class="nc-card-rupdate-value nc-card-rupdate__value"
          :class="{ 'nc-card-rupdate-value__warn': nationalR > 1 }"
        >
          {{ nationalR }}
        </p>
        <span class="nc-card-rupdate__label">Nacional</span>
      </div>
      <div class="ml-6 flex flex-col items-center">
        <p
          class="nc-card-rupdate__value"
          :class="{ 'nc-card-rupdate-value__warn': continentalR > 1 }"
        >
          {{ continentalR }}
        </p>
        <span class="nc-card-rupdate__label">Continente</span>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class CardReproductionUpate extends Vue {
  @Prop({ required: true }) nationalR!: string
  @Prop({ required: true }) continentalR!: string
  @Prop({ required: true }) data!: string
}
</script>

<style lang="scss" scoped>
.nc-card-rupdate {
  min-width: 350px;
  @apply flex flex-col bg-white px-6 py-4 rounded;

  &__title {
    @apply text-lg font-semibold text-gray-700;
  }

  &__subtitle {
    @apply text-sm text-gray-500;
  }

  &__value {
    @apply font-bold text-xl text-gray-700 bg-green-300 p-2 rounded;
  }

  &__label {
    @apply text-gray-500 text-sm mt-1;
  }
}

.nc-card-rupdate-value {
  &__warn {
    @apply bg-yellow-300 p-2 rounded;
  }
}
</style>
