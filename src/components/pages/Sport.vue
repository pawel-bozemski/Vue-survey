<template>
  <div class="interview">
    Etap 4/8
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        style="width: 50%"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <h1>Zdrowie fizyczne</h1>
    <div class="jumbotron">
      <h4>
        Jak długo spacerujesz podczas dnia, wliczając w to czas poświęcony nie tylko na relaks, ale również na dotarcie np. do pracy?
      </h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in sport_1Questions"
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
                v-model="sport_1"
              />
            </span>
          </label>
        </div>
      </div>
    </div>
    <img class="image1" src="../../imgs/sport/podroz.png" alt="">
    <div class="jumbotron">
      <h4>
        Jak często uprawiasz sport?
      </h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in sport_2Questions"
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
                v-model="sport_2"
              />
            </span>
          </label>
        </div>
      </div>
    </div>
    <img class="image2" src="../../imgs/sport/rower.png" alt="">
    <div class="jumbotron">
      <h4>
        Jak oceniasz swoją kondycję fizyczną na tle osób w tym samym wieku?
      </h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in sport_3Questions"
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
                v-model="sport_3"
              />
            </span>
          </label>
        </div>
      </div>
    </div>
    <div class="jumbotron buttons">
      <router-link to="/psych" tag="a" class="backBtn">
        <button class="btn btn-warning">
          Wstecz
        </button>
      </router-link>
      <router-link to="/health">
        <button
        :disabled="this.disable"
        class="btn btn-warning"
        @click="setSport">
          Dalej
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
      sport_1: '',
      sport_2: '',
      sport_3: '',
      disable: true
    }
  },
  watch: {
    sport_1: function () {
      if (this.sport_1 === '' || this.sport_2 === '' || this.sport_3 === '') {
        this.disable = true
      } else {
        this.disable = false
      }
    },
    sport_2: function () {
      if (this.sport_1 === '' || this.sport_2 === '' || this.sport_3 === '') {
        this.disable = true
      } else {
        this.disable = false
      }
    },
    sport_3: function () {
      if (this.sport_1 === '' || this.sport_2 === '' || this.sport_3 === '') {
        this.disable = true
      } else {
        this.disable = false
      }
    }
  },
  computed: {
    ...mapGetters({
      sport_1Questions: 'sport_1',
      sport_2Questions: 'sport_2',
      sport_3Questions: 'sport_3',
      sport: 'sport'
    })
  },
  mounted: function () {
    this.sport_1 = this.sport.sport_1
    this.sport_2 = this.sport.sport_2
    this.sport_3 = this.sport.sport_3
  },
  methods: {
    setSport () {
      const sport = {
        sport_1: this.sport_1,
        sport_2: this.sport_2,
        sport_3: this.sport_3
      }
      this.$store.dispatch('setSport', sport)
    }
  }
}
</script>

<style scoped lang="scss">

@import "../questionStyle.scss";

.image1 {
  left: -5%;
}
.image2 {
  right: -10%;
}
</style>
