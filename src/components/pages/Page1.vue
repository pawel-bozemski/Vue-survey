<template>
  <div class="interview">
    <h1>Dieta</h1>
    <div class="jumbotron">
      <h4>Jakie posiłki spożywa Pan/Pani najczęściej</h4>
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
            </span>
          </label>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>
        Jak często jada Pan/Pani produkty typu fast-food <br />(hamburgery,
        frytki, hot-dog itp.)?
      </h4>
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
            </span>
          </label>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>
        Jak często pije Pan/Pani napoje słodzone, gazowane lub niegazowane?
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
            </span>
          </label>
        </div>
      </div>
    </div>
    Wywiad 1/10
    <div class="progress">
      <div
        class="progress-bar bg-danger"
        role="progressbar"
        style="width: 10%"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <router-link to="/interview" tag="a" class="backBtn">
      <i class="fas fa-chevron-circle-left"></i>
    </router-link>
    <div class="jumbotron">
      <router-link to="/page2">
        <button class="btn btn-warning" @click="setDiet">
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
      diet_1: '',
      diet_2: '',
      diet_3: ''
    }
  },
  computed: {
    ...mapGetters({
      diet_1Questions: 'diet_1',
      diet_2Questions: 'diet_2',
      diet_3Questions: 'diet_3'
    })
  },
  methods: {
    setDiet () {
      const diet = {
        diet_1: this.diet_1,
        diet_2: this.diet_2,
        diet_3: this.diet_3
      }
      this.$store.dispatch('setDiet', diet)
    }
  }
}
</script>

<style scoped lang="scss">
.progress {
  margin: 15px;
}
@import '../questionStyle.scss';

</style>
