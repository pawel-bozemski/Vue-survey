<template>
  <div class="interview">
    <h1>Wyniki Dostęp do Opieki Medycznej</h1>
    <h4 style="color:orange">Sprawdź jak wypadasz na tle społeczeństwa</h4>
    <div class="jumbotron">
      <div v-if="this.pointsTotal >= 4" class="card">
        <div class="card-body">
          <p>
          Brawo, Twój wynik jest powyżej średniej.<br>
          Twój ogólny stan zdrowia jest dobry.<br>
          Starasz się dbać o  właściwą dietę, bogatą w warzywa i owoce, zażywasz ruchu i unikasz stresu.<br>
          Nie pamiętasz jednak o badaniach lekarskich.<br>
          Spróbuj to zmienić.<br>
          Warto sprawdzić swój stan zdrowia, nawet, jak nic Ci nie dolega.<br>
          </p>
        </div>
      </div>
      <div v-else class="card">
        <div class="card-body">
          <p>
          Niestety, Twój wynik jest poniżej średniej.<br>
          Powinieneś zadbać o polepszenie swojego stanu zdrowia.<br>
          Staraj się zmienić dietę na zdrowszą, zażywać więcej ruchu i unikać stresu.<br>
          Ale przede wszystkim pamiętaj o badaniach profilaktycznych.<br>
          Odwiedzaj lekarza, nawet, jak nic Ci nie dolega, aby skontrolował Twój stan zdrowia.<br>
          </p>
        </div>
      </div>
    </div>

    <app-cottage v-if="this.interview.location == 'cottage'"></app-cottage>
    <app-city19k v-else-if="this.interview.location == 'city19k'"></app-city19k>
    <app-city20k v-else-if="this.interview.location == 'city20k'"></app-city20k>
    <app-city50k v-else-if="this.interview.location == 'city50k'"></app-city50k>
    <app-city100k v-else-if="this.interview.location == 'city100k'"></app-city100k>
    <app-city200k v-else-if="this.interview.location == 'city200k'"></app-city200k>
    <app-city500k v-else-if="this.interview.location == 'city500k'"></app-city500k>

    <div class="jumbotron buttons">
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
      interview: 'interview',
      doctor: 'doctor'
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
    if (this.doctor.doctor_1 === 'halfYear1') {
      this.points_1 = 2
    } else if (this.doctor.doctor_1 === 'year1') {
      this.points_1 = 2
    } else if (this.doctor.doctor_1 === 'moreYear1') {
      this.points_1 = 1
    } else if (this.doctor.doctor_1 === 'never1') {
      this.points_1 = 0
    }
    if (this.doctor.doctor_2 === 'halfYear2') {
      this.points_2 = 2
    } else if (this.doctor.doctor_2 === 'year2') {
      this.points_2 = 2
    } else if (this.doctor.doctor_2 === 'moreYear2') {
      this.points_2 = 1
    } else if (this.doctor.doctor_2 === 'never2') {
      this.points_2 = 0
    }
    if (this.doctor.doctor_3 === 'halfYear3') {
      this.points_3 = 2
    } else if (this.doctor.doctor_3 === 'year3') {
      this.points_3 = 2
    } else if (this.doctor.doctor_3 === 'moreYear3') {
      this.points_3 = 1
    } else if (this.doctor.doctor_3 === 'never3') {
      this.points_3 = 0
    }
    this.pointsTotal = this.points_1 + this.points_2 + this.points_3
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

@import '../resultsStyle.scss';

</style>
