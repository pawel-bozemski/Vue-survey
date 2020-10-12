<template>
  <div class="interview">
    <div class="jumbotron">
      <h4>Czy kiedykolwiek ze względu na koszty zrezygnował/a Pan/Pani z wizyty u lekarza?</h4>
      <div class="questions">
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ this.interview.age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one" :class="{'active' : this.cost.cost_1 == 'yes1'}" style="width:33%">
            <p :class="{'visible' : this.cost.cost_1 == 'yes1', 'not__visible' : this.cost.cost_1 !== 'yes1'}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.cost.cost_1 == 'no1'}" style="width:34%">
            <p :class="{'visible' : this.cost.cost_1 == 'no1', 'not__visible' : this.cost.cost_1 !== 'no1'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active' : this.cost.cost_1 == 'never1'}" style="width:33%">
            <p :class="{'visible' : this.cost.cost_1 == 'never1', 'not__visible' : this.cost.cost_1 !== 'never1'}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.cost.cost_1 == 'yes1', 'one__bg' : this.cost.cost_1 !== 'yes1'}" style="width:33%">19%</div>
          <div class="result" :class="{'active' : this.cost.cost_1 == 'no1', 'two__bg' : this.cost.cost_1 !== 'no1'}" style="width:34%">43%</div>
          <div class="result" :class="{'active' : this.cost.cost_1 == 'never1', 'one__bg' : this.cost.cost_1 !== 'never1'}" style="width:33%">38%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.cost.cost_1 == 'yes1', 'one__bg' : this.cost.cost_1 !== 'yes1'}"></span>Tak
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.cost.cost_1 == 'no1', 'two__bg' : this.cost.cost_1 !== 'no1'}"></span>Nie</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.cost.cost_1 == 'never1', 'one__bg' : this.cost.cost_1 !== 'never1'}"></span>'Nie byłem/am postawiona nigdy w takiej sytuacji</div>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>Czy kiedykolwiek nie było stać Pana/Pani na wykupienie leku na receptę?</h4>
      <div class="questions">
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ this.interview.age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one" :class="{'active' : this.cost.cost_2 == 'yes2'}" style="width:33%">
            <p :class="{'visible' : this.cost.cost_2 == 'yes2', 'not__visible' : this.cost.cost_2 !== 'yes2'}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.cost.cost_2 == 'no2'}" style="width:34%">
            <p :class="{'visible' : this.cost.cost_2 == 'no2', 'not__visible' : this.cost.cost_2 !== 'no2'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active' : this.cost.cost_2 == 'never2'}" style="width:33%">
            <p :class="{'visible' : this.cost.cost_2 == 'never2', 'not__visible' : this.cost.cost_2 !== 'never2'}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.cost.cost_2 == 'yes2', 'one__bg' : this.cost.cost_2 !== 'yes2'}" style="width:33%">15%</div>
          <div class="result" :class="{'active' : this.cost.cost_2 == 'no2', 'two__bg' : this.cost.cost_2 !== 'no2'}" style="width:34%">47%</div>
          <div class="result" :class="{'active' : this.cost.cost_2 == 'never2', 'one__bg' : this.cost.cost_2 !== 'never2'}" style="width:33%">38%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.cost.cost_2 == 'yes2', 'one__bg' : this.cost.cost_2 !== 'yes2'}"></span>Tak</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.cost.cost_2 == 'no2', 'two__bg' : this.cost.cost_2 !== 'no2'}"></span>Nie</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.cost.cost_2 == 'never2', 'one__bg' : this.cost.cost_2 !== 'never2'}"></span>'Nie byłem/am postawiona nigdy w takiej sytuacji</div>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>Czy miał(a)by Pan/Pani problem z dojazdem do lekarza na umówioną wizytę?</h4>
      <div class="questions">
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ this.interview.age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one" :class="{'active' : this.cost.cost_3 == 'yes3'}" style="width:50%">
            <p :class="{'visible' : this.cost.cost_3 == 'yes3', 'not__visible' : this.cost.cost_3 !== 'yes3'}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.cost.cost_3 == 'no3'}" style="width:50%">
            <p :class="{'visible' : this.cost.cost_3 == 'no3', 'not__visible' : this.cost.cost_3 !== 'no3'}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.cost.cost_3 == 'yes3', 'one__bg' : this.cost.cost_3 !== 'yes3'}" style="width:50%">18%</div>
          <div class="result" :class="{'active' : this.cost.cost_3 == 'no3', 'two__bg' : this.cost.cost_3 !== 'no3'}" style="width:50%">82%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.cost.cost_3 == 'yes3', 'one__bg' : this.cost.cost_3 !== 'yes3'}"></span>Tak</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.cost.cost_3 == 'no3', 'two__bg' : this.cost.cost_3 !== 'no3'}"></span>Nie</div>
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
      cost: 'cost',
      interview: 'interview'
    })
  }
}
</script>

<style scoped lang="scss">

@import '../../resultsStyle.scss';
</style>
