<template>
  <div class="interview">
    <h1>Metryka</h1>
    <p>Prosimy o podanie podstawowych danych statystycznych</p>
    <div class="jumbotron">
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
            </span>
          </label>
        </div>
      </div>
    </div>
    <div class="jumbotron">
      <h4>Wiek</h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in ageQuestions"
          :key="question.id"
        >
          <label class="form-check-label" :for="question.name">
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
          <label class="form-check-label" :for="question.name">
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
            </span>
          </label>
        </div>
      </div>
    </div>
    <div class="jumbotron">
      <h4>Wykształcenie</h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in educationQuestions"
          :key="question.id"
        >
          <label class="form-check-label" :for="question.name">
            {{ question.title }}
            <span>
              <input
                class="input"
                type="radio"
                :name="question.value"
                :id="question.value"
                :value="question.value"
                v-model="education"
              />
            </span>
          </label>
        </div>
      </div>
    </div>
    <div class="jumbotron">
      <router-link to="/page1">
        <button class="btn btn-warning" @click="setInterview">
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
      education: ''
    }
  },
  computed: {
    ...mapGetters({
      genderQuestions: 'gender',
      ageQuestions: 'age',
      locationQuestions: 'location',
      educationQuestions: 'education'
    })
  },
  methods: {
    setInterview () {
      const interview = {
        gender: this.gender,
        age: this.age,
        location: this.location,
        education: this.education
      }
      this.$store.dispatch('setInterview', interview)
    }
  }
}
</script>

<style scoped lang="scss">

@import './questionStyle.scss';

</style>
