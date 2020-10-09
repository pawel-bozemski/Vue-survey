<template>
  <div class="interview">
    <div class="jumbotron">
      <h4>Czy i jak często znajduje się Pan/Pani w stresujących sytuacjach?</h4>
      <div class="questions">
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ this.interview.age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one" :class="{'active' : this.psych.psych_1 == 'daily1'}" style="width:18%">
            <p :class="{'visible' : this.psych.psych_1 == 'daily1', 'not__visible' : this.psych.psych_1 !== 'daily1'}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.psych.psych_1 == 'weekly1'}" style="width:38%">
            <p :class="{'visible' : this.psych.psych_1 == 'weekly1', 'not__visible' : this.psych.psych_1 !== 'weekly1'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active' : this.psych.psych_1 == 'monthly1'}" style="width:19%">
            <p :class="{'visible' : this.psych.psych_1 == 'monthly1', 'not__visible' : this.psych.psych_1 !== 'monthly1'}">Twój wynik</p>
          </div>
          <div class="result two"  :class="{'active' : this.psych.psych_1 == 'yearly1'}" style="width:17%">
            <p :class="{'visible' : this.psych.psych_1 == 'yearly1', 'not__visible' : this.psych.psych_1 !== 'yearly1'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active' : this.psych.psych_1 == 'none1'}" style="width:8%">
            <p :class="{'visible' : this.psych.psych_1 == 'none1', 'not__visible' : this.psych.psych_1 !== 'none1'}">Twój wynik</p>
          </div>

        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.psych.psych_1 == 'daily1', 'one__bg' : this.psych.psych_1 !== 'daily1'}" style="width:18%">24%</div>
          <div class="result" :class="{'active' : this.psych.psych_1 == 'weekly1', 'two__bg' : this.psych.psych_1 !== 'weekly1'}" style="width:38%">38%</div>
          <div class="result" :class="{'active' : this.psych.psych_1 == 'monthly1', 'one__bg' : this.psych.psych_1 !== 'monthly1'}" style="width:19%">19%</div>
          <div class="result" :class="{'active' : this.psych.psych_1 == 'yearly1', 'two__bg' : this.psych.psych_1 !== 'yearly1'}" style="width:17%">17%</div>
          <div class="result" :class="{'active' : this.psych.psych_1 == 'none1', 'one__bg' : this.psych.psych_1 !== 'none1'}" style="width:8%">2%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.psych.psych_1 == 'daily1', 'one__bg' : this.psych.psych_1 !== 'daily1'}"></span>Tak, codziennie
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.psych.psych_1 == 'weekly1', 'two__bg' : this.psych.psych_1 !== 'weekly1'}"></span>Tak, kilka razy w tygodniu</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.psych.psych_1 == 'monthly1', 'one__bg' : this.psych.psych_1 !== 'monthly1'}"></span>Tak, kilka razy w miesiącu</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.psych.psych_1 == 'yearly1', 'two__bg' : this.psych.psych_1 !== 'yearly1'}"></span>Tak, raz w miesiącu lub rzadziej</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.psych.psych_1 == 'none1', 'one__bg' : this.psych.psych_1 !== 'none1'}"></span>Nie, nigdy</div>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>Czy znajduje Pan/Pani czas na spotkania z przyjaciółmi i rodziną?</h4>
      <div class="questions">
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ this.interview.age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one" :class="{'active' : this.psych.psych_2 == 'daily2'}" style="width:21%">
            <p :class="{'visible' : this.psych.psych_2 == 'daily2', 'not__visible' : this.psych.psych_2 !== 'daily2'}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.psych.psych_2 == 'weekly2'}" style="width:22%">
            <p :class="{'visible' : this.psych.psych_2 == 'weekly2', 'not__visible' : this.psych.psych_2 !== 'weekly2'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active' : this.psych.psych_2 == 'monthly2'}" style="width:32%">
            <p :class="{'visible' : this.psych.psych_2 == 'monthly2', 'not__visible' : this.psych.psych_2 !== 'monthly2'}">Twój wynik</p>
          </div>
          <div class="result two"  :class="{'active' : this.psych.diet22== 'yearly2'}" style="width:17%">
            <p :class="{'visible' : this.psych.psych_2 == 'yearly2', 'not__visible' : this.psych.psych_2 !== 'yearly2'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active' : this.psych.psych_2 == 'none2'}" style="width:8%">
            <p :class="{'visible' : this.psych.psych_2 == 'none2', 'not__visible' : this.psych.psych_2 !== 'none2'}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.psych.psych_2 == 'daily2', 'one__bg' : this.psych.psych_2 !== 'daily2'}" style="width:21%">21%</div>
          <div class="result" :class="{'active' : this.psych.psych_2 == 'weekly2', 'two__bg' : this.psych.psych_2 !== 'weekly2'}" style="width:22%">24%</div>
          <div class="result" :class="{'active' : this.psych.psych_2 == 'monthly2', 'one__bg' : this.psych.psych_2 !== 'monthly2'}" style="width:32%">36%</div>
          <div class="result" :class="{'active' : this.psych.psych_2 == 'yearly2', 'two__bg' : this.psych.psych_2 !== 'yearly2'}" style="width:17%">17%</div>
          <div class="result" :class="{'active' : this.psych.psych_2 == 'none2', 'one__bg' : this.psych.psych_2 !== 'none2'}" style="width:8%">1%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.psych.psych_2 == 'daily2', 'one__bg' : this.psych.psych_2 !== 'daily2'}"></span>Tak, codziennie
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.psych.psych_2 == 'weekly2', 'two__bg' : this.psych.psych_2 !== 'weekly2'}"></span>Tak, kilka razy w tygodniu</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.psych.psych_2 == 'monthly2', 'one__bg' : this.psych.psych_2 !== 'monthly2'}"></span>Tak, kilka razy w miesiącu</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.psych.psych_2 == 'yearly2', 'two__bg' : this.psych.psych_2 !== 'yearly2'}"></span>Tak, raz w miesiącu lub rzadziej</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.psych.psych_2 == 'none2', 'one__bg' : this.psych.psych_2 !== 'none2'}"></span>Nie, nigdy</div>
        </div>
        </div>
    </div>

    <div class="jumbotron">
      <h4>Jak długo przeważnie Pan/Pani śpi w trakcie doby?</h4>
      <div class="questions">
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ this.interview.age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one" :class="{'active' : this.psych.psych_3 == 'low'}" style="width:40%">
            <p :class="{'visible' : this.psych.psych_3 == 'low', 'not__visible' : this.psych.psych_3 !== 'low'}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.psych.psych_3 == 'optimal'}" style="width:50%">
            <p :class="{'visible' : this.psych.psych_3 == 'optimal', 'not__visible' : this.psych.psych_3 !== 'optimal'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active' : this.psych.psych_3 == 'high'}" style="width:10%">
            <p :class="{'visible' : this.psych.psych_3 == 'high', 'not__visible' : this.psych.psych_3 !== 'high'}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.psych.psych_3 == 'low', 'one__bg' : this.psych.psych_3 !== 'low'}" style="width:40%">40%</div>
          <div class="result" :class="{'active' : this.psych.psych_3 == 'optimal', 'two__bg' : this.psych.psych_3 !== 'optimal'}" style="width:50%">58%</div>
          <div class="result" :class="{'active' : this.psych.psych_3 == 'high', 'one__bg' : this.psych.psych_3 !== 'high'}" style="width:10%">2%</div>
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
.brands {
  margin: 0;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.jumbotron {
  padding: 15px;
}
.bar {
  width: 100%;
  background-color: #ddd;
  margin: 10px 0;
  display: inline-block;
}

.result {
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
  height: 50px;
  float: left;
  display: block;
}
.active {
  background-color: orange;
  display: inline;
}
.not__visible {
  background-color: orange;
  display: none;
}
.visible {
  display: inline;
}
.one__bg {
  background-color: #7d8597;
}
.two__bg {
  background-color: #979dac;
}
.three__bg {
  background-color: #5c677d;
}
.four__bg {
  background-color: #33415c;
}
.dot {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
  margin: 0 25px;
}
.dot__content {
  width: 25%;
}
</style>
