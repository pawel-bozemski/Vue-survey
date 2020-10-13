<template>
  <div class="interview">
    Etap 6/8
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        style="width: 75%"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <h1>Badania Profilaktyczne</h1>
    <div class="jumbotron">
      <h4>
        Czy w ciągu ostatniego roku wykonywał/a Pan/Pani morfologię?
      </h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in prevention_1Questions"
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
                v-model="prevention_1"
              />
            </span>
          </label>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>
        Czy w ciągu ostatniego roku robił Pan/Pani pomiar ciśnienia krwi?
      </h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in prevention_2Questions"
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
                v-model="prevention_2"
              />
            </span>
          </label>
        </div>
      </div>
    </div>
    <img class="image1" src="../../imgs/prevention/stet.png" alt="">
    <div class="jumbotron">
      <h4>
        Czy w ciągu ostaniego roku temu mierzył/a Pan/Pani poziom cukru we krwi?
      </h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in prevention_3Questions"
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
                v-model="prevention_3"
              />
            </span>
          </label>
        </div>
      </div>
    </div>

        <div class="jumbotron">
      <h4>
        Jak często wykonuje Pan/Pani samobadania jako profilaktykę raka jąder / piersi?
      </h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in prevention_4Questions"
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
                v-model="prevention_4"
              />
            </span>
          </label>
        </div>
      </div>
    </div>
    <div class="jumbotron buttons">
      <router-link to="/health" tag="a" class="backBtn">
        <button class="btn btn-warning">
          Wstecz
        </button>
      </router-link>
      <router-link to="/resultsdiet">
        <button
        :disabled="this.disable"
        class="btn btn-warning"
        @click="setPrevention">
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
      prevention_1: '',
      prevention_2: '',
      prevention_3: '',
      prevention_4: '',
      disable: true
    }
  },
  watch: {
    prevention_1: function () {
      if (this.prevention_1 === '' || this.prevention_2 === '' || this.prevention_3 === '' || this.prevention_4 === '') {
        this.disable = true
      } else {
        this.disable = false
      }
    },
    prevention_2: function () {
      if (this.prevention_1 === '' || this.prevention_2 === '' || this.prevention_3 === '' || this.prevention_4 === '') {
        this.disable = true
      } else {
        this.disable = false
      }
    },
    prevention_3: function () {
      if (this.prevention_1 === '' || this.prevention_2 === '' || this.prevention_3 === '' || this.prevention_4 === '') {
        this.disable = true
      } else {
        this.disable = false
      }
    },
    prevention_4: function () {
      if (this.prevention_1 === '' || this.prevention_2 === '' || this.prevention_3 === '' || this.prevention_4 === '') {
        this.disable = true
      } else {
        this.disable = false
      }
    }
  },
  computed: {
    ...mapGetters({
      prevention_1Questions: 'prevention_1',
      prevention_2Questions: 'prevention_2',
      prevention_3Questions: 'prevention_3',
      prevention_4Questions: 'prevention_4',
      prevention: 'prevention'
    })
  },
  mounted: function () {
    this.prevention_1 = this.prevention.prevention_1
    this.prevention_2 = this.prevention.prevention_2
    this.prevention_3 = this.prevention.prevention_3
    this.prevention_4 = this.prevention.prevention_4
  },
  methods: {
    setPrevention () {
      const prevention = {
        prevention_1: this.prevention_1,
        prevention_2: this.prevention_2,
        prevention_3: this.prevention_3,
        prevention_4: this.prevention_4
      }
      this.$store.dispatch('setPrevention', prevention)
    }
  }
}
</script>

<style scoped lang="scss">

@import "../questionStyle.scss";

.image1 {
  right: -10%;
}
</style>
