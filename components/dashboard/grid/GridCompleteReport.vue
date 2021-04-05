<template>
  <table class="table-auto">
    <tbody>
      <tr v-for="(key, index) of keys" :key="key">
        <td class="text-gray-400">{{ convertKey(index) }}</td>
        <td class="text-gray-600">{{ data[key] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

// Interfaces
import { IData } from '@/interfaces/http/common.interface'

@Component
export default class GridCompleteReport extends Vue {
  @Prop({ required: true }) data!: IData

  get keys() {
    return Object.keys(this.data)
  }

  get convertedKeys() {
    const keys = Object.keys(this.data)
    const results: string[] = []
    keys.forEach((key) => {
      const result = key.replace(/([A-Z])/g, ' $1')
      results.push(result.charAt(0).toUpperCase() + result.slice(1))
    })

    return results
  }

  convertKey(index: number) {
    return this.convertedKeys[index]
  }
}
</script>
