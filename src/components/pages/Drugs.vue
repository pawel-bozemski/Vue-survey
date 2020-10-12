<template>
  <div class="interview">
        Etap 2/8
    <div class="progress">
      <div
        class="progress-bar bg-warning"
        role="progressbar"
        style="width: 25%"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <h1>Używki</h1>
    <div class="jumbotron">
      <h4>
        Czy pije Pani/Pani poniższe rodzaje alkoholi? (Piwo, Wino, Wódka, Inne alkohole)
      </h4>
      <div class="questions">
      <img class="image1" src="../../imgs/drugs/dinner.png" alt="">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in drugs_1Questions"
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
                v-model="drugs_1"
              />
            </span>
          </label>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>
        Czy pali Pan/Pani poniższe rodzaje wyrobów tytoniowych? - Tradycyjne wyroby tytoniowe
      </h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in drugs_2Questions"
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
                v-model="drugs_2"
              />
            </span>
          </label>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>
        Czy pali Pan/Pani alternatywne papierosy – podgrzewacze tytoniu?
      </h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in drugs_3Questions"
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
                v-model="drugs_3"
              />
            </span>
          </label>
        </div>
      </div>
    </div>
    <div class="jumbotron buttons">
      <router-link to="/diet" tag="a" class="backBtn">
        <button class="btn btn-warning">
          Wstecz
        </button>
      </router-link>
      <router-link to="/psych">
        <button
        :disabled="this.disable"
        class="btn btn-warning"
        @click="setDrugs">
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
      drugs_1: '',
      drugs_2: '',
      drugs_3: '',
      disable: true
    }
  },
  watch: {
    drugs_1: function () {
      if (this.drugs_1 === '' || this.drugs_2 === '' || this.drugs_3 === '') {
        this.disable = true
      } else {
        this.disable = false
      }
    },
    drugs_2: function () {
      if (this.drugs_1 === '' || this.drugs_2 === '' || this.drugs_3 === '') {
        this.disable = true
      } else {
        this.disable = false
      }
    },
    drugs_3: function () {
      if (this.drugs_1 === '' || this.drugs_2 === '' || this.drugs_3 === '') {
        this.disable = true
      } else {
        this.disable = false
      }
    }
  },
  computed: {
    ...mapGetters({
      drugs_1Questions: 'drugs_1',
      drugs_2Questions: 'drugs_2',
      drugs_3Questions: 'drugs_3'
    })
  },

  methods: {
    setDrugs () {
      const drugs = {
        drugs_1: this.drugs_1,
        drugs_2: this.drugs_2,
        drugs_3: this.drugs_3
      }
      this.$store.dispatch('setDrugs', drugs)
    }
  }
}
</script>

<style scoped lang="scss">

@import "../questionStyle.scss";

.image1 {
  right: -15%;
}
</style>
