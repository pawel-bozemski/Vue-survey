<template>
  <div class="interview">
    <h1>Zdrowie psychiczne</h1>
    <div class="jumbotron">
      <h4>
        Czy i jak często znajduje się Pan/Pani w stresujących sytuacjach?</h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in psych_1Questions"
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
                v-model="psych_1"
              />
            </span>
          </label>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>
        Czy znajduje Pan/Pani czas na spotkania z przyjaciółmi i rodziną?
      </h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in psych_2Questions"
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
                v-model="psych_2"
              />
            </span>
          </label>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>
        Jak długo przeważnie Pan/Pani śpi w trakcie doby?
      </h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in psych_3Questions"
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
                v-model="psych_3"
              />
            </span>
          </label>
        </div>
      </div>
    </div>

    Wywiad 3/8
    <div class="progress">
      <div
        class="progress-bar bg-danger"
        role="progressbar"
        style="width: 38%"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <div class="jumbotron buttons">
      <router-link to="/drugs" tag="a" class="backBtn">
        <button class="btn btn-warning">
          Wstecz
        </button>
      </router-link>
      <router-link to="/sport">
        <button
        :class="{'noshow' : this.psych_1 === '' || this.psych_2 === '' || this.psych_3 === ''}"
        class="btn btn-warning"
        @click="setPsych">
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
      psych_1: '',
      psych_2: '',
      psych_3: ''
    }
  },
  computed: {
    ...mapGetters({
      psych_1Questions: 'psych_1',
      psych_2Questions: 'psych_2',
      psych_3Questions: 'psych_3'
    })
  },

  methods: {
    setPsych () {
      const psych = {
        psych_1: this.psych_1,
        psych_2: this.psych_2,
        psych_3: this.psych_3
      }
      this.$store.dispatch('setPsych', psych)
    }
  }
}
</script>

<style scoped lang="scss">
.progress {
  margin: 15px;
}
@import "../questionStyle.scss";
</style>
