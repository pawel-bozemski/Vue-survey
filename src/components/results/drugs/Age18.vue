<template>
  <div class="interview">
    <div class="jumbotron">
      <h4>Czy pije Pani/Pani poniższe rodzaje alkoholi? (Piwo, Wino, Wódka, Inne alkohole)</h4>
      <div class="questions">
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ this.interview.age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one" :class="{'active' : this.drugs.drugs_1 == 'everyday1'}" style="width:5%">
            <p :class="{'visible' : this.drugs.drugs_1 == 'everyday1', 'not__visible' : this.drugs.drugs_1 !== 'everyday1'}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.drugs.drugs_1 == 'weekly1'}" style="width:10%">
            <p :class="{'visible' : this.drugs.drugs_1 == 'weekly1', 'not__visible' : this.drugs.drugs_1 !== 'weekly1'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active' : this.drugs.drugs_1 == 'monthly1'}" style="width:15%">
            <p :class="{'visible' : this.drugs.drugs_1 == 'monthly1', 'not__visible' : this.drugs.drugs_1 !== 'monthly1'}">Twój wynik</p>
          </div>
          <div class="result two"  :class="{'active' : this.drugs.drugs_1 == 'yearly1'}" style="width:50%">
            <p :class="{'visible' : this.drugs.drugs_1 == 'yearly1', 'not__visible' : this.drugs.drugs_1 !== 'yearly1'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active' : this.drugs.drugs_1 == 'never1'}" style="width:20%">
            <p :class="{'visible' : this.drugs.drugs_1 == 'never1', 'not__visible' : this.drugs.drugs_1 !== 'never1'}">Twój wynik</p>
          </div>

        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.drugs.drugs_1 == 'everyday1', 'one__bg' : this.drugs.drugs_1 !== 'everyday1'}" style="width:5%">0%</div>
          <div class="result" :class="{'active' : this.drugs.drugs_1 == 'weekly1', 'two__bg' : this.drugs.drugs_1 !== 'weekly1'}" style="width:10%">6%</div>
          <div class="result" :class="{'active' : this.drugs.drugs_1 == 'monthly1', 'one__bg' : this.drugs.drugs_1 !== 'monthly1'}" style="width:15%">20%</div>
          <div class="result" :class="{'active' : this.drugs.drugs_1 == 'yearly1', 'two__bg' : this.drugs.drugs_1 !== 'yearly1'}" style="width:50%">50%</div>
          <div class="result" :class="{'active' : this.drugs.drugs_1 == 'never1', 'one__bg' : this.drugs.drugs_1 !== 'never1'}" style="width:20%">24%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.drugs.drugs_1 == 'everyday1', 'one__bg' : this.drugs.drugs_1 !== 'everyday1'}"></span>Codziennie
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.drugs.drugs_1 == 'weekly1', 'two__bg' : this.drugs.drugs_1 !== 'weekly1'}"></span>Kilka razy w tygodniu</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.drugs.drugs_1 == 'monthly1', 'one__bg' : this.drugs.drugs_1 !== 'monthly1'}"></span>Kilka razy w miesiącu</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.drugs.drugs_1 == 'yearly1', 'two__bg' : this.drugs.drugs_1 !== 'yearly1'}"></span>Raz w miesiącu</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.drugs.drugs_1 == 'never1', 'one__bg' : this.drugs.drugs_1 !== 'never1'}"></span>Nigdy</div>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>Czy pali Pan/Pani poniższe rodzaje wyrobów tytoniowych? - Tradycyjne wyroby tytoniowe</h4>
      <div class="questions">
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ this.interview.age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one" :class="{'active' : this.drugs.drugs_2 == 'everyday2'}" style="width:21%">
            <p :class="{'visible' : this.drugs.drugs_2 == 'everyday2', 'not__visible' : this.drugs.drugs_2 !== 'everyday2'}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.drugs.drugs_2 == 'sometimes2'}" style="width:13%">
            <p :class="{'visible' : this.drugs.drugs_2 == 'sometimes2', 'not__visible' : this.drugs.drugs_2 !== 'sometimes2'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active' : this.drugs.drugs_2 == 'past2'}" style="width:12%">
            <p :class="{'visible' : this.drugs.drugs_2 == 'past2', 'not__visible' : this.drugs.drugs_2 !== 'past2'}">Twój wynik</p>
          </div>
          <div class="result two"  :class="{'active' : this.drugs.drugs_2== 'never2'}" style="width:54%">
            <p :class="{'visible' : this.drugs.drugs_2 == 'never2', 'not__visible' : this.drugs.drugs_2 !== 'never2'}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.drugs.drugs_2 == 'everyday2', 'one__bg' : this.drugs.drugs_2 !== 'everyday2'}" style="width:21%">21%</div>
          <div class="result" :class="{'active' : this.drugs.drugs_2 == 'sometimes2', 'two__bg' : this.drugs.drugs_2 !== 'sometimes2'}" style="width:13%">13%</div>
          <div class="result" :class="{'active' : this.drugs.drugs_2 == 'past2', 'one__bg' : this.drugs.drugs_2 !== 'past2'}" style="width:12%">12%</div>
          <div class="result" :class="{'active' : this.drugs.drugs_2 == 'never2', 'two__bg' : this.drugs.drugs_2 !== 'never2'}" style="width:54%">54%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.drugs.drugs_2 == 'everyday2', 'one__bg' : this.drugs.drugs_2 !== 'everyday2'}"></span>Tak, codziennie lub prawie codziennie
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.drugs.drugs_2 == 'sometimes2', 'two__bg' : this.drugs.drugs_2 !== 'sometimes2'}"></span>Tak, okazjonalnie</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.drugs.drugs_2 == 'past2', 'one__bg' : this.drugs.drugs_2 !== 'past2'}"></span>Nie, ale w przeszłości paliłem/am</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.drugs.drugs_2 == 'never2', 'two__bg' : this.drugs.drugs_2 !== 'never2'}"></span>Nie, nigdy</div>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>Czy pali Pan/Pani alternatywne papierosy – podgrzewacze tytoniu?</h4>
      <div class="questions">
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ this.interview.age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one" :class="{'active' : this.drugs.drugs_3 == 'everyday3'}" style="width:10%">
            <p :class="{'visible' : this.drugs.drugs_3 == 'everyday3', 'not__visible' : this.drugs.drugs_3 !== 'everyday3'}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.drugs.drugs_3 == 'sometimes3'}" style="width:10%">
            <p :class="{'visible' : this.drugs.drugs_3 == 'sometimes3', 'not__visible' : this.drugs.drugs_3 !== 'sometimes3'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active' : this.drugs.drugs_3 == 'past3'}" style="width:15%">
            <p :class="{'visible' : this.drugs.drugs_3 == 'past3', 'not__visible' : this.drugs.drugs_3 !== 'past3'}">Twój wynik</p>
          </div>
          <div class="result two"  :class="{'active' : this.drugs.drugs_3 == 'never3'}" style="width:65%">
            <p :class="{'visible' : this.drugs.drugs_3 == 'never3', 'not__visible' : this.drugs.drugs_3 !== 'never3'}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.drugs.drugs_3 == 'everyday3', 'one__bg' : this.drugs.drugs_3 !== 'everyday3'}" style="width:10%">3%</div>
          <div class="result" :class="{'active' : this.drugs.drugs_3 == 'sometimes3', 'two__bg' : this.drugs.drugs_3 !== 'sometimes3'}" style="width:10%">3%</div>
          <div class="result" :class="{'active' : this.drugs.drugs_3 == 'past3', 'one__bg' : this.drugs.drugs_3 !== 'past3'}" style="width:15%">4%</div>
          <div class="result" :class="{'active' : this.drugs.drugs_3 == 'never3', 'two__bg' : this.drugs.drugs_3 !== 'never3'}" style="width:65%">90%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.drugs.drugs_3 == 'everyday3', 'one__bg' : this.drugs.drugs_3 !== 'everyday3'}"></span>Codziennie
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.drugs.drugs_3 == 'sometimes3', 'two__bg' : this.drugs.drugs_3 !== 'sometimes3'}"></span>Kilka razy w tygodniu</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.drugs.drugs_3 == 'past3', 'one__bg' : this.drugs.drugs_3 !== 'past3'}"></span>Kilka razy w miesiącu</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.drugs.drugs_3 == 'never3', 'two__bg' : this.drugs.drugs_3 !== 'never3'}"></span>Raz w miesiącu lub rzadziej</div>
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
      drugs: 'drugs',
      interview: 'interview'
    })
  }
}
</script>

<style scoped lang="scss">

@import '../../resultsStyle.scss';

</style>
