<template>
  <div class="interview">
    <div class="jumbotron">
      <h4>Czy w ciągu ostatniego roku wykonywałeś morfologię?</h4>
      <div class="questions">

          <div class="bar upper">
          <div class="result one" :class="{'active cont' : this.prevention.prevention_1 == 'yes1'}" style="width:70%">
            <p :class="{'visible' : this.prevention.prevention_1 == 'yes1', 'not__visible' : this.prevention.prevention_1 !== 'yes1'}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.prevention.prevention_1 == 'no1'}" style="width:30%">
            <p :class="{'visible' : this.prevention.prevention_1 == 'no1', 'not__visible' : this.prevention.prevention_1 !== 'no1'}">Twój wynik</p>
          </div>

        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.prevention.prevention_1 == 'yes1', 'one__bg' : this.prevention.prevention_1 !== 'yes1'}" style="width:70%">71%</div>
          <div class="result" :class="{'active' : this.prevention.prevention_1 == 'no1', 'two__bg' : this.prevention.prevention_1 !== 'no1'}" style="width:30%">29%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.prevention.prevention_1 == 'yes1', 'one__bg' : this.prevention.prevention_1 !== 'yes1'}"></span>Tak
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.prevention.prevention_1 == 'no1', 'two__bg' : this.prevention.prevention_1 !== 'no1'}"></span>Nie</div>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>Czy w ciągu ostatniego roku mierzyłeś sobie ciśnienia krwi?</h4>
      <div class="questions">

          <div class="bar upper">
          <div class="result one" :class="{'active cont' : this.prevention.prevention_2 == 'yes2'}" style="width:80%">
            <p :class="{'visible' : this.prevention.prevention_2 == 'yes2', 'not__visible' : this.prevention.prevention_2 !== 'yes2'}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.prevention.prevention_2 == 'no2'}" style="width:20%">
            <p :class="{'visible' : this.prevention.prevention_2 == 'no2', 'not__visible' : this.prevention.prevention_2 !== 'no2'}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.prevention.prevention_2 == 'yes2', 'one__bg' : this.prevention.prevention_2 !== 'yes2'}" style="width:80%">91%</div>
          <div class="result" :class="{'active' : this.prevention.prevention_2 == 'no2', 'two__bg' : this.prevention.prevention_2 !== 'no2'}" style="width:20%">9%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.prevention.prevention_2 == 'yes2', 'one__bg' : this.prevention.prevention_2 !== 'yes2'}"></span>Tak
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.prevention.prevention_2 == 'no2', 'two__bg' : this.prevention.prevention_2 !== 'no2'}"></span>Nie</div>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>Czy w ciągu ostatniego roku mierzyłeś sobie poziom cukru we krwi?</h4>
      <div class="questions">

          <div class="bar upper">
          <div class="result one" :class="{'active cont' : this.prevention.prevention_3 == 'yes3'}" style="width:70%">
            <p :class="{'visible' : this.prevention.prevention_3 == 'yes3', 'not__visible' : this.prevention.prevention_3 !== 'yes3'}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.prevention.prevention_3 == 'no3'}" style="width:30%">
            <p :class="{'visible' : this.prevention.prevention_3 == 'no3', 'not__visible' : this.prevention.prevention_3 !== 'no3'}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.prevention.prevention_3 == 'yes3', 'one__bg' : this.prevention.prevention_3 !== 'yes3'}" style="width:70%">72%</div>
          <div class="result" :class="{'active' : this.prevention.prevention_3 == 'no3', 'two__bg' : this.prevention.prevention_3 !== 'no3'}" style="width:30%">28%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.prevention.prevention_3 == 'yes3', 'one__bg' : this.prevention.prevention_3 !== 'yes3'}"></span>Tak
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.prevention.prevention_3 == 'no3', 'two__bg' : this.prevention.prevention_3 !== 'no3'}"></span>Nie</div>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>Jak często wykonujesz profilaktyczne samobadanie jąder ?</h4>
      <div class="questions">

          <div class="bar upper">
          <div class="result one" :class="{'active cont' : this.prevention.prevention_4 == 'weekly'}" style="width:25%">
            <p :class="{'visible' : this.prevention.prevention_4 == 'weekly', 'not__visible' : this.prevention.prevention_4 !== 'weekly'}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.prevention.prevention_4 == 'monthly'}" style="width:20%">
            <p :class="{'visible' : this.prevention.prevention_4 == 'monthly', 'not__visible' : this.prevention.prevention_4 !== 'monthly'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active' : this.prevention.prevention_4 == 'yearly'}" style="width:10%">
            <p :class="{'visible' : this.prevention.prevention_4 == 'yearly', 'not__visible' : this.prevention.prevention_4 !== 'yearly'}">Twój wynik</p>
          </div>
          <div class="result two"  :class="{'active' : this.prevention.prevention_4 == 'almostNever'}" style="width:15%">
            <p :class="{'visible' : this.prevention.prevention_4 == 'almostNever', 'not__visible' : this.prevention.prevention_4 !== 'almostNever'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active' : this.prevention.prevention_4 == 'never'}" style="width:30%">
            <p :class="{'visible' : this.prevention.prevention_4 == 'never', 'not__visible' : this.prevention.prevention_4 !== 'never'}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.prevention.prevention_4 == 'weekly', 'one__bg' : this.prevention.prevention_4 !== 'weekly'}" style="width:25%">31%</div>
          <div class="result" :class="{'active' : this.prevention.prevention_4 == 'monthly', 'two__bg' : this.prevention.prevention_4 !== 'monthly'}" style="width:10%">19%</div>
          <div class="result" :class="{'active' : this.prevention.prevention_4 == 'yearly', 'three__bg' : this.prevention.prevention_4 !== 'yearly'}" style="width:20%">5%</div>
          <div class="result" :class="{'active' : this.prevention.prevention_4 == 'almostNever', 'four__bg' : this.prevention.prevention_4 !== 'almostNever'}" style="width:15%">10%</div>
          <div class="result" :class="{'active' : this.prevention.prevention_4 == 'never', 'five__bg' : this.prevention.prevention_4 !== 'never'}" style="width:30%">35%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.prevention.prevention_4 == 'weekly', 'one__bg' : this.prevention.prevention_4 !== 'weekly'}"></span>Raz w miesiącu lub częściej
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.prevention.prevention_4 == 'monthly', 'two__bg' : this.prevention.prevention_4 !== 'monthly'}"></span>Kilka razy w roku</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.prevention.prevention_4 == 'yearly', 'three__bg' : this.prevention.prevention_4 !== 'yearly'}"></span>Raz w roku</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.prevention.prevention_4 == 'almostNever', 'four__bg' : this.prevention.prevention_4 !== 'almostNever'}"></span>Rzadziej niż raz w roku</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.prevention.prevention_4 == 'never', 'five__bg' : this.prevention.prevention_4 !== 'never'}"></span>Nigdy</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      prevention: 'prevention',
      interview: 'interview'
    })
  }
}
</script>

<style scoped lang="scss">

@import '../../resultsStyle.scss';

</style>
