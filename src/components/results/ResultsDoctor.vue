<template>
  <div class="interview">
    <h1>Wyniki Dostęp do Opieki Medycznej</h1>
    <h4 style="color:orange">Sprawdź jak wypadasz na tle społeczeństwa</h4>
    <app-cottage v-if="this.interview.location == 'cottage'"></app-cottage>
    <app-city19k v-else-if="this.interview.location == 'city19k'"></app-city19k>
    <app-city20k v-else-if="this.interview.location == 'city20k'"></app-city20k>
    <app-city50k v-else-if="this.interview.location == 'city50k'"></app-city50k>
    <app-city100k v-else-if="this.interview.location == 'city100k'"></app-city100k>
    <app-city200k v-else-if="this.interview.location == 'city200k'"></app-city200k>
    <app-city500k v-else-if="this.interview.location == 'city500k'"></app-city500k>

    <div class="jumbotron">
      <router-link to="/resultscheck" tag="a" class="backBtn">
        <button class="btn btn-warning">
          Wstecz
        </button>
      </router-link>
      <router-link to="/resultscost">
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
import Cottage from './doctor/Cottage'
import City19k from './doctor/City19k'
import City20k from './doctor/City20k'
import City50k from './doctor/City50k'
import City100k from './doctor/City100k'
import City200k from './doctor/City200k'
import City500k from './doctor/City500k'

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      interview: 'interview'
    })
  },
  components: {
    appCottage: Cottage,
    appCity19k: City19k,
    appCity20k: City20k,
    appCity50k: City50k,
    appCity100k: City100k,
    appCity200k: City200k,
    appCity500k: City500k

  }
}
</script>

<style scoped lang="scss">

@import '../questionStyle.scss';

</style>
