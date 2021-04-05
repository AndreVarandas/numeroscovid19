<template>
  <div class="nc-container">
    <section>
      <h1 class="text-3xl font-bold text-gray-600 mb-2">
        Números covid-19 Portugal
      </h1>
      <p class="text-xl text-gray-400 mb-6">Últimos dados disponíveis</p>
      <div class="flex flex-col sm:flex-row items-center">
        <CardDailyUpdate
          class="sm:w-1/2"
          subtitle="Resumo do relatório"
          :title="data"
          :recuperados="recuperados"
          :novos="confirmados"
          :obitos="obitos"
        />
        <div class="sm:ml-6 w-full mt-12 mb-2 sm:mt-0 h-full">
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
    <section>
      <div v-if="nationalRt" class="flex flex-col sm:flex-row">
        <CardReprodutionUpdate :reproduction="nationalRt" />
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
import CardReprodutionUpdate from '~/components/dashboard/card/CardReprodutionUpdate.vue'
import GridReport from '~/components/dashboard/grid/GridReport.vue'

@Component({
  components: { CardDailyUpdate, CardReprodutionUpdate, GridReport },
})
export default class Home extends Vue {
  last = {} as IData
  update = {} as IDataUpdate
  data = ''
  recuperados = 0
  confirmados = 0
  obitos = 0
  nationalRt = '0'

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

    // Carefull here, the national RT is probably updated only on the next days...
    this.nationalRt = this.last.rtNacional
  }
}
</script>

<style lang="scss" scoped>
.nc-container {
  @apply container mx-auto px-6;
}
</style>
