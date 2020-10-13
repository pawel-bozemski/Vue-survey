<template>
  <div class="interview">
    <h1>Wyniki Sport</h1>
    <h4 style="color:orange">Sprawdź, jak wypadasz na tle podobnych do Ciebie osób</h4>
    <div class="jumbotron">
      <div v-if="this.pointsTotal >= 4" class="card">
        <div class="card-body">
          <p>
          Brawo, Twój wynik jest powyżej średniej.<br>
          Twój ogólny stan zdrowia jest dobry.<br>
          Wiele uwagi poświęcasz właściwej diecie, dbasz o regularny wypoczynek, nie zapominasz o badaniach lekarskich.<br>
          Warto jednak, abyś bardziej docenił ruch.<br>
          Wystarczy pół godziny dziennie szybkiego marszu, aby Twoje ciało nabrało sprawności.<br>
          </p>
        </div>
      </div>
      <div v-else class="card">
        <div class="card-body">
          <p>
          Niestety, Twój wynik jest poniżej średniej.<br>
          Powinieneś zadbać o polepszenie swojego stanu zdrowia.<br>
          Poświęć więcej uwagi na dobór właściwych składników w diecie, zadbaj o regularny wypoczynek i nie zapominaj o badaniach lekarskich.<br>
          Ale przede wszystkim warto, abyś docenił ruch.<br>
          Wystarczy pół godziny dziennie szybkiego marszu, aby Twoje ciało nabrało sprawności.<br>
          </p>
        </div>
      </div>
    </div>

    <app-total></app-total>
    <div class="jumbotron buttons">
      <router-link to="/resultspsych" tag="a" class="backBtn">
        <button class="btn btn-warning">
          Wstecz
        </button>
      </router-link>
      <router-link to="/resultshealthsick">
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
import Total from './sport/Total'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      sport: 'sport'
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
    if (this.sport.sport_1 === 'none1') {
      this.points_1 = 0
    } else if (this.sport.sport_1 === '30min') {
      this.points_1 = 1
    } else if (this.sport.sport_1 === '1hour') {
      this.points_1 = 2
    } else if (this.sport.sport_1 === 'coupleHours') {
      this.points_1 = 2
    }
    if (this.sport.sport_2 === 'none2') {
      this.points_2 = 0
    } else if (this.sport.sport_2 === '4monthly') {
      this.points_2 = 0
    } else if (this.sport.sport_2 === '1weekly') {
      this.points_2 = 1
    } else if (this.sport.sport_2 === '2weekly') {
      this.points_2 = 2
    }

    if (this.sport.sport_3 === 'good') {
      this.points_3 = 2
    } else if (this.sport.sport_3 === 'average') {
      this.points_3 = 1
    } else if (this.sport.sport_3 === 'bad') {
      this.points_3 = 0
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
