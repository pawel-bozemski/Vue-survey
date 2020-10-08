<template>
  <div class="interview">

    <div class="jumbotron">
      <h4>Czy któraś z tych dolegliwości pojawia się u Pan/Pani co najmniej kilka razy w miesiącu?</h4>
      <div class="questions">
        <h4>Ból pleców</h4>
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ this.interview.age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one" :class="{'active' : this.health.health_3.includes('back') == true}" style="width:34%">
            <p :class="{'visible' : this.health.health_3.includes('back') == true, 'not__visible' : this.health.health_3.includes('back') !== true}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.health.health_3.includes('back') !== true}" style="width:66%">
            <p :class="{'visible' : this.health.health_3.includes('back') !== true, 'not__visible' : this.health.health_3.includes('back') == true}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.health.health_3.includes('back') == true, 'one__bg' : this.health.health_3.includes('back') !== true}" style="width:34%">34%</div>
          <div class="result" :class="{'active' : this.health.health_3.includes('back') !== true, 'two__bg' : this.health.health_3.includes('back') == true}" style="width:66%">66%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_3.includes('back') == true, 'one__bg' : this.health.health_3.includes('back') !== true}"></span>Tak
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_3.includes('back') !== true, 'two__bg' : this.health.health_3.includes('back') == true}"></span>Nie</div>
        </div>
      </div>

      <div class="questions">
        <h4>Ból głowy</h4>
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ this.interview.age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one" :class="{'active' : this.health.health_3.includes('head') == true}" style="width:22%">
            <p :class="{'visible' : this.health.health_3.includes('head') == true, 'not__visible' : this.health.health_3.includes('head') !== true}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.health.health_3.includes('head') !== true}" style="width:78%">
            <p :class="{'visible' : this.health.health_3.includes('head') !== true, 'not__visible' : this.health.health_3.includes('head') == true}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.health.health_3.includes('head') == true, 'one__bg' : this.health.health_3.includes('head') !== true}" style="width:22%">22%</div>
          <div class="result" :class="{'active' : this.health.health_3.includes('head') !== true, 'two__bg' : this.health.health_3.includes('head') == true}" style="width:78%">78%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_3.includes('head') == true, 'one__bg' : this.health.health_3.includes('head') !== true}"></span>Tak
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_3.includes('head') !== true, 'two__bg' : this.health.health_3.includes('head') == true}"></span>Nie</div>
        </div>
      </div>

      <div class="questions">
        <h4>Ból w klatce piersiowej</h4>
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ this.interview.age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one" :class="{'active' : this.health.health_3.includes('chest') == true}" style="width:15%">
            <p :class="{'visible' : this.health.health_3.includes('chest') == true, 'not__visible' : this.health.health_3.includes('chest') !== true}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.health.health_3.includes('chest') !== true}" style="width:85%">
            <p :class="{'visible' : this.health.health_3.includes('chest') !== true, 'not__visible' : this.health.health_3.includes('chest') == true}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.health.health_3.includes('chest') == true, 'one__bg' : this.health.health_3.includes('chest') !== true}" style="width:15%">8%</div>
          <div class="result" :class="{'active' : this.health.health_3.includes('chest') !== true, 'two__bg' : this.health.health_3.includes('chest') == true}" style="width:85%">92%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_3.includes('chest') == true, 'one__bg' : this.health.health_3.includes('chest') !== true}"></span>Tak
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_3.includes('chest') !== true, 'two__bg' : this.health.health_3.includes('chest') == true}"></span>Nie</div>
        </div>
      </div>
      <div class="questions">
        <h4>Zgaga</h4>
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ this.interview.age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one" :class="{'active' : this.health.health_3.includes('burn') == true}" style="width:13%">
            <p :class="{'visible' : this.health.health_3.includes('burn') == true, 'not__visible' : this.health.health_3.includes('burn') !== true}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.health.health_3.includes('burn') !== true}" style="width:87%">
            <p :class="{'visible' : this.health.health_3.includes('burn') !== true, 'not__visible' : this.health.health_3.includes('burn') == true}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.health.health_3.includes('burn') == true, 'one__bg' : this.health.health_3.includes('burn') !== true}" style="width:13%">13%</div>
          <div class="result" :class="{'active' : this.health.health_3.includes('burn') !== true, 'two__bg' : this.health.health_3.includes('burn') == true}" style="width:87%">87%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_3.includes('burn') == true, 'one__bg' : this.health.health_3.includes('burn') !== true}"></span>Tak
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_3.includes('burn') !== true, 'two__bg' : this.health.health_3.includes('burn') == true}"></span>Nie</div>
        </div>
      </div>

      <div class="questions">
        <h4>Drętwienie kończyn</h4>
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ this.interview.age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one" :class="{'active' : this.health.health_3.includes('arms') == true}" style="width:20%">
            <p :class="{'visible' : this.health.health_3.includes('arms') == true, 'not__visible' : this.health.health_3.includes('arms') !== true}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.health.health_3.includes('arms') !== true}" style="width:80%">
            <p :class="{'visible' : this.health.health_3.includes('arms') !== true, 'not__visible' : this.health.health_3.includes('arms') == true}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.health.health_3.includes('arms') == true, 'one__bg' : this.health.health_3.includes('arms') !== true}" style="width:20%">20%</div>
          <div class="result" :class="{'active' : this.health.health_3.includes('arms') !== true, 'two__bg' : this.health.health_3.includes('arms') == true}" style="width:80%">80%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_3.includes('arms') == true, 'one__bg' : this.health.health_3.includes('arms') !== true}"></span>Tak
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_3.includes('arms') !== true, 'two__bg' : this.health.health_3.includes('arms') == true}"></span>Nie</div>
        </div>
      </div>
      <div class="questions">
        <h4>Bezsenność</h4>
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ this.interview.age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one" :class="{'active' : this.health.health_3.includes('insomnia') == true}" style="width:20%">
            <p :class="{'visible' : this.health.health_3.includes('insomnia') == true, 'not__visible' : this.health.health_3.includes('insomnia') !== true}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.health.health_3.includes('insomnia') !== true}" style="width:80%">
            <p :class="{'visible' : this.health.health_3.includes('insomnia') !== true, 'not__visible' : this.health.health_3.includes('insomnia') == true}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.health.health_3.includes('insomnia') == true, 'one__bg' : this.health.health_3.includes('insomnia') !== true}" style="width:20%">20%</div>
          <div class="result" :class="{'active' : this.health.health_3.includes('insomnia') !== true, 'two__bg' : this.health.health_3.includes('insomnia') == true}" style="width:80%">80%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_3.includes('insomnia') == true, 'one__bg' : this.health.health_3.includes('insomnia') !== true}"></span>Tak
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_3.includes('insomnia') !== true, 'two__bg' : this.health.health_3.includes('insomnia') == true}"></span>Nie</div>
        </div>
      </div>
      <div class="questions">
        <h4>Zaparcia</h4>
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ this.interview.age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one" :class="{'active' : this.health.health_3.includes('constipation') == true}" style="width:12%">
            <p :class="{'visible' : this.health.health_3.includes('constipation') == true, 'not__visible' : this.health.health_3.includes('constipation') !== true}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.health.health_3.includes('constipation') !== true}" style="width:88%">
            <p :class="{'visible' : this.health.health_3.includes('constipation') !== true, 'not__visible' : this.health.health_3.includes('constipation') == true}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.health.health_3.includes('constipation') == true, 'one__bg' : this.health.health_3.includes('constipation') !== true}" style="width:12%">12%</div>
          <div class="result" :class="{'active' : this.health.health_3.includes('constipation') !== true, 'two__bg' : this.health.health_3.includes('constipation') == true}" style="width:88%">88%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_3.includes('constipation') == true, 'one__bg' : this.health.health_3.includes('constipation') !== true}"></span>Tak
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_3.includes('constipation') !== true, 'two__bg' : this.health.health_3.includes('constipation') == true}"></span>Nie</div>
        </div>
      </div>
      <div class="questions">
        <h4>Senność w ciągu dnia</h4>
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ this.interview.age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one" :class="{'active' : this.health.health_3.includes('sleepy') == true}" style="width:25%">
            <p :class="{'visible' : this.health.health_3.includes('sleepy') == true, 'not__visible' : this.health.health_3.includes('sleepy') !== true}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.health.health_3.includes('sleepy') !== true}" style="width:75%">
            <p :class="{'visible' : this.health.health_3.includes('sleepy') !== true, 'not__visible' : this.health.health_3.includes('sleepy') == true}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.health.health_3.includes('sleepy') == true, 'one__bg' : this.health.health_3.includes('sleepy') !== true}" style="width:25%">25%</div>
          <div class="result" :class="{'active' : this.health.health_3.includes('sleepy') !== true, 'two__bg' : this.health.health_3.includes('sleepy') == true}" style="width:75%">75%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_3.includes('sleepy') == true, 'one__bg' : this.health.health_3.includes('sleepy') !== true}"></span>Tak
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_3.includes('sleepy') !== true, 'two__bg' : this.health.health_3.includes('sleepy') == true}"></span>Nie</div>
        </div>
      </div>
      <div class="questions">
        <h4>Nadmierne pragnienie</h4>
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ this.interview.age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one" :class="{'active' : this.health.health_3.includes('thirst') == true}" style="width:11%">
            <p :class="{'visible' : this.health.health_3.includes('thirst') == true, 'not__visible' : this.health.health_3.includes('thirst') !== true}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.health.health_3.includes('thirst') !== true}" style="width:89%">
            <p :class="{'visible' : this.health.health_3.includes('thirst') !== true, 'not__visible' : this.health.health_3.includes('thirst') == true}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.health.health_3.includes('thirst') == true, 'one__bg' : this.health.health_3.includes('thirst') !== true}" style="width:11%">11%</div>
          <div class="result" :class="{'active' : this.health.health_3.includes('thirst') !== true, 'two__bg' : this.health.health_3.includes('thirst') == true}" style="width:89%">89%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_3.includes('thirst') == true, 'one__bg' : this.health.health_3.includes('thirst') !== true}"></span>Tak
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_3.includes('thirst') !== true, 'two__bg' : this.health.health_3.includes('thirst') == true}"></span>Nie</div>
        </div>
      </div>
      <div class="questions">
        <h4>Niewyraźne widzenie</h4>
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ this.interview.age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one" :class="{'active' : this.health.health_3.includes('blured') == true}" style="width:16%">
            <p :class="{'visible' : this.health.health_3.includes('blured') == true, 'not__visible' : this.health.health_3.includes('blured') !== true}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.health.health_3.includes('blured') !== true}" style="width:84%">
            <p :class="{'visible' : this.health.health_3.includes('blured') !== true, 'not__visible' : this.health.health_3.includes('blured') == true}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.health.health_3.includes('blured') == true, 'one__bg' : this.health.health_3.includes('blured') !== true}" style="width:16%">16%</div>
          <div class="result" :class="{'active' : this.health.health_3.includes('blured') !== true, 'two__bg' : this.health.health_3.includes('blured') == true}" style="width:84%">84%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_3.includes('blured') == true, 'one__bg' : this.health.health_3.includes('blured') !== true}"></span>Tak
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_3.includes('blured') !== true, 'two__bg' : this.health.health_3.includes('blured') == true}"></span>Nie</div>
        </div>
      </div>
      <div class="questions">
        <h4>Nietrzymanie moczu</h4>
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ this.interview.age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one" :class="{'active' : this.health.health_3.includes('urea') == true}" style="width:16%">
            <p :class="{'visible' : this.health.health_3.includes('urea') == true, 'not__visible' : this.health.health_3.includes('urea') !== true}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.health.health_3.includes('urea') !== true}" style="width:84%">
            <p :class="{'visible' : this.health.health_3.includes('urea') !== true, 'not__visible' : this.health.health_3.includes('urea') == true}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.health.health_3.includes('urea') == true, 'one__bg' : this.health.health_3.includes('urea') !== true}" style="width:16%">6%</div>
          <div class="result" :class="{'active' : this.health.health_3.includes('urea') !== true, 'two__bg' : this.health.health_3.includes('urea') == true}" style="width:84%">94%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_3.includes('urea') == true, 'one__bg' : this.health.health_3.includes('urea') !== true}"></span>Tak
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_3.includes('urea') !== true, 'two__bg' : this.health.health_3.includes('urea') == true}"></span>Nie</div>
        </div>
      </div>
      <div class="questions">
        <h4>Psychiczne, emocjonalne lub fizyczne wyczerpanie pracą</h4>
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ this.interview.age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one" :class="{'active' : this.health.health_3.includes('psych') == true}" style="width:27%">
            <p :class="{'visible' : this.health.health_3.includes('psych') == true, 'not__visible' : this.health.health_3.includes('psych') !== true}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.health.health_3.includes('psych') !== true}" style="width:73%">
            <p :class="{'visible' : this.health.health_3.includes('psych') !== true, 'not__visible' : this.health.health_3.includes('psych') == true}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.health.health_3.includes('psych') == true, 'one__bg' : this.health.health_3.includes('psych') !== true}" style="width:27%">27%</div>
          <div class="result" :class="{'active' : this.health.health_3.includes('psych') !== true, 'two__bg' : this.health.health_3.includes('psych') == true}" style="width:73%">73%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_3.includes('psych') == true, 'one__bg' : this.health.health_3.includes('psych') !== true}"></span>Tak
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_3.includes('psych') !== true, 'two__bg' : this.health.health_3.includes('psych') == true}"></span>Nie</div>
        </div>
      </div>
      <div class="questions">
        <h4>Zaburzenia pamięci</h4>
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ this.interview.age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one" :class="{'active' : this.health.health_3.includes('memory') == true}" style="width:10%">
            <p :class="{'visible' : this.health.health_3.includes('memory') == true, 'not__visible' : this.health.health_3.includes('memory') !== true}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.health.health_3.includes('memory') !== true}" style="width:90%">
            <p :class="{'visible' : this.health.health_3.includes('memory') !== true, 'not__visible' : this.health.health_3.includes('memory') == true}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.health.health_3.includes('memory') == true, 'one__bg' : this.health.health_3.includes('memory') !== true}" style="width:10%">8%</div>
          <div class="result" :class="{'active' : this.health.health_3.includes('memory') !== true, 'two__bg' : this.health.health_3.includes('memory') == true}" style="width:90%">92%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_3.includes('memory') == true, 'one__bg' : this.health.health_3.includes('memory') !== true}"></span>Tak
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_3.includes('memory') !== true, 'two__bg' : this.health.health_3.includes('memory') == true}"></span>Nie</div>
        </div>
      </div>

    </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      health: 'health',
      interview: 'interview'
    })
  }
}
</script>

<style scoped lang="scss">
.questions {
  padding: 10px;
}
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
