<template>
  <table class="table-auto bg-white">
    <tbody class="border border-gray-400">
      <tr
        v-for="(key, index) of keys"
        :key="key"
        :class="{ 'bg-gray-200': index % 2 === 1 }"
      >
        <td class="px-4 py-2 text-gray-500">{{ convertKey(index) }}</td>
        <td class="px-4 py-2 text-gray-600">{{ data[key] }}</td>
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

  /**
   * We try to use object keys to generate the table, so that
   * we don't have to type all manually.
   * The drawback is that we have to manipulate these keys, changing them
   * from camelCase to Sentence Case.
   */
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
