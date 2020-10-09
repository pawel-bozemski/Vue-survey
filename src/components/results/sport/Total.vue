<template>
  <div class="interview">
    <div class="jumbotron">
      <h4>Ile średnio Pan/Pani codziennie spaceruje – wliczając w to czas poświęcony nie tylko na relaks, ale również na dotarcie np. do pracy?</h4>
      <div class="questions">
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ this.interview.age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one" :class="{'active' : this.sport.sport_1 == 'daily1'}" style="width:11%">
            <p :class="{'visible' : this.sport.sport_1 == 'daily1', 'not__visible' : this.sport.sport_1 !== 'daily1'}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.sport.sport_1 == '30min'}" style="width:67%">
            <p :class="{'visible' : this.sport.sport_1 == '30min', 'not__visible' : this.sport.sport_1 !== '30min'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active' : this.sport.sport_1 == '1hour'}" style="width:12%">
            <p :class="{'visible' : this.sport.sport_1 == '1hour', 'not__visible' : this.sport.sport_1 !== '1hour'}">Twój wynik</p>
          </div>
          <div class="result two"  :class="{'active' : this.sport.sport_1 == 'coupleHours'}" style="width:10%">
            <p :class="{'visible' : this.sport.sport_1 == 'coupleHours', 'not__visible' : this.sport.sport_1 !== 'coupleHours'}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.sport.sport_1 == 'daily1', 'one__bg' : this.sport.sport_1 !== 'daily1'}" style="width:11%">13%</div>
          <div class="result" :class="{'active' : this.sport.sport_1 == '30min', 'two__bg' : this.sport.sport_1 !== '30min'}" style="width:67%">67%</div>
          <div class="result" :class="{'active' : this.sport.sport_1 == '1hour', 'one__bg' : this.sport.sport_1 !== '1hour'}" style="width:12%">12%</div>
          <div class="result" :class="{'active' : this.sport.sport_1 == 'coupleHours', 'two__bg' : this.sport.sport_1 !== 'coupleHours'}" style="width:10%">7%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.sport.sport_1 == 'daily1', 'one__bg' : this.sport.sport_1 !== 'daily1'}"></span>Tak, codziennie
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.sport.sport_1 == '30min', 'two__bg' : this.sport.sport_1 !== '30min'}"></span>Tak, kilka razy w tygodniu</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.sport.sport_1 == '1hour', 'one__bg' : this.sport.sport_1 !== '1hour'}"></span>Tak, kilka razy w miesiącu</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.sport.sport_1 == 'coupleHours', 'two__bg' : this.sport.sport_1 !== 'coupleHours'}"></span>Tak, raz w miesiącu lub rzadziej</div>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>Jak często uprawia Pan/Pani sport?</h4>
      <div class="questions">
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ this.interview.age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one" :class="{'active' : this.sport.sport_2 == 'none2'}" style="width:50%">
            <p :class="{'visible' : this.sport.sport_2 == 'none2', 'not__visible' : this.sport.sport_2 !== 'none2'}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.sport.sport_2 == '4monthly'}" style="width:13%">
            <p :class="{'visible' : this.sport.sport_2 == '4monthly', 'not__visible' : this.sport.sport_2 !== '4monthly'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active' : this.sport.sport_2 == '1weekly'}" style="width:13%">
            <p :class="{'visible' : this.sport.sport_2 == '1weekly', 'not__visible' : this.sport.sport_2 !== '1weekly'}">Twój wynik</p>
          </div>
          <div class="result two"  :class="{'active' : this.sport.sport_2== '2weekly'}" style="width:24%">
            <p :class="{'visible' : this.sport.sport_2 == '2weekly', 'not__visible' : this.sport.sport_2 !== '2weekly'}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.sport.sport_2 == 'none2', 'one__bg' : this.sport.sport_2 !== 'none2'}" style="width:50%">50%</div>
          <div class="result" :class="{'active' : this.sport.sport_2 == '4monthly', 'two__bg' : this.sport.sport_2 !== '4monthly'}" style="width:13%">13%</div>
          <div class="result" :class="{'active' : this.sport.sport_2 == '1weekly', 'one__bg' : this.sport.sport_2 !== '1weekly'}" style="width:13%">13%</div>
          <div class="result" :class="{'active' : this.sport.sport_2 == '2weekly', 'two__bg' : this.sport.sport_2 !== '2weekly'}" style="width:24%">24%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.sport.sport_2 == 'none2', 'one__bg' : this.sport.sport_2 !== 'none2'}"></span>Nie uprawiam żadnego sportu
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.sport.sport_2 == '4monthly', 'two__bg' : this.sport.sport_2 !== '4monthly'}"></span>Mniej niż 4 godziny miesięcznie</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.sport.sport_2 == '1weekly', 'one__bg' : this.sport.sport_2 !== '1weekly'}"></span>Około 1-1,5 godziny tygodniowo</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.sport.sport_2 == '2weekly', 'two__bg' : this.sport.sport_2 !== '2weekly'}"></span>Co najmniej 2 godziny tygodniowo i więcej</div>
        </div>
        </div>
    </div>

    <div class="jumbotron">
      <h4>Jak ocenia Pan/Pani swoją kondycję fizyczną w porównaniu z innymi osobami w tym samym wieku ?</h4>
      <div class="questions">
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ this.interview.age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one" :class="{'active' : this.sport.sport_3 == 'good'}" style="width:7%">
            <p :class="{'visible' : this.sport.sport_3 == 'good', 'not__visible' : this.sport.sport_3 !== 'good'}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.sport.sport_3 == 'average'}" style="width:36%">
            <p :class="{'visible' : this.sport.sport_3 == 'average', 'not__visible' : this.sport.sport_3 !== 'average'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active' : this.sport.sport_3 == 'bad'}" style="width:57%">
            <p :class="{'visible' : this.sport.sport_3 == 'bad', 'not__visible' : this.sport.sport_3 !== 'bad'}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.sport.sport_3 == 'good', 'one__bg' : this.sport.sport_3 !== 'good'}" style="width:7%">7%</div>
          <div class="result" :class="{'active' : this.sport.sport_3 == 'average', 'two__bg' : this.sport.sport_3 !== 'average'}" style="width:36%">36%</div>
          <div class="result" :class="{'active' : this.sport.sport_3 == 'bad', 'one__bg' : this.sport.sport_3 !== 'bad'}" style="width:57%">57%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.sport.sport_3 == 'good', 'one__bg' : this.sport.sport_3 !== 'good'}"></span>Bardzo dobry i dobry
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.sport.sport_3 == 'average', 'two__bg' : this.sport.sport_3 !== 'average'}"></span>Przeciętny (Ani dobry, ani zły)</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.sport.sport_3 == 'bad', 'one__bg' : this.sport.sport_3 !== 'bad'}"></span>Bardzo zły i zły</div>
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
