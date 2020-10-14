<template>
  <div class="interview">
    Etap 1/15
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        style="width: 7%"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <h1>Podstawowe dane</h1>
    <p>Odpowiedz na kilka pytań, które umożliwią nam analizę danych</p>
    <img class="image1" src="../imgs/interview/pani.png" alt="">
    <form class="jumbotron">
      <h4>Płeć</h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in genderQuestions"
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
                v-model="gender"
              />
              <i></i>
            </span>
          </label>
        </div>
      </div>
    </form>
    <div class="jumbotron">
      <h4>Wiek</h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in ageQuestions"
          :key="question.id"
        >
          <label class="form-check-label" :for="question.value">
            {{ question.title }}
            <span>
              <input
                class="input"
                type="radio"
                :name="question.value"
                :id="question.value"
                :value="question.value"
                v-model="age"
              />
              <i></i>
            </span>
          </label>
        </div>
      </div>
    </div>
    <div class="jumbotron">
      <h4>Wielkość miejscowości zamieszkania</h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in locationQuestions"
          :key="question.id"
        >
          <label class="form-check-label" :for="question.value">
            {{ question.title }}
            <span>
              <input
                class="input"
                type="radio"
                :name="question.value"
                :id="question.value"
                :value="question.value"
                v-model="location"
              />
              <i></i>
            </span>
          </label>
        </div>
      </div>
    </div>
    <img class="image2" src="../imgs/interview/pan.png" alt="">
    <div class="jumbotron">
      <router-link to="/diet">
        <button class="btn btn-warning"
          :disabled="this.disable"
          @click="setInterview">
          Dalej >>>>
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
      gender: '',
      age: '',
      location: '',
      disable: true
    }
  },
  mounted: function () {
    this.gender = this.interview.gender
    this.age = this.interview.age
    this.location = this.interview.location
  },
  computed: {
    ...mapGetters({
      genderQuestions: 'gender',
      ageQuestions: 'age',
      locationQuestions: 'location',
      interview: 'interview'
    })
  },
  watch: {
    gender: function () {
      if (this.gender === '' || this.age === '' || this.location === '') {
        this.disable = true
      } else {
        this.disable = false
      }
    },
    age: function () {
      if (this.gender === '' || this.age === '' || this.location === '') {
        this.disable = true
      } else {
        this.disable = false
      }
    },
    location: function () {
      if (this.gender === '' || this.age === '' || this.location === '') {
        this.disable = true
      } else {
        this.disable = false
      }
    }
  },
  methods: {
    setInterview () {
      const interview = {
        gender: this.gender,
        age: this.age,
        location: this.location
      }
      this.$store.dispatch('setInterview', interview)
    }
  }
}
</script>

<style scoped lang="scss">

@import './questionStyle.scss';

.image1 {
  left: -10%;
}
.image2 {
  right: -10%;
  bottom: 10%;
}

</style>
