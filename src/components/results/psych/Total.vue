<template>
  <div class="interview">
    <div class="jumbotron">
      <h4>Czy i jak często znajdujesz się w stresujących sytuacjach?</h4>
      <div class="questions">

        <div class="bar upper">
          <div class="result one" :class="{'active cont' : this.psych.psych_1 == 'daily1'}" style="width:20%">
            <p :class="{'visible' : this.psych.psych_1 == 'daily1', 'not__visible' : this.psych.psych_1 !== 'daily1'}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active cont' : this.psych.psych_1 == 'weekly1'}" style="width:20%">
            <p :class="{'visible' : this.psych.psych_1 == 'weekly1', 'not__visible' : this.psych.psych_1 !== 'weekly1'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active cont' : this.psych.psych_1 == 'monthly1'}" style="width:20%">
            <p :class="{'visible' : this.psych.psych_1 == 'monthly1', 'not__visible' : this.psych.psych_1 !== 'monthly1'}">Twój wynik</p>
          </div>
          <div class="result two"  :class="{'active cont' : this.psych.psych_1 == 'yearly1'}" style="width:20%">
            <p :class="{'visible' : this.psych.psych_1 == 'yearly1', 'not__visible' : this.psych.psych_1 !== 'yearly1'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active cont' : this.psych.psych_1 == 'none1'}" style="width:20%">
            <p :class="{'visible' : this.psych.psych_1 == 'none1', 'not__visible' : this.psych.psych_1 !== 'none1'}">Twój wynik</p>
          </div>

        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.psych.psych_1 == 'daily1', 'one__bg' : this.psych.psych_1 !== 'daily1'}" style="width:20%">24%</div>
          <div class="result" :class="{'active' : this.psych.psych_1 == 'weekly1', 'two__bg' : this.psych.psych_1 !== 'weekly1'}" style="width:20%">38%</div>
          <div class="result" :class="{'active' : this.psych.psych_1 == 'monthly1', 'three__bg' : this.psych.psych_1 !== 'monthly1'}" style="width:20%">19%</div>
          <div class="result" :class="{'active' : this.psych.psych_1 == 'yearly1', 'four__bg' : this.psych.psych_1 !== 'yearly1'}" style="width:20%">17%</div>
          <div class="result" :class="{'active' : this.psych.psych_1 == 'none1', 'five__bg' : this.psych.psych_1 !== 'none1'}" style="width:20%">2%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.psych.psych_1 == 'daily1', 'one__bg' : this.psych.psych_1 !== 'daily1'}"></span>Tak, codziennie
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.psych.psych_1 == 'weekly1', 'two__bg' : this.psych.psych_1 !== 'weekly1'}"></span>Tak, kilka razy w tygodniu</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.psych.psych_1 == 'monthly1', 'three__bg' : this.psych.psych_1 !== 'monthly1'}"></span>Tak, kilka razy w miesiącu</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.psych.psych_1 == 'yearly1', 'four__bg' : this.psych.psych_1 !== 'yearly1'}"></span>Tak, raz w miesiącu lub rzadziej</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.psych.psych_1 == 'none1', 'five__bg' : this.psych.psych_1 !== 'none1'}"></span>Nie, nigdy</div>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>Czy spotykasz się z przyjaciółmi i rodziną? </h4>
      <div class="questions">

        <div class="bar upper">
          <div class="result one" :class="{'active cont' : this.psych.psych_2 == 'daily2'}" style="width:20%">
            <p :class="{'visible' : this.psych.psych_2 == 'daily2', 'not__visible' : this.psych.psych_2 !== 'daily2'}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active cont' : this.psych.psych_2 == 'weekly2'}" style="width:20%">
            <p :class="{'visible' : this.psych.psych_2 == 'weekly2', 'not__visible' : this.psych.psych_2 !== 'weekly2'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active cont' : this.psych.psych_2 == 'monthly2'}" style="width:20%">
            <p :class="{'visible' : this.psych.psych_2 == 'monthly2', 'not__visible' : this.psych.psych_2 !== 'monthly2'}">Twój wynik</p>
          </div>
          <div class="result two"  :class="{'active cont' : this.psych.diet22== 'yearly2'}" style="width:20%">
            <p :class="{'visible' : this.psych.psych_2 == 'yearly2', 'not__visible' : this.psych.psych_2 !== 'yearly2'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active cont' : this.psych.psych_2 == 'none2'}" style="width:20%">
            <p :class="{'visible' : this.psych.psych_2 == 'none2', 'not__visible' : this.psych.psych_2 !== 'none2'}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.psych.psych_2 == 'daily2', 'one__bg' : this.psych.psych_2 !== 'daily2'}" style="width:20%">21%</div>
          <div class="result" :class="{'active' : this.psych.psych_2 == 'weekly2', 'two__bg' : this.psych.psych_2 !== 'weekly2'}" style="width:20%">24%</div>
          <div class="result" :class="{'active' : this.psych.psych_2 == 'monthly2', 'three__bg' : this.psych.psych_2 !== 'monthly2'}" style="width:20%">36%</div>
          <div class="result" :class="{'active' : this.psych.psych_2 == 'yearly2', 'four__bg' : this.psych.psych_2 !== 'yearly2'}" style="width:20%">17%</div>
          <div class="result" :class="{'active' : this.psych.psych_2 == 'none2', 'five__bg' : this.psych.psych_2 !== 'none2'}" style="width:20%">1%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.psych.psych_2 == 'daily2', 'one__bg' : this.psych.psych_2 !== 'daily2'}"></span>Tak, codziennie
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.psych.psych_2 == 'weekly2', 'two__bg' : this.psych.psych_2 !== 'weekly2'}"></span>Tak, kilka razy w tygodniu</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.psych.psych_2 == 'monthly2', 'three__bg' : this.psych.psych_2 !== 'monthly2'}"></span>Tak, kilka razy w miesiącu</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.psych.psych_2 == 'yearly2', 'four__bg' : this.psych.psych_2 !== 'yearly2'}"></span>Tak, raz w miesiącu lub rzadziej</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.psych.psych_2 == 'none2', 'five__bg' : this.psych.psych_2 !== 'none2'}"></span>Nie, nigdy</div>
        </div>
        </div>
    </div>

    <div class="jumbotron">
      <h4>Ile czasu w trakcie doby przeznaczasz na sen? </h4>
      <div class="questions">

        <div class="bar upper">
          <div class="result one" :class="{'active cont' : this.psych.psych_3 == 'low'}" style="width:33%">
            <p :class="{'visible' : this.psych.psych_3 == 'low', 'not__visible' : this.psych.psych_3 !== 'low'}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active cont' : this.psych.psych_3 == 'optimal'}" style="width:34%">
            <p :class="{'visible' : this.psych.psych_3 == 'optimal', 'not__visible' : this.psych.psych_3 !== 'optimal'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active cont' : this.psych.psych_3 == 'high'}" style="width:33%">
            <p :class="{'visible' : this.psych.psych_3 == 'high', 'not__visible' : this.psych.psych_3 !== 'high'}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.psych.psych_3 == 'low', 'one__bg' : this.psych.psych_3 !== 'low'}" style="width:33%">40%</div>
          <div class="result" :class="{'active' : this.psych.psych_3 == 'optimal', 'two__bg' : this.psych.psych_3 !== 'optimal'}" style="width:34%">58%</div>
          <div class="result" :class="{'active' : this.psych.psych_3 == 'high', 'three__bg' : this.psych.psych_3 !== 'high'}" style="width:33%">2%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.psych.psych_3 == 'low', 'one__bg' : this.psych.psych_3 !== 'low'}"></span>Mniej niż 7 godzin
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.psych.psych_3 == 'optimal', 'two__bg' : this.psych.psych_3 !== 'optimal'}"></span>7-9 godzin</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.psych.psych_3 == 'high', 'one__bg' : this.psych.psych_3 !== 'high'}"></span>10 godzin i więcej</div>
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
      psych: 'psych',
      interview: 'interview'
    })
  }
}
</script>

<style scoped lang="scss">

@import '../../resultsStyle.scss';

</style>
