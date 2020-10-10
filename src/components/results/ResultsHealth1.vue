<template>
  <div class="interview">
    <h1>Wyniki Zdrowie - choroby</h1>
    <h4 style="color:orange">Sprawdź jak wypadasz na tle społeczeństwa</h4>
    <app-sick></app-sick>
    <div class="jumbotron buttons">
      <router-link to="/resultssport" tag="a" class="backBtn">
        <button class="btn btn-warning">
          Wstecz
        </button>
      </router-link>
      <router-link to="/resultshealthprob">
        <button class="btn btn-warning">
          Dalej >>>>
        </button>
      </router-link>
    </div>

    <div class="jumbotron ">
      <div class="icons">
        <ul class="list-inline brands">
          <li class="list-inline-item">
            <img src="../../imgs/icons/print.png" alt="">
          </li>
          <li class="list-inline-item">
            <img src="../../imgs/icons/send.png" alt="">
          </li>
          <li class="list-inline-item">
            <img src="../../imgs/icons/share.png" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Sickness from './health/Sickness'

export default {
  components: {
    appSick: Sickness
  }
}
</script>

<style scoped lang="scss">

@import '../resultsStyle.scss';

</style>
