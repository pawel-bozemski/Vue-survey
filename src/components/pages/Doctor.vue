<template>
  <div class="interview">
    <h1>Dostęp do opieki medycznej</h1>
    <div class="jumbotron">
      <h4>Kiedy ostatnio był/a Pan/Pani na wizycie u lekarza pierwszego kontaktu?</h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in doctor_1Questions"
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
                v-model="doctor_1"
              />
            </span>
          </label>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>
        Kiedy ostatnio leczył/a się  Pan/Pani u lekarza specjalisty?
      </h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in doctor_2Questions"
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
                v-model="doctor_2"
              />
            </span>
          </label>
        </div>
      </div>
    </div>

    <div class="jumbotron">
      <h4>
        Kiedy ostatnio odwiedzał/a Pan/Pani dentystę lub ortodontę?
      </h4>
      <div class="questions">
        <div
          class="form-check form-check-inline question-box"
          v-for="question in doctor_3Questions"
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
                v-model="doctor_3"
              />
            </span>
          </label>
        </div>
      </div>
    </div>

    Wywiad 7/8
    <div class="progress">
      <div
        class="progress-bar bg-danger"
        role="progressbar"
        style="width: 88%"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <div class="jumbotron buttons">
      <router-link to="/prevention" tag="a" class="backBtn">
        <button class="btn btn-warning">
          Wstecz
        </button>
      </router-link>
      <router-link to="/cost">
        <button
        :class="{'noshow' : this.doctor_1 === '' || this.doctor_2 === '' || this.doctor_3 === ''}"
        class="btn btn-warning"
        @click="setDoctor">
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
      doctor_1: '',
      doctor_2: '',
      doctor_3: ''
    }
  },
  computed: {
    ...mapGetters({
      doctor_1Questions: 'doctor_1',
      doctor_2Questions: 'doctor_2',
      doctor_3Questions: 'doctor_3'
    })
  },
  methods: {
    setDoctor () {
      const doctor = {
        doctor_1: this.doctor_1,
        doctor_2: this.doctor_2,
        doctor_3: this.doctor_3
      }
      this.$store.dispatch('setDoctor', doctor)
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
