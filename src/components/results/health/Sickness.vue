<template>
  <div class="interview">
    <div class="jumbotron">
      <h4>Czy cierpisz z powodu przewlekłych (trwających już min. pół roku lub szacowanych na min. 6 miesięcy) problemów ze zdrowiem? </h4>
      <div class="questions">

        <div class="bar">
          <div class="result one" :class="{'active cont' : this.health.health_1 == 'yes'}" style="width:50%">
            <p :class="{'visible' : this.health.health_1 == 'yes', 'not__visible' : this.health.health_1 !== 'yes'}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active' : this.health.health_1 == 'no'}" style="width:50%">
            <p :class="{'visible' : this.health.health_1 == 'no', 'not__visible' : this.health.health_1 !== 'no'}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.health.health_1 == 'yes', 'one__bg' : this.health.health_1 !== 'yes'}" style="width:50%">48%</div>
          <div class="result" :class="{'active' : this.health.health_1 == 'no', 'two__bg' : this.health.health_1 !== 'no'}" style="width:50%">52%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_1 == 'yes', 'one__bg' : this.health.health_1 !== 'yes'}"></span>Tak
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_1 == 'no', 'two__bg' : this.health.health_1 !== 'no'}"></span>Nie</div>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>Czy stwierdzono u Ciebie (teraz lub kiedyś) następujące choroby?</h4>
      <div class="questions">
        <h4>Nadciśnienie</h4>

        <div class="bar upper">
          <div class="result one" :class="{'active cont' : this.health.health_2.includes('hipertension') == true}" style="width:50%">
            <p :class="{'visible' : this.health.health_2.includes('hipertension') == true, 'not__visible' : this.health.health_2.includes('hipertension') !== true}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active cont' : this.health.health_2.includes('hipertension') !== true}" style="width:50%">
            <p :class="{'visible' : this.health.health_2.includes('hipertension') !== true, 'not__visible' : this.health.health_2.includes('hipertension') == true}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.health.health_2.includes('hipertension') == true, 'one__bg' : this.health.health_2.includes('hipertension') !== true}" style="width:50%">48%</div>
          <div class="result" :class="{'active' : this.health.health_2.includes('hipertension') !== true, 'two__bg' : this.health.health_2.includes('hipertension') == true}" style="width:50%">52%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_2.includes('hipertension') == true, 'one__bg' : this.health.health_2.includes('hipertension') !== true}"></span>Tak
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_2.includes('hipertension') !== true, 'two__bg' : this.health.health_2.includes('hipertension') == true}"></span>Nie</div>
        </div>
      </div>

      <div class="questions">
        <h4>Cukrzyca</h4>

        <div class="bar upper">
          <div class="result one" :class="{'active cont' : this.health.health_2.includes('diabetes') == true}" style="width:10%">
            <p :class="{'visible' : this.health.health_2.includes('diabetes') == true, 'not__visible' : this.health.health_2.includes('diabetes') !== true}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active cont' : this.health.health_2.includes('diabetes') !== true}" style="width:90%">
            <p :class="{'visible' : this.health.health_2.includes('diabetes') !== true, 'not__visible' : this.health.health_2.includes('diabetes') == true}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.health.health_2.includes('diabetes') == true, 'one__bg' : this.health.health_2.includes('diabetes') !== true}" style="width:10%">7%</div>
          <div class="result" :class="{'active' : this.health.health_2.includes('diabetes') !== true, 'two__bg' : this.health.health_2.includes('diabetes') == true}" style="width:90%">93%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_2.includes('diabetes') == true, 'one__bg' : this.health.health_2.includes('diabetes') !== true}"></span>Tak
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_2.includes('diabetes') !== true, 'two__bg' : this.health.health_2.includes('diabetes') == true}"></span>Nie</div>
        </div>
      </div>

      <div class="questions">
        <h4>Przewlekła obturacyjna choroba płuc (POChP)</h4>

        <div class="bar upper">
          <div class="result one" :class="{'active cont' : this.health.health_2.includes('pochp') == true}" style="width:10%">
            <p :class="{'visible' : this.health.health_2.includes('pochp') == true, 'not__visible' : this.health.health_2.includes('pochp') !== true}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active cont' : this.health.health_2.includes('pochp') !== true}" style="width:90%">
            <p :class="{'visible' : this.health.health_2.includes('pochp') !== true, 'not__visible' : this.health.health_2.includes('pochp') == true}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.health.health_2.includes('pochp') == true, 'one__bg' : this.health.health_2.includes('pochp') !== true}" style="width:10%">2%</div>
          <div class="result" :class="{'active' : this.health.health_2.includes('pochp') !== true, 'two__bg' : this.health.health_2.includes('pochp') == true}" style="width:90%">98%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_2.includes('pochp') == true, 'one__bg' : this.health.health_2.includes('pochp') !== true}"></span>Tak
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_2.includes('pochp') !== true, 'two__bg' : this.health.health_2.includes('pochp') == true}"></span>Nie</div>
        </div>
      </div>
      <div class="questions">
        <h4>Alergia lub astma</h4>

        <div class="bar upper">
          <div class="result one" :class="{'active cont' : this.health.health_2.includes('allergy') == true}" style="width:20%">
            <p :class="{'visible' : this.health.health_2.includes('allergy') == true, 'not__visible' : this.health.health_2.includes('allergy') !== true}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active cont' : this.health.health_2.includes('allergy') !== true}" style="width:80%">
            <p :class="{'visible' : this.health.health_2.includes('allergy') !== true, 'not__visible' : this.health.health_2.includes('allergy') == true}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.health.health_2.includes('allergy') == true, 'one__bg' : this.health.health_2.includes('allergy') !== true}" style="width:20%">18%</div>
          <div class="result" :class="{'active' : this.health.health_2.includes('allergy') !== true, 'two__bg' : this.health.health_2.includes('allergy') == true}" style="width:80%">82%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_2.includes('allergy') == true, 'one__bg' : this.health.health_2.includes('allergy') !== true}"></span>Tak
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_2.includes('allergy') !== true, 'two__bg' : this.health.health_2.includes('allergy') == true}"></span>Nie</div>
        </div>
      </div>

      <div class="questions">
        <h4>Depresja</h4>

        <div class="bar upper">
          <div class="result one" :class="{'active cont' : this.health.health_2.includes('depresion') == true}" style="width:10%">
            <p :class="{'visible' : this.health.health_2.includes('depresion') == true, 'not__visible' : this.health.health_2.includes('depresion') !== true}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active cont' : this.health.health_2.includes('depresion') !== true}" style="width:90%">
            <p :class="{'visible' : this.health.health_2.includes('depresion') !== true, 'not__visible' : this.health.health_2.includes('depresion') == true}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.health.health_2.includes('depresion') == true, 'one__bg' : this.health.health_2.includes('depresion') !== true}" style="width:10%">10%</div>
          <div class="result" :class="{'active' : this.health.health_2.includes('depresion') !== true, 'two__bg' : this.health.health_2.includes('depresion') == true}" style="width:90%">90%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_2.includes('depresion') == true, 'one__bg' : this.health.health_2.includes('depresion') !== true}"></span>Tak
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_2.includes('depresion') !== true, 'two__bg' : this.health.health_2.includes('depresion') == true}"></span>Nie</div>
        </div>
      </div>
      <div class="questions">
        <h4>Choroba nowotworowa</h4>

        <div class="bar upper">
          <div class="result one" :class="{'active cont' : this.health.health_2.includes('cancer') == true}" style="width:10%">
            <p :class="{'visible' : this.health.health_2.includes('cancer') == true, 'not__visible' : this.health.health_2.includes('cancer') !== true}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active cont' : this.health.health_2.includes('cancer') !== true}" style="width:90%">
            <p :class="{'visible' : this.health.health_2.includes('cancer') !== true, 'not__visible' : this.health.health_2.includes('cancer') == true}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.health.health_2.includes('cancer') == true, 'one__bg' : this.health.health_2.includes('cancer') !== true}" style="width:10%">3%</div>
          <div class="result" :class="{'active' : this.health.health_2.includes('cancer') !== true, 'two__bg' : this.health.health_2.includes('cancer') == true}" style="width:90%">97%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_2.includes('cancer') == true, 'one__bg' : this.health.health_2.includes('cancer') !== true}"></span>Tak
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_2.includes('cancer') !== true, 'two__bg' : this.health.health_2.includes('cancer') == true}"></span>Nie</div>
        </div>
      </div>
      <div class="questions">
        <h4>Choroba stawów</h4>

        <div class="bar upper">
          <div class="result one" :class="{'active cont' : this.health.health_2.includes('joints') == true}" style="width:20%">
            <p :class="{'visible' : this.health.health_2.includes('joints') == true, 'not__visible' : this.health.health_2.includes('joints') !== true}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active cont' : this.health.health_2.includes('joints') !== true}" style="width:80%">
            <p :class="{'visible' : this.health.health_2.includes('joints') !== true, 'not__visible' : this.health.health_2.includes('joints') == true}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.health.health_2.includes('joints') == true, 'one__bg' : this.health.health_2.includes('joints') !== true}" style="width:20%">16%</div>
          <div class="result" :class="{'active' : this.health.health_2.includes('joints') !== true, 'two__bg' : this.health.health_2.includes('joints') == true}" style="width:80%">84%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_2.includes('joints') == true, 'one__bg' : this.health.health_2.includes('joints') !== true}"></span>Tak
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_2.includes('joints') !== true, 'two__bg' : this.health.health_2.includes('joints') == true}"></span>Nie</div>
        </div>
      </div>
      <div class="questions">
        <h4>Choroba neurologiczna</h4>

        <div class="bar upper">
          <div class="result one" :class="{'active cont' : this.health.health_2.includes('neurological') == true}" style="width:10%">
            <p :class="{'visible' : this.health.health_2.includes('neurological') == true, 'not__visible' : this.health.health_2.includes('neurological') !== true}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active cont' : this.health.health_2.includes('neurological') !== true}" style="width:90%">
            <p :class="{'visible' : this.health.health_2.includes('neurological') !== true, 'not__visible' : this.health.health_2.includes('neurological') == true}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.health.health_2.includes('neurological') == true, 'one__bg' : this.health.health_2.includes('neurological') !== true}" style="width:10%">9%</div>
          <div class="result" :class="{'active' : this.health.health_2.includes('neurological') !== true, 'two__bg' : this.health.health_2.includes('neurological') == true}" style="width:90%">91%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_2.includes('neurological') == true, 'one__bg' : this.health.health_2.includes('neurological') !== true}"></span>Tak
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_2.includes('neurological') !== true, 'two__bg' : this.health.health_2.includes('neurological') == true}"></span>Nie</div>
        </div>
      </div>
      <div class="questions">
        <h4>Choroby serca</h4>

        <div class="bar upper">
          <div class="result one" :class="{'active cont' : this.health.health_2.includes('heart') == true}" style="width:10%">
            <p :class="{'visible' : this.health.health_2.includes('heart') == true, 'not__visible' : this.health.health_2.includes('heart') !== true}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active cont' : this.health.health_2.includes('heart') !== true}" style="width:90%">
            <p :class="{'visible' : this.health.health_2.includes('heart') !== true, 'not__visible' : this.health.health_2.includes('heart') == true}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.health.health_2.includes('heart') == true, 'one__bg' : this.health.health_2.includes('heart') !== true}" style="width:10%">9%</div>
          <div class="result" :class="{'active' : this.health.health_2.includes('heart') !== true, 'two__bg' : this.health.health_2.includes('heart') == true}" style="width:90%">91%</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_2.includes('heart') == true, 'one__bg' : this.health.health_2.includes('heart') !== true}"></span>Tak
          </div>
          <div class="dot__content">
            <span class="dot" :class="{'active' : this.health.health_2.includes('heart') !== true, 'two__bg' : this.health.health_2.includes('heart') == true}"></span>Nie</div>
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
      health: 'health',
      interview: 'interview'
    })
  }
}
</script>

<style scoped lang="scss">

@import '../../resultsStyle.scss';

</style>
