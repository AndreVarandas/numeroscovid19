<template>
  <article>
    <h1 class="text-lg text-gray-600">Último R conhecido</h1>
    <p class="text-sm text-gray-400">
      Índice de transmissibilidade de {{ data }}
    </p>
    <p class="font-bold text-gray-600">{{ reproduction }}</p>
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
