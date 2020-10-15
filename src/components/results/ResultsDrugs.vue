<template>
  <div class="interview">
    Etap 9/15
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        style="width: 63%"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>

    <h1>Wyniki Używki</h1>
    <h4 class="subtitle">Sprawdź, jak wypadasz na tle podobnych do Ciebie osób</h4>
    <div class="jumbotron">
      <div v-if="this.pointsTotal >= 4" class="card">
        <div class="card-body">
          <p>
            Brawo, Twój wynik jest powyżej średniej.<br>
             Twoja kondycja psychiczna i fizyczna jest dobra.<br>
             Starasz się odżywiać prawidłowo i nie bagatelizujesz żadnych dolegliwości.<br>
             Masz jednak swoje słabości.<br>
             Gdyby udało Ci się zrezygnować lub chociaż ograniczyć niepotrzebne używki Twój stan zdrowia byłby idealny. <br>
          </p>
        </div>
      </div>
      <div v-else class="card">
        <div class="card-body">
          <p>
            Niestety, Twój wynik jest poniżej średniej.<br>
             Twoja kondycja psychiczna i fizyczna jest nienajlepsza.<br>
             Pamiętaj więc o zbilansowanej diecie, nie bagatelizuj żadnych dolegliwości.<br>
             Ale przede wszystkim zrezygnuj lub ogranicz niepotrzebne używki.<br>
             Ci na pewno wyjdzie na plus i znacznie poprawi stan zdrowia.<br>
            </p>
        </div>
      </div>
    </div>

    <app-age18 v-if="this.interview.age == '18-24'"></app-age18>
    <app-age25 v-else-if="this.interview.age == '25-34'"></app-age25>
    <app-age35 v-else-if="this.interview.age == '35-44'"></app-age35>
    <app-age45 v-else-if="this.interview.age == '45-54'"></app-age45>
    <app-age55 v-else-if="this.interview.age == '55-64'"></app-age55>
    <app-age65 v-else-if="this.interview.age == '65'"></app-age65>
        <div class="jumbotron">
      <p>
        Pamiętaj, że wyniki mają wyłącznie charakter poglądowy. Jeśli masz pytania lub wątpliwości dotyczące Twojego zdrowia, zgłoś się do swojego lekarza rodzinnego.
      </p>
    </div>

    <div class="jumbotron buttons">
      <router-link to="/resultsdiet" tag="a" class="backBtn">
        <button class="btn ">
          Wstecz
        </button>
      </router-link>
      <router-link to="/resultspsych">
        <button class="btn ">
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
import Age18 from './drugs/Age18'
import Age25 from './drugs/Age25'
import Age35 from './drugs/Age35'
import Age45 from './drugs/Age45'
import Age55 from './drugs/Age55'
import Age65 from './drugs/Age65'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      interview: 'interview',
      drugs: 'drugs'
    })
  },
  components: {
    appAge18: Age18,
    appAge25: Age25,
    appAge35: Age35,
    appAge45: Age45,
    appAge55: Age55,
    appAge65: Age65
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
    if (this.drugs.drugs_1 === 'everyday1') {
      this.points_1 = 0
    } else if (this.drugs.drugs_1 === 'weekly1') {
      this.points_1 = 0
    } else if (this.drugs.drugs_1 === 'monthly1') {
      this.points_1 = 1
    } else if (this.drugs.drugs_1 === 'yearly1') {
      this.points_1 = 2
    } else if (this.drugs.drugs_1 === 'never1') {
      this.points_1 = 2
    }
    if (this.drugs.drugs_2 === 'everyday2') {
      this.points_2 = 0
    } else if (this.drugs.drugs_2 === 'sometimes2') {
      this.points_2 = 0
    } else if (this.drugs.drugs_2 === 'past2') {
      this.points_2 = 1
    } else if (this.drugs.drugs_2 === 'never2') {
      this.points_2 = 2
    }

    if (this.drugs.drugs_3 === 'everyday3') {
      this.points_3 = 0
    } else if (this.drugs.drugs_3 === 'sometimes3') {
      this.points_3 = 0
    } else if (this.drugs.drugs_3 === 'past3') {
      this.points_3 = 1
    } else if (this.drugs.drugs_3 === 'never3') {
      this.points_3 = 2
    }
    this.pointsTotal = this.points_1 + this.points_2 + this.points_3
  }

}
</script>

<style scoped lang="scss">

@import '../resultsStyle.scss';

</style>
