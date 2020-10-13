<template>
  <div class="interview">
    <h1>Wyniki Koszty Leczenia</h1>
    <h4 style="color:orange">Sprawdź jak wypadasz na tle społeczeństwa</h4>
    <div class="jumbotron">
      <div v-if="this.pointsTotal >= 4" class="card">
        <div class="card-body">
          <p>
            Brawo, Twój wynik jest powyżej średniej.<br>
            Twój ogólny stan zdrowia jest dobry.<br>
            Starasz się prowadzić zdrowy styl życia, którego ważnymi składnikami jest odpowiednia dieta, ruch i relaks.<br>
            Pamiętasz również o tym, jak ważne są badania kontrolne, ale nie zawsze możesz je przeprowadzić.<br>
            Dowiedz się, jak mieć łatwy i pewny dostęp do badań.<br>
          </p>
        </div>
      </div>
      <div v-else class="card">
        <div class="card-body">
          <p>
            Niestety, Twój wynik jest poniżej średniej.<br>
            Powinieneś zadbać o polepszenie swojego stanu zdrowia.<br>
            Staraj się prowadzić zdrowy styl życia, którego ważnymi składnikami jest odpowiednia dieta, ruch i relaks.<br>
            Pamiętaj również o tym, jak ważne są badania kontrolne.<br>
            Dowiedz się, jak mieć łatwy i pewny dostęp do badań.<br>
          </p>
        </div>
      </div>
    </div>

    <app-total></app-total>
    <div class="jumbotron buttons">
      <router-link to="/resultsdoctor" tag="a" class="backBtn">
        <button class="btn btn-warning">
          Wstecz
        </button>
      </router-link>
      <router-link to="/finish">
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
import Total from './cost/Total'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      cost: 'cost'
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
    if (this.cost.cost_1 === 'yes1') {
      this.points_1 = 0
    } else if (this.cost.cost_1 === 'no1') {
      this.points_1 = 2
    } else if (this.cost.cost_1 === 'never1') {
      this.points_1 = 2
    }
    if (this.cost.cost_2 === 'yes2') {
      this.points_2 = 0
    } else if (this.cost.cost_2 === 'no2') {
      this.points_2 = 2
    } else if (this.cost.cost_2 === 'never2') {
      this.points_2 = 2
    }
    if (this.cost.cost_3 === 'yes3') {
      this.points_3 = 0
    } else if (this.cost.cost_3 === 'no3') {
      this.points_3 = 2
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
