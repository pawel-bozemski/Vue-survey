<template>
  <div class="interview">
    <h1>Wyniki Używki</h1>
    <h4 style="color:orange">Sprawdź jak wypadasz na tle społeczeństwa</h4>
    <app-age18 v-if="this.interview.age == '18-24'"></app-age18>
    <app-age25 v-else-if="this.interview.age == '25-34'"></app-age25>
    <app-age35 v-else-if="this.interview.age == '35-44'"></app-age35>
    <app-age45 v-else-if="this.interview.age == '45-54'"></app-age45>
    <app-age55 v-else-if="this.interview.age == '55-64'"></app-age55>
    <app-age65 v-else-if="this.interview.age == '65'"></app-age65>
    <div class="jumbotron buttons">
      <router-link to="/resultsdiet" tag="a" class="backBtn">
        <button class="btn btn-warning">
          Wstecz
        </button>
      </router-link>
      <router-link to="/resultspsych">
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
      interview: 'interview'
    })
  },
  components: {
    appAge18: Age18,
    appAge25: Age25,
    appAge35: Age35,
    appAge45: Age45,
    appAge55: Age55,
    appAge65: Age65
  }
}
</script>

<style scoped lang="scss">

@import '../resultsStyle.scss';

</style>
