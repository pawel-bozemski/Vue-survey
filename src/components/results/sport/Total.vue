<template>
  <div class="interview">
    <div class="jumbotron">
      <h4>Jak długo spacerujesz podczas dnia, wliczając w to czas poświęcony nie tylko na relaks, ale również na dotarcie np. do pracy?</h4>
      <div class="questions">

        <div class="bar upper">
          <div class="result one" :class="{'active cont' : this.sport.sport_1 == 'none1'}" style="width:23%">
            <p :class="{'visible' : this.sport.sport_1 == 'none1', 'not__visible' : this.sport.sport_1 !== 'none1'}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active cont' : this.sport.sport_1 == '30min'}" style="width:40%">
            <p :class="{'visible' : this.sport.sport_1 == '30min', 'not__visible' : this.sport.sport_1 !== '30min'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active cont' : this.sport.sport_1 == '1hour'}" style="width:23%">
            <p :class="{'visible' : this.sport.sport_1 == '1hour', 'not__visible' : this.sport.sport_1 !== '1hour'}">Twój wynik</p>
          </div>
          <div class="result two"  :class="{'active cont' : this.sport.sport_1 == 'coupleHours'}" style="width:14%">
            <p :class="{'visible' : this.sport.sport_1 == 'coupleHours', 'not__visible' : this.sport.sport_1 !== 'coupleHours'}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.sport.sport_1 == 'none1', 'one__bg' : this.sport.sport_1 !== 'none1'}" style="width:23%">13%</div>
          <div class="result" :class="{'active' : this.sport.sport_1 == '30min', 'two__bg' : this.sport.sport_1 !== '30min'}" style="width:40%">67%</div>
          <div class="result" :class="{'active' : this.sport.sport_1 == '1hour', 'three__bg' : this.sport.sport_1 !== '1hour'}" style="width:23%">12%</div>
          <div class="result" :class="{'active' : this.sport.sport_1 == 'coupleHours', 'four__bg' : this.sport.sport_1 !== 'coupleHours'}" style="width:14%">7%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.sport.sport_1 == 'none1', 'one__bg' : this.sport.sport_1 !== 'none1'}"></span>Tak, codziennie
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.sport.sport_1 == '30min', 'two__bg' : this.sport.sport_1 !== '30min'}"></span>Tak, kilka razy w tygodniu</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.sport.sport_1 == '1hour', 'three__bg' : this.sport.sport_1 !== '1hour'}"></span>Tak, kilka razy w miesiącu</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.sport.sport_1 == 'coupleHours', 'four__bg' : this.sport.sport_1 !== 'coupleHours'}"></span>Tak, raz w miesiącu lub rzadziej</div>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>Jak często uprawiasz sport?</h4>
      <div class="questions">

        <div class="bar upper">
          <div class="result one" :class="{'active cont' : this.sport.sport_2 == 'none2'}" style="width:40%">
            <p :class="{'visible' : this.sport.sport_2 == 'none2', 'not__visible' : this.sport.sport_2 !== 'none2'}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active cont' : this.sport.sport_2 == '4monthly'}" style="width:15%">
            <p :class="{'visible' : this.sport.sport_2 == '4monthly', 'not__visible' : this.sport.sport_2 !== '4monthly'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active cont' : this.sport.sport_2 == '1weekly'}" style="width:15%">
            <p :class="{'visible' : this.sport.sport_2 == '1weekly', 'not__visible' : this.sport.sport_2 !== '1weekly'}">Twój wynik</p>
          </div>
          <div class="result two"  :class="{'active cont' : this.sport.sport_2== '2weekly'}" style="width:30%">
            <p :class="{'visible' : this.sport.sport_2 == '2weekly', 'not__visible' : this.sport.sport_2 !== '2weekly'}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.sport.sport_2 == 'none2', 'one__bg' : this.sport.sport_2 !== 'none2'}" style="width:40%">50%</div>
          <div class="result" :class="{'active' : this.sport.sport_2 == '4monthly', 'two__bg' : this.sport.sport_2 !== '4monthly'}" style="width:15%">13%</div>
          <div class="result" :class="{'active' : this.sport.sport_2 == '1weekly', 'three__bg' : this.sport.sport_2 !== '1weekly'}" style="width:15%">13%</div>
          <div class="result" :class="{'active' : this.sport.sport_2 == '2weekly', 'four__bg' : this.sport.sport_2 !== '2weekly'}" style="width:30%">24%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.sport.sport_2 == 'none2', 'one__bg' : this.sport.sport_2 !== 'none2'}"></span>Nie uprawiam żadnego sportu
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.sport.sport_2 == '4monthly', 'two__bg' : this.sport.sport_2 !== '4monthly'}"></span>Mniej niż 4 godziny miesięcznie</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.sport.sport_2 == '1weekly', 'three__bg' : this.sport.sport_2 !== '1weekly'}"></span>Około 1-1,5 godziny tygodniowo</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.sport.sport_2 == '2weekly', 'four__bg' : this.sport.sport_2 !== '2weekly'}"></span>Co najmniej 2 godziny tygodniowo i więcej</div>
        </div>
        </div>
    </div>

    <div class="jumbotron">
      <h4>Jak oceniasz swoją kondycję fizyczną na tle osób w tym samym wieku?</h4>
      <div class="questions">

        <div class="bar upper">
          <div class="result one" :class="{'active cont' : this.sport.sport_3 == 'good'}" style="width:15%">
            <p :class="{'visible' : this.sport.sport_3 == 'good', 'not__visible' : this.sport.sport_3 !== 'good'}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active cont' : this.sport.sport_3 == 'average'}" style="width:35%">
            <p :class="{'visible' : this.sport.sport_3 == 'average', 'not__visible' : this.sport.sport_3 !== 'average'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active cont' : this.sport.sport_3 == 'bad'}" style="width:50%">
            <p :class="{'visible' : this.sport.sport_3 == 'bad', 'not__visible' : this.sport.sport_3 !== 'bad'}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.sport.sport_3 == 'good', 'one__bg' : this.sport.sport_3 !== 'good'}" style="width:15%">7%</div>
          <div class="result" :class="{'active' : this.sport.sport_3 == 'average', 'two__bg' : this.sport.sport_3 !== 'average'}" style="width:35%">36%</div>
          <div class="result" :class="{'active' : this.sport.sport_3 == 'bad', 'three__bg' : this.sport.sport_3 !== 'bad'}" style="width:50%">57%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.sport.sport_3 == 'good', 'one__bg' : this.sport.sport_3 !== 'good'}"></span>Bardzo dobry i dobry
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.sport.sport_3 == 'average', 'two__bg' : this.sport.sport_3 !== 'average'}"></span>Przeciętny (Ani dobry, ani zły)</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.sport.sport_3 == 'bad', 'three__bg' : this.sport.sport_3 !== 'bad'}"></span>Bardzo zły i zły</div>
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
      sport: 'sport',
      interview: 'interview'
    })
  }
}
</script>

<style scoped lang="scss">

@import '../../resultsStyle.scss';

</style>
