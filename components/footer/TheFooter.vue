<template>
  <footer class="nc-footer">
    <h4 class="nc-footer__header">Números Covid-19</h4>
    <p class="nc-footer__line">
      Feito com &#x2764;&nbsp; por
      <a class="nc-link" target="blank" href="https://github.com/andrevarandas"
        >André Varandas</a
      >
    </p>
    <p class="nc-footer__line">
      Código fonte aberto e disponível em
      <a
        class="nc-link"
        target="blank"
        href="https://github.com/AndreVarandas/numeroscovid19"
        >Github.com</a
      >.
    </p>
    <p class="nc-footer__line">
      Dados fornecidos por
      <a
        class="nc-link"
        target="blank"
        href="https://github.com/dssg-pt/covid19pt-data"
        >DSSG-PT Covid19pt-data Github</a
      >
    </p>
  </footer>
</template>

<style lang="scss">
.nc-footer {
  @apply px-6 py-4 leading-loose;

  &__header {
    @apply text-gray-600;
  }

  &__line {
    @apply text-sm text-gray-400 leading-loose;
  }
}
</style>
