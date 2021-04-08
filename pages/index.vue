<template>
  <div class="nc-container">
    <section>
      <h1 class="text-3xl font-bold text-gray-600 mb-2">
        Números covid-19 Portugal
      </h1>
      <h2 class="text-xl text-gray-600 mb-6">Últimos dados disponíveis</h2>
      <div class="flex flex-col md:flex-row items-center">
        <CardDailyUpdate
          class="sm:w-1/2"
          subtitle="Resumo do relatório"
          :title="data"
          :recuperados="recuperados"
          :novos="confirmados"
          :obitos="obitos"
        />
        <div class="w-full h-full mt-12 mb-2 md:ml-12 md:mt-0">
          <GridReport
            :vigilancia="update.vigilancia"
            :activos="update.ativos"
            :internados-uci="update.internadosUci"
            :internados-enfermaria="update.internadosEnfermaria"
            :confirmados-m="update.confirmadosM"
            :confirmados-f="update.confirmadosF"
            :obitos-m="update.obitosM"
            :obitos-f="update.obitosF"
          />
        </div>
      </div>
    </section>

    <section class="flex flex-col mt-6 md:flex-row md:mt-12">
      <CardReproductionUpdate
        class="md:w-1/3"
        :reproduction="nationalRt"
        :data="nationalRtData"
      />

      <div class="mt-12 sm:ml-12 md:mt-0">
        <GridHighlights :highlights="highlights" />
      </div>
    </section>

    <section>
      <div class="flex flex-col mt-12">
        <h2 class="text-xl text-gray-600 mb-2">Todos os dados disponíveis</h2>
        <GridCompleteReport :data="lastUpdateCleanData" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

// Utils
import { $axios } from '@/utils/api'

// Interfaces
import { IData, IDataUpdate } from '@/interfaces/http/common.interface'

// Components
import CardDailyUpdate from '~/components/dashboard/card/CardDailyUpdate.vue'
import CardReproductionUpdate from '~/components/dashboard/card/CardReproductionUpdate.vue'
import GridCompleteReport from '~/components/dashboard/grid/GridCompleteReport.vue'
import GridHighlights from '~/components/dashboard/grid/GridHighlights.vue'
import GridReport from '~/components/dashboard/grid/GridDailyReport.vue'
import { IGridHighlightsProp } from '~/interfaces/components/grid/IGridHighlights.interface'

@Component({
  components: {
    CardDailyUpdate,
    CardReproductionUpdate,
    GridCompleteReport,
    GridHighlights,
    GridReport,
  },
})
export default class Home extends Vue {
  last = {} as IData
  update = {} as IDataUpdate
  highlights = {} as IGridHighlightsProp
  data = ''
  recuperados = 0
  confirmados = 0
  obitos = 0
  nationalRt = '0'
  nationalRtData = ''

  get lastUpdateCleanData() {
    const lastUpdateCopy: any = this.last
    for (const prop in lastUpdateCopy) {
      if (
        lastUpdateCopy[prop] === '' ||
        lastUpdateCopy[prop] === null ||
        lastUpdateCopy[prop] === null
      ) {
        delete lastUpdateCopy[prop]
      }
    }
    return this.last
  }

  /**
   * Special hook for SSR that is called during server-side rendering
   * after the component instance is created, and on the client when navigating
   */
  async fetch() {
    this.last = await $axios.get('api/v1/data/last')
    this.update = await $axios.get('api/v1/data/update')
    this.data = this.update.data
    this.recuperados = this.update.recuperados
    this.confirmados = this.update.confirmados
    this.obitos = this.update.obitos

    this.highlights = this.getHighlightsFromUpdate(this.last)

    // Carefull here, the national RT is probably updated only on the next days...
    if (this.last.rtNacional === '') {
      await this.fetchLatestRtData(5)
    } else {
      this.nationalRt = this.last.rtNacional
      this.nationalRtData = this.last.data
    }
  }

  getHighlightsFromUpdate(last: IData): IGridHighlightsProp {
    return {
      internados: last.internados,
      internadosUci: last.internadosUci,
      ativos: last.ativos,
      recuperados: last.recuperados,
      obitos: last.obitos,
      confirmados: last.confirmados,
    }
  }

  async fetchLatestRtData(retries: number) {
    for (let i = 1; i < retries + 1; i++) {
      const data: IData[] = await $axios.get(`api/v1/data/last/${i}`)
      if (data[0].rtNacional) {
        this.nationalRt = data[0].rtNacional
        this.nationalRtData = data[0].data
        break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.nc-container {
  @apply container mx-auto px-6;
}
</style>
