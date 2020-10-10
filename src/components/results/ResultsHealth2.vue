<template>
  <div class="interview">
    <h1>Wyniki Zdrowie - dolegliwości</h1>
    <h4 style="color:orange">Sprawdź jak wypadasz na tle społeczeństwa</h4>
    <app-prob></app-prob>
    <div class="jumbotron">
      <router-link to="/resultscheck">
        <button class="btn btn-warning">
          Dalej >>>>
        </button>
      </router-link>
    </div>

    <div class="jumbotron">
      <div class="icons">
        <ul class="list-inline brands">
          <li class="list-inline-item"><i class="fas fa-print"></i>Drukuj</li>
          <li class="list-inline-item">
            <i class="far fa-envelope"></i>Wyślij
          </li>
          <li class="list-inline-item">
            <i class="fas fa-external-link-alt"></i>Udostępnij
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Problems from './health/Problems'

export default {
  components: {
    appProb: Problems
  }
}
</script>

<style scoped lang="scss">

@import '../questionStyle.scss';

</style>
