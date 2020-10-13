<template>
  <div class="interview">
    <h1>Wyniki Zdrowie</h1>
    <h4 style="color:orange">Sprawdź, jak wypadasz na tle podobnych do Ciebie osób</h4>
    <div class="jumbotron">
      <div v-if="this.pointsTotal >= 4" class="card">
        <div class="card-body">
          <p>
          Brawo, Twój wynik jest powyżej średniej.<br>
          Twój ogólny stan zdrowia jest dobry.<br>
          Starasz się właściwie odżywiać, nie przesadzasz z używkami i regularnie się badasz.<br>
          Jednak zbyt mało uwagi zwracasz na higienę psychiczną.<br>
          Powinieneś znaleźć więcej czasu na odpoczynek czy relaks, i to  koniecznie każdego dnia.<br>
          </p>
        </div>
      </div>
      <div v-else class="card">
        <div class="card-body">
          <p>
          Niestety, Twój wynik jest poniżej średniej.<br>
          Powinieneś zadbać o polepszenie swojego stanu zdrowia.<br>
          Staraj się dobrze odżywiać, nie przesadzaj z używkami i regularnie rób badania kontrolne.<br>
          Ale przede wszystkim więcej wypoczywaj – znajdź czas na spotkania z przyjaciółmi i dłuższy sen.<br>
          Koniecznie każdego dnia.<br>
          </p>
        </div>
      </div>
    </div>

    <app-total></app-total>
    <div class="jumbotron buttons">
      <router-link to="/resultsdrugs" tag="a" class="backBtn">
        <button class="btn btn-warning">
          Wstecz
        </button>
      </router-link>
      <router-link to="/resultssport">
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
import Total from './psych/Total'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      psych: 'psych'
    })
  },
  data () {
    return {
      points_1: 0,
      points_2: 0,
      points_3: 0,
      pointsTotal: 0
    }
  },
  mounted: function () {
    if (this.psych.psych_1 === 'daily1') {
      this.points_1 = 0
    } else if (this.psych.psych_1 === 'weekly1') {
      this.points_1 = 0
    } else if (this.psych.psych_1 === 'monthly1') {
      this.points_1 = 1
    } else if (this.psych.psych_1 === 'yearly1') {
      this.points_1 = 2
    } else if (this.psych.psych_1 === 'none1') {
      this.points_1 = 2
    }
    if (this.psych.psych_2 === 'daily2') {
      this.points_2 = 2
    } else if (this.psych.psych_2 === 'weekly2') {
      this.points_2 = 2
    } else if (this.psych.psych_2 === 'monthly2') {
      this.points_2 = 1
    } else if (this.psych.psych_2 === 'yearly2') {
      this.points_2 = 0
    } else if (this.psych.psych_2 === 'none2') {
      this.points_2 = 0
    }

    if (this.psych.psych_3 === 'low') {
      this.points_3 = 0
    } else if (this.psych.psych_3 === 'optimal') {
      this.points_3 = 2
    } else if (this.psych.psych_3 === 'high') {
      this.points_3 = 1
    }
    this.pointsTotal = this.points_1 + this.points_2 + this.points_3
  },
  components: {
    appTotal: Total
  }
}
</script>

<style scoped lang="scss">

@import '../resultsStyle.scss';

</style>
