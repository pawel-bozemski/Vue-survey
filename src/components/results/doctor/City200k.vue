<template>
  <div class="interview">
    <div class="jumbotron">
      <h4>Kiedy ostatnio był/a Pan/Pani na wizycie u lekarza pierwszego kontaktu?</h4>
      <div class="questions">
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ this.interview.age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one" :class="{'active' : this.doctor.doctor_1 == 'halfYear1'}" style="width:54%">
            <p :class="{'visible' : this.doctor.doctor_1 == 'halfYear1', 'not__visible' : this.doctor.doctor_1 !== 'halfYear1'}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.doctor.doctor_1 == 'year1'}" style="width:18%">
            <p :class="{'visible' : this.doctor.doctor_1 == 'year1', 'not__visible' : this.doctor.doctor_1 !== 'year1'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active' : this.doctor.doctor_1 == 'moreYear1'}" style="width:15%">
            <p :class="{'visible' : this.doctor.doctor_1 == 'moreYear1', 'not__visible' : this.doctor.doctor_1 !== 'moreYear1'}">Twój wynik</p>
          </div>
          <div class="result two"  :class="{'active' : this.doctor.doctor_1 == 'never1'}" style="width:13%">
            <p :class="{'visible' : this.doctor.doctor_1 == 'never1', 'not__visible' : this.doctor.doctor_1 !== 'never1'}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.doctor.doctor_1 == 'halfYear1', 'one__bg' : this.doctor.doctor_1 !== 'halfYear1'}" style="width:54%">54%</div>
          <div class="result" :class="{'active' : this.doctor.doctor_1 == 'year1', 'two__bg' : this.doctor.doctor_1 !== 'year1'}" style="width:18%">18%</div>
          <div class="result" :class="{'active' : this.doctor.doctor_1 == 'moreYear1', 'one__bg' : this.doctor.doctor_1 !== 'moreYear1'}" style="width:15%">15%</div>
          <div class="result" :class="{'active' : this.doctor.doctor_1 == 'never1', 'two__bg' : this.doctor.doctor_1 !== 'never1'}" style="width:13%">13%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.doctor.doctor_1 == 'halfYear1', 'one__bg' : this.doctor.doctor_1 !== 'halfYear1'}"></span>Mniej niż 6 miesięcy temu
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.doctor.doctor_1 == 'year1', 'two__bg' : this.doctor.doctor_1 !== 'year1'}"></span>6 - 12 miesięcy temu</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.doctor.doctor_1 == 'moreYear1', 'one__bg' : this.doctor.doctor_1 !== 'moreYear1'}"></span>Dawniej niż rok temu</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.doctor.doctor_1 == 'never1', 'two__bg' : this.doctor.doctor_1 !== 'never1'}"></span>Nigdy</div>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>Kiedy ostatnio leczył/a się  Pan/Pani u lekarza specjalisty?</h4>
      <div class="questions">
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ this.interview.age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one" :class="{'active' : this.doctor.doctor_2 == 'halfYear2'}" style="width:49%">
            <p :class="{'visible' : this.doctor.doctor_2 == 'halfYear2', 'not__visible' : this.doctor.doctor_2 !== 'halfYear2'}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.doctor.doctor_2 == 'year2'}" style="width:16%">
            <p :class="{'visible' : this.doctor.doctor_2 == 'year2', 'not__visible' : this.doctor.doctor_2 !== 'year2'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active' : this.doctor.doctor_2 == 'moreYear2'}" style="width:17%">
            <p :class="{'visible' : this.doctor.doctor_2 == 'moreYear2', 'not__visible' : this.doctor.doctor_2 !== 'moreYear2'}">Twój wynik</p>
          </div>
          <div class="result two"  :class="{'active' : this.doctor.drugs22== 'never2'}" style="width:18%">
            <p :class="{'visible' : this.doctor.doctor_2 == 'never2', 'not__visible' : this.doctor.doctor_2 !== 'never2'}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.doctor.doctor_2 == 'halfYear2', 'one__bg' : this.doctor.doctor_2 !== 'halfYear2'}" style="width:49%">49%</div>
          <div class="result" :class="{'active' : this.doctor.doctor_2 == 'year2', 'two__bg' : this.doctor.doctor_2 !== 'year2'}" style="width:16%">16%</div>
          <div class="result" :class="{'active' : this.doctor.doctor_2 == 'moreYear2', 'one__bg' : this.doctor.doctor_2 !== 'moreYear2'}" style="width:17%">17%</div>
          <div class="result" :class="{'active' : this.doctor.doctor_2 == 'never2', 'two__bg' : this.doctor.doctor_2 !== 'never2'}" style="width:18%">18%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.doctor.doctor_2 == 'halfYear2', 'one__bg' : this.doctor.doctor_2 !== 'halfYear2'}"></span>Mniej niż 6 miesięcy temu
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.doctor.doctor_2 == 'year2', 'two__bg' : this.doctor.doctor_2 !== 'year2'}"></span>6 - 12 miesięcy temu</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.doctor.doctor_2 == 'moreYear2', 'one__bg' : this.doctor.doctor_2 !== 'moreYear2'}"></span>Dawniej niż rok temu</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.doctor.doctor_2 == 'never2', 'two__bg' : this.doctor.doctor_2 !== 'never2'}"></span>Nigdy</div>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>Kiedy ostatnio odwiedzał/a Pan/Pani dentystę lub ortodontę?</h4>
      <div class="questions">
        <div class="form-check form-check-inline question-box">
          <h6>Wiek: {{ this.interview.age }} lata</h6>
        </div>
        <div class="bar">
          <div class="result one" :class="{'active' : this.doctor.doctor_3 == 'halfYear3'}" style="width:39%">
            <p :class="{'visible' : this.doctor.doctor_3 == 'halfYear3', 'not__visible' : this.doctor.doctor_3 !== 'halfYear3'}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.doctor.doctor_3 == 'year3'}" style="width:24%">
            <p :class="{'visible' : this.doctor.doctor_3 == 'year3', 'not__visible' : this.doctor.doctor_3 !== 'year3'}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active' : this.doctor.doctor_3 == 'moreYear3'}" style="width:24%">
            <p :class="{'visible' : this.doctor.doctor_3 == 'moreYear3', 'not__visible' : this.doctor.doctor_3 !== 'moreYear3'}">Twój wynik</p>
          </div>
          <div class="result two"  :class="{'active' : this.doctor.doctor_3 == 'never3'}" style="width:13%">
            <p :class="{'visible' : this.doctor.doctor_3 == 'never3', 'not__visible' : this.doctor.doctor_3 !== 'never3'}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.doctor.doctor_3 == 'halfYear3', 'one__bg' : this.doctor.doctor_3 !== 'halfYear3'}" style="width:39%">39%</div>
          <div class="result" :class="{'active' : this.doctor.doctor_3 == 'year3', 'two__bg' : this.doctor.doctor_3 !== 'year3'}" style="width:24%">24%</div>
          <div class="result" :class="{'active' : this.doctor.doctor_3 == 'moreYear3', 'one__bg' : this.doctor.doctor_3 !== 'moreYear3'}" style="width:24%">24%</div>
          <div class="result" :class="{'active' : this.doctor.doctor_3 == 'never3', 'two__bg' : this.doctor.doctor_3 !== 'never3'}" style="width:13%">13%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.doctor.doctor_3 == 'halfYear3', 'one__bg' : this.doctor.doctor_3 !== 'halfYear3'}"></span>Mniej niż 6 miesięcy temu
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.doctor.doctor_3 == 'year3', 'two__bg' : this.doctor.doctor_3 !== 'year3'}"></span>6 - 12 miesięcy temu</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.doctor.doctor_3 == 'moreYear3', 'one__bg' : this.doctor.doctor_3 !== 'moreYear3'}"></span>Dawniej niż rok temu</div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.doctor.doctor_3 == 'never3', 'two__bg' : this.doctor.doctor_3 !== 'never3'}"></span>Nigdy</div>
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
      doctor: 'doctor',
      interview: 'interview'
    })
  }
}
</script>

<style scoped lang="scss">

@import '../../resultsStyle.scss';

</style>
