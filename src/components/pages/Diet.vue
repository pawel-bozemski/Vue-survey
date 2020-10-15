<template>
  <div class="interview">
    Etap 2/15
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        style="width: 14%"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <h1>Dieta</h1>
    <div class="jumbotron">
      <h4>Jak się odżywiasz? Najczęściej jem posiłki:</h4>
      <img class="image1" src="../../imgs/diet/sub.png" alt="">
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in diet_1Questions"
          :key="question.id"
        >
          <label class="form-check-label" :for="question.value">
            {{ question.title }}
            <span>
              <input
                class="input"
                type="radio"
                :name="question.name"
                :id="question.value"
                :value="question.value"
                v-model="diet_1"
              />
              <i></i>
            </span>
          </label>
        </div>
      </div>
    </div>
    <div class="jumbotron">
      <h4>
        Jak często w Twojej diecie pojawiają się dania typu fast-food (hamburgery, frytki, hot-dogi itp.)?      </h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in diet_2Questions"
          :key="question.id"
        >
          <label class="form-check-label" :for="question.value">
            {{ question.title }}
            <span>
              <input
                class="input"
                type="radio"
                :name="question.name"
                :id="question.value"
                :value="question.value"
                v-model="diet_2"
              />
              <i></i>
            </span>
          </label>
        </div>
      </div>
    </div>
    <img class="image2" src="../../imgs/diet/apple.png" alt="">
    <div class="jumbotron">
      <h4>
        Jak często sięgasz po dosładzane napoje, gazowane i niegazowane?
      </h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in diet_3Questions"
          :key="question.id"
        >
          <label class="form-check-label" :for="question.value">
            {{ question.title }}
            <span>
              <input
                class="input"
                type="radio"
                :name="question.name"
                :id="question.value"
                :value="question.value"
                v-model="diet_3"
              />
              <i></i>
            </span>
          </label>
        </div>
      </div>
    </div>
    <div class="jumbotron">
      <h4>
        Jaki jest Twój indeks masy ciała ?
      </h4>
      <div class="questions_bmi">
        <div class="row">
          <div class="col-lg">
            <input type="number" class="form-control bmi" placeholder="Wzrost w cm" name="height" v-model="height" >
          </div>
          <div class="col-lg">
            <input type="number" class="form-control bmi" placeholder="Masa ciała w kg" v-model="mass">
          </div>
        </div>
        <div class="row">
          <div class="col-lg">
            <button
            :disabled="this.disableBmi"
            type="button"
            class="btn"
            @click="calculateBMI">
            Oblicz
            </button>
          </div>
        </div>
      </div>

    <div
    class="results_bmi"
    :class="{'noshow' : this.bmi == '' ||  isNaN(this.bmi) == true || this.bmi == Infinity }"
    >
      <h4>Twoje BMI</h4>
      <div class="questionss">
        <div class="form-check form-check-inline question-box">
          <h6 class="col">{{ this.bmi }}</h6>
        </div>
        <div class="bar upper">
          <div class="result one" :class="{'active cont' : this.bmi < 19 }" style="width:25%">
            <p :class="{'visible' : this.bmi < 19 , 'not__visible' : this.bmi >= 19}">Twój wynik</p>
          </div>
          <div class="result two" :class="{'active cont' : this.bmi >= 19 && this.bmi < 25}" style="width:25%">
            <p :class="{'visible' : this.bmi >= 19 && this.bmi < 25, 'not__visible' : this.bmi < 19 || this.bmi >= 25}">Twój wynik</p>
          </div>
          <div class="result one" :class="{'active cont' : this.bmi >= 25 && this.bmi < 30}" style="width:25%">
            <p :class="{'visible' : this.bmi >= 25 && this.bmi < 30, 'not__visible' : this.bmi <= 25 || this.bmi >= 30}">Twój wynik</p>
          </div>
          <div class="result two"  :class="{'active cont' : this.bmi >= 30}" style="width:25%">
            <p :class="{'visible' : this.bmi >= 30, 'not__visible' : this.bmi <= 30}">Twój wynik</p>
          </div>
        </div>
        <div class="bar">
          <div class="result" :class="{'active' : this.bmi < 19 , 'one__bg' : this.bmi >= 19}" style="width:25%">Niedowaga</div>
          <div class="result" :class="{'active' : this.bmi >= 19 && this.bmi < 25, 'two__bg' : this.bmi < 19 || this.bmi >= 25}" style="width:25%">Waga Optymalna</div>
          <div class="result" :class="{'active' : this.bmi >= 25 && this.bmi < 30, 'three__bg' : this.bmi < 25 || this.bmi >= 30}" style="width:25%">Nadwaga</div>
          <div class="result" :class="{'active' : this.bmi >= 30, 'four__bg' : this.bmi <= 30}" style="width:25%">Otyłość</div>
        </div>
        <div class="row">
          <div class="dot__content">
            <div class="dot" :class="{'active' : this.bmi < 19 , 'one__bg' : this.bmi >= 19}"></div>Mniej niż 19
          </div>
          <div class="dot__content">
            <div class="dot" :class="{'active' : this.bmi >= 19 && this.bmi < 25, 'two__bg' : this.bmi < 19 || this.bmi >= 25}"></div>19-25</div>
          <div class="dot__content">
            <div class="dot" :class="{'active' : this.bmi >= 25 && this.bmi < 30, 'three__bg' : this.bmi < 25 || this.bmi >= 30}"></div>25-30</div>
          <div class="dot__content">
            <div class="dot" :class="{'active' : this.bmi >= 30, 'four__bg' :this.bmi <= 30}"></div>Więcej niż 30</div>
        </div>
      </div>
    </div>
  </div>
    <div class="jumbotron buttons">
      <router-link to="/interview" class="backBtn">
        <button class="btn btn-warning">
           Wstecz
        </button>
      </router-link>
      <router-link to="/drugs">
        <button
        :disabled="this.disable"
        class="btn"
        @click="setDiet">
          Dalej >>>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      diet_1: '',
      diet_2: '',
      diet_3: '',
      bmi: 0,
      height: '',
      mass: '',
      disable: true,
      disableBmi: true
    }
  },
  mounted: function () {
    this.diet_1 = this.diet.diet_1
    this.diet_2 = this.diet.diet_2
    this.diet_3 = this.diet.diet_3
  },
  computed: {
    ...mapGetters({
      diet_1Questions: 'diet_1',
      diet_2Questions: 'diet_2',
      diet_3Questions: 'diet_3',
      diet: 'diet'
    })
  },
  methods: {
    setDiet () {
      const diet = {
        diet_1: this.diet_1,
        diet_2: this.diet_2,
        diet_3: this.diet_3,
        diet_4: this.bmi
      }
      this.$store.dispatch('setDiet', diet)
    },
    calculateBMI () {
      const calc = this.mass / ((this.height) / 100 * (this.height) / 100)
      this.bmi = Math.round(calc)
    }
  },
  watch: {
    diet_1: function () {
      if (this.diet_1 === '' || this.diet_2 === '' || this.diet_3 === '' || this.bmi === 0) {
        this.disable = true
      } else {
        this.disable = false
      }
    },
    diet_2: function () {
      if (this.diet_1 === '' || this.diet_2 === '' || this.diet_3 === '' || this.bmi === 0) {
        this.disable = true
      } else {
        this.disable = false
      }
    },
    diet_3: function () {
      if (this.diet_1 === '' || this.diet_2 === '' || this.diet_3 === '' || this.bmi === 0) {
        this.disable = true
      } else {
        this.disable = false
      }
    },
    height: function () {
      if (this.height === '' || this.mass === '') {
        this.disableBmi = true
      } else {
        this.disableBmi = false
      }
    },
    mass: function () {
      if (this.height === '' || this.mass === '') {
        this.disableBmi = true
      } else {
        this.disableBmi = false
      }
    },
    bmi: function () {
      if (this.diet_1 === '' || this.diet_2 === '' || this.diet_3 === '' || this.bmi === 0) {
        this.disable = true
      } else {
        this.disable = false
      }
    }
  }
}
</script>

<style scoped lang="scss">

@import '../questionStyle.scss';
@import '../resultsStyle.scss';

.image1 {
  left: -15%;
}
.image2 {
  right: -15%;
}
.questions_bmi {
  display: inline;
  .row {
    margin: 15px;
  }
}

</style>
