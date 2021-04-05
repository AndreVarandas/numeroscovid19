<template>
  <article class="nc-card">
    <div class="nc-card__header">
      <h2 class="font-semibold text-gray-600 text-2xl mb-1">{{ title }}</h2>
      <p class="text-gray-400">{{ subtitle }}</p>
    </div>
    <div class="nc-card-info nc-card__info">
      <div class="nc-card-info__values border-red-300">
        <span>{{ obitos }}</span>
        <p class="text-sm text-gray-400 font-normal">Óbitos</p>
      </div>
      <div class="nc-card-info__values border-yellow-300">
        <span>{{ novos }}</span>
        <p class="text-sm text-gray-400 font-normal">Casos Novos</p>
      </div>
      <div class="nc-card-info__values border-green-300">
        <span>{{ recuperados }}</span>
        <p class="text-sm text-gray-400 font-normal">Recuperados</p>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class CardDailyUpdate extends Vue {
  @Prop({ required: true }) title!: string
  @Prop({ required: false, default: '' }) subtitle!: string
  @Prop({ required: true }) recuperados!: number
  @Prop({ required: true }) novos!: number
  @Prop({ required: true }) obitos!: number
}
</script>

<style lang="scss" scoped>
.nc-card {
  min-width: 350px;
  @apply bg-white px-8 py-6 border-b-4 rounded-2xl shadow-lg;

  &__header {
    @apply flex flex-col items-start;
  }
}

.nc-card-info {
  @apply flex justify-around mt-6;

  &__values {
    @apply flex flex-col flex-1 items-center border-t-4 py-2 font-bold text-gray-600 text-xl;
  }

  &__values:not(:first-child) {
    @apply ml-4;
  }
}
</style>
