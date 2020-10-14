<template>
  <div class="interview">
    Etap 8/15
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        style="width: 56%"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <h1>Wyniki Dieta</h1>
    <h4 class="subtitle">Sprawdź, jak wypadasz na tle podobnych do Ciebie osób</h4>
    <div class="jumbotron">
      <div v-if="this.pointsTotal >= 5" class="card">
        <div class="card-body">
          <p>
          Brawo, Twój wynik jest powyżej średniej. Twoja kondycja psychiczna i fizyczna jest dobra.<br>
          Starasz się pamiętać o badaniach i nie lekceważysz nawet drobnych dolegliwości.<br>
          Byłoby idealnie, gdybyś jeszcze zwrócił uwagę na swoją dietę.<br>
          Jedz przynajmniej od czasu do czasu więcej warzyw, a do popicia wybieraj wodę.<br>
          </p>
        </div>
      </div>
      <div v-else class="card">
        <div class="card-body">
          <p>
            Niestety, Twój wynik jest poniżej średniej.<br>
            Powinieneś postarać się lepiej dbać o swoją kondycję fizyczną i psychiczną.<br>
            Pamiętaj o badaniach i nie lekceważ nawet drobnych dolegliwości.<br>
            Ale szczególną uwagę zwróć na swoją dietę. <br>
            Jedz więcej warzyw i owoców, a do popicia wybieraj wodę.<br>
          </p>
        </div>
      </div>
    </div>
    <app-total></app-total>
    <div class="jumbotron buttons">
      <router-link to="/prevention" tag="a" class="backBtn">
        <button class="btn btn-warning">
          Wstecz
        </button>
      </router-link>
      <router-link to="/resultsdrugs">
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
import Total from './diet/Total'
import { mapGetters } from 'vuex'

export default {
  components: {
    appTotal: Total
  },
  computed: {
    ...mapGetters({
      diet: 'diet'
    })
  },
  data () {
    return {
      points_1: 0,
      points_2: 0,
      points_3: 0,
      points_4: 0,
      pointsTotal: 0
    }
  },
  mounted: function () {
    if (this.diet.diet_1 === 'zdrowe') {
      this.points_1 = 2
    } else if (this.diet.diet_1 === 'bezmiesne') {
      this.points_1 = 2
    } else if (this.diet.diet_1 === 'miesne') {
      this.points_1 = 0
    } else if (this.diet.diet_1 === 'lowCarb') {
      this.points_1 = 1
    } else if (this.diet.diet_1 === 'lowSalt') {
      this.points_1 = 2
    }
    if (this.diet.diet_2 === 'everyday2') {
      this.points_2 = 0
    } else if (this.diet.diet_2 === 'weekly2') {
      this.points_2 = 0
    } else if (this.diet.diet_2 === 'monthly2') {
      this.points_2 = 1
    } else if (this.diet.diet_2 === 'yearly2') {
      this.points_2 = 2
    } else if (this.diet.diet_2 === 'never2') {
      this.points_2 = 2
    }
    if (this.diet.diet_3 === 'everyday3') {
      this.points_3 = 0
    } else if (this.diet.diet_3 === 'weekly3') {
      this.points_3 = 0
    } else if (this.diet.diet_3 === 'monthly3') {
      this.points_3 = 1
    } else if (this.diet.diet_3 === 'yearly3') {
      this.points_3 = 2
    } else if (this.diet.diet_3 === 'never3') {
      this.points_3 = 2
    }
    if (this.diet.diet_4 < 19) {
      this.points_4 = 0
    } else if (this.diet.diet_4 >= 19 && this.diet.diet_4 < 25) {
      this.points_4 = 2
    } else if (this.diet.diet_4 >= 25 && this.diet.diet_4 < 30) {
      this.points_4 = 1
    } else if (this.diet.diet_4 >= 30) {
      this.points_4 = 2
    }

    this.pointsTotal = this.points_1 + this.points_2 + this.points_3 + this.points_4
  }
}
</script>

<style scoped lang="scss">

@import '../resultsStyle.scss';

</style>
