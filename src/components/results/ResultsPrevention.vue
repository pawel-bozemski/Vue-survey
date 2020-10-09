<template>
  <div class="interview">
    <h1>Wyniki Badanie</h1>
    <h4 style="color:orange">Sprawdź jak wypadasz na tle społeczeństwa</h4>
    <app-age18m v-if="this.interview.age == '18-24' && this.interview.gender == 'male'"></app-age18m>
    <app-age25m v-else-if="this.interview.age == '25-34' && this.interview.gender == 'male'"></app-age25m>
    <app-age35m v-else-if="this.interview.age == '35-44' && this.interview.gender == 'male'"></app-age35m>
    <app-age45m v-else-if="this.interview.age == '45-54' && this.interview.gender == 'male'"></app-age45m>
    <app-age55m v-else-if="this.interview.age == '55-64' && this.interview.gender == 'male'"></app-age55m>
    <app-age65m v-else-if="this.interview.age == '65' && this.interview.gender == 'male'"></app-age65m>

    <!-- <app-age18w v-if="this.interview.age == '18-24' && this.interview.gender == 'female'"></app-age18w>
    <app-age25w v-else-if="this.interview.age == '25-34' && this.interview.gender == 'female'"></app-age25w>
    <app-age35w v-else-if="this.interview.age == '35-44' && this.interview.gender == 'female'"></app-age35w>
    <app-age45w v-else-if="this.interview.age == '45-54' && this.interview.gender == 'female'"></app-age45w>
    <app-age55w v-else-if="this.interview.age == '55-64' && this.interview.gender == 'female'"></app-age55w>
    <app-age65w v-else-if="this.interview.age == '65' && this.interview.gender == 'female'"></app-age65w> -->

    <div class="jumbotron">
      <router-link to="/resultspsych">
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
import Age18m from './prevention/Age18m'
import Age25m from './prevention/Age25m'
import Age35m from './prevention/Age35m'
import Age45m from './prevention/Age45m'
import Age55m from './prevention/Age55m'
import Age65m from './prevention/Age65m'
// import Age18w from './prevention/Age18w'
// import Age25w from './prevention/Age25w'
// import Age35w from './prevention/Age35w'
// import Age45w from './prevention/Age45w'
// import Age55w from './prevention/Age55w'
// import Age65w from './prevention/Age65w'

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      interview: 'interview'
    })
  },
  components: {
    appAge18m: Age18m,
    appAge25m: Age25m,
    appAge35m: Age35m,
    appAge45m: Age45m,
    appAge55m: Age55m,
    appAge65m: Age65m
    // appAge18w: Age18w,
    // appAge25w: Age25w,
    // appAge35w: Age35w,
    // appAge45w: Age45w,
    // appAge55w: Age55w,
    // appAge65w: Age65w
  }
}
</script>

<style scoped lang="scss">

@import '../questionStyle.scss';

</style>
