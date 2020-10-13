<template>
  <div class="interview">
    <h1>Wyniki Badanie</h1>
    <h4 style="color:orange">Sprawdź, jak wypadasz na tle podobnych do Ciebie osób</h4>
    <div class="jumbotron">
      <div v-if="this.pointsTotal >= 5" class="card">
        <div class="card-body">
          <p>
            Brawo, Twój wynik jest powyżej średniej. Twój ogólny stan zdrowia jest dobry.<br>
            Stosujesz zbilansowaną dietę, nie przesadzasz z używkami, wiesz jak ważny jest ruch i odpoczynek.<br>
            Zapominasz jednak, jak ważna jest profilaktyka medyczna.<br>
            Sprawdź, jakie badania są zalecane dla Twojego wieku i rób je regularnie.<br>
          </p>
        </div>
      </div>
      <div v-else class="card">
        <div class="card-body">
          <p>
            Niestety, Twój wynik jest poniżej średniej.<br>
            Powinieneś zadbać o polepszenie swojego stanu zdrowia.<br>
            Stosuj  zbilansowaną dietę, nie przesadzaj z używkami, znajdź czas na ruch i relaks.<br>
            Ale przede wszystkim nie zapominaj o profilaktyce medycznej.<br>
            Sprawdź, jakie badania są zalecane dla Twojego wieku i rób je regularnie.<br>
         </p>
        </div>
      </div>
    </div>

    <app-age18m v-if="this.interview.age == '18-24' && this.interview.gender == 'male'"></app-age18m>
    <app-age25m v-else-if="this.interview.age == '25-34' && this.interview.gender == 'male'"></app-age25m>
    <app-age35m v-else-if="this.interview.age == '35-44' && this.interview.gender == 'male'"></app-age35m>
    <app-age45m v-else-if="this.interview.age == '45-54' && this.interview.gender == 'male'"></app-age45m>
    <app-age55m v-else-if="this.interview.age == '55-64' && this.interview.gender == 'male'"></app-age55m>
    <app-age65m v-else-if="this.interview.age == '65' && this.interview.gender == 'male'"></app-age65m>

    <app-age18w v-if="this.interview.age == '18-24' && this.interview.gender == 'female'"></app-age18w>
    <app-age25w v-else-if="this.interview.age == '25-34' && this.interview.gender == 'female'"></app-age25w>
    <app-age35w v-else-if="this.interview.age == '35-44' && this.interview.gender == 'female'"></app-age35w>
    <app-age45w v-else-if="this.interview.age == '45-54' && this.interview.gender == 'female'"></app-age45w>
    <app-age55w v-else-if="this.interview.age == '55-64' && this.interview.gender == 'female'"></app-age55w>
    <app-age65w v-else-if="this.interview.age == '65' && this.interview.gender == 'female'"></app-age65w>

    <div class="jumbotron buttons">
      <router-link to="/resultshealthprob" tag="a" class="backBtn">
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
import Age18m from './prevention/Age18m'
import Age25m from './prevention/Age25m'
import Age35m from './prevention/Age35m'
import Age45m from './prevention/Age45m'
import Age55m from './prevention/Age55m'
import Age65m from './prevention/Age65m'
import Age18w from './prevention/Age18w'
import Age25w from './prevention/Age25w'
import Age35w from './prevention/Age35w'
import Age45w from './prevention/Age45w'
import Age55w from './prevention/Age55w'
import Age65w from './prevention/Age65w'

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      interview: 'interview',
      prevention: 'prevention'
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
    if (this.prevention.prevention_1 === 'yes1') {
      this.points_1 = 2
    } else if (this.prevention.prevention_1 === 'no1') {
      this.points_1 = 0
    }
    if (this.prevention.prevention_2 === 'yes2') {
      this.points_2 = 2
    } else if (this.prevention.prevention_2 === 'no2') {
      this.points_2 = 0
    }
    if (this.prevention.prevention_3 === 'yes3') {
      this.points_3 = 2
    } else if (this.prevention.prevention_3 === 'no3') {
      this.points_3 = 0
    }
    if (this.prevention.prevention_4 === 'weekly') {
      this.points_4 = 2
    } else if (this.prevention.prevention_4 === 'monthly') {
      this.points_4 = 2
    } else if (this.prevention.prevention_4 === 'yearly') {
      this.points_4 = 1
    } else if (this.prevention.prevention_4 === 'almostNever') {
      this.points_4 = 0
    } else if (this.prevention.prevention_4 === 'never') {
      this.points_4 = 0
    }

    this.pointsTotal = this.points_1 + this.points_2 + this.points_3 + this.points_4
  },
  components: {
    appAge18m: Age18m,
    appAge25m: Age25m,
    appAge35m: Age35m,
    appAge45m: Age45m,
    appAge55m: Age55m,
    appAge65m: Age65m,
    appAge18w: Age18w,
    appAge25w: Age25w,
    appAge35w: Age35w,
    appAge45w: Age45w,
    appAge55w: Age55w,
    appAge65w: Age65w
  }
}
</script>

<style scoped lang="scss">

@import '../resultsStyle.scss';

</style>
