<template>
  <div class="interview">
    <h1>Wyniki Zdrowie - choroby</h1>
    <h4 style="color:orange">Sprawdź, jak wypadasz na tle podobnych do Ciebie osób</h4>
    <div class="jumbotron">
      <div v-if="this.pointsTotal >= 4" class="card">
        <div class="card-body">
          <p>
          Brawo, Twój wynik jest powyżej średniej. Twój ogólny stan zdrowia jest dobry.<br>
          Zwracasz uwagę na dietę, jesteś świadomy tego, jak ważny jest ruch i odpowiedni relaks psychiczny.<br>
          Powinieneś jednak zmienić styl życia tak, aby wyeliminować z niego lub chociaż złagodzić trapiące Cię dolegliwości. <br>
          </p>
        </div>
      </div>
      <div v-else class="card">
        <div class="card-body">
          <p>
          Niestety, Twój wynik jest poniżej średniej.<br>
          Powinieneś zadbać o polepszenie swojego stanu zdrowia.<br>
          Zwróć uwagę na dietę, więcej się ruszaj oraz postaraj się o właściwą dawkę relaksu psychicznego.<br>
          Ale przede wszystkim zmień swój styl życia tak, aby złagodzić lub wyeliminować z niego trapiące Cię dolegliwości.<br>            </p>
        </div>
      </div>
    </div>
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
import { mapGetters } from 'vuex'

export default {
  components: {
    appSick: Sickness
  },
  computed: {
    ...mapGetters({
      health: 'health'
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
    if (this.health.health_1 === 'yes') {
      this.points_1 = 0
    } else if (this.health.health_1 === 'no') {
      this.points_1 = 2
    }
    if (this.health.health_2 === []) {
      this.points_2 = 0
    } else if (this.health.health_2 !== []) {
      this.points_2 = 2
    }
    if (this.health.health_3 === []) {
      this.points_3 = 0
    } else if (this.health.health_3 !== []) {
      this.points_3 = 2
    }
    this.pointsTotal = this.points_1 + this.points_2 + this.points_3
  }
}
</script>

<style scoped lang="scss">

@import '../resultsStyle.scss';

</style>
