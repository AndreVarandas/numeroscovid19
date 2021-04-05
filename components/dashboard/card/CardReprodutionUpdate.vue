<template>
  <article>
    <h1>Último R conhecido</h1>
    <p>{{ reproduction }}</p>
  </article>
</template>

<script lang="ts">
import { Prop, Vue } from 'nuxt-property-decorator'

export default class CardReprodutionUpate extends Vue {
  @Prop({ required: true, default: '0' }) reproduction!: string
}
</script>
