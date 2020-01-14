<template>
  <div class="forms" >
    <form class="" action="index.html" method="post" v-on:submit="handleSubmit">
      <div id="travel-form">
        <label for="name">Name:</label>
        <input type="text" name="name" v-model="name">
        <h3>Travel</h3>
        <p>Enter miles traveled by:</p>
        <label for="car">Car:</label>
        <input type="number" name="car" @input="handleRunningTravel" v-model="car">
        <br>
        <label for="train">Train:</label>
        <input type="number" name="train" @input="handleRunningTravel" v-model="train">
        <br>
        <label for="plane">Plane:</label>
        <input type="number" name="plane" @input="handleRunningTravel" v-model="plane">
      </div>
      <div id="energy-form">
        <h3>Energy</h3>
        <p>Enter kilowatts used:</p>
        <label for="electricity">Electricity:</label>
        <input type="number" name="electricity" @input="handleRunningEnergy" v-model="electricity">
        <br>
        <label for="gas">Gas:</label>
        <input type="number" name="gas" @input="handleRunningEnergy" v-model="gas">
        <br>
        <label for="hybrid">Hybrid:</label>
        <input type="number" name="hybrid" @input="handleRunningEnergy" v-model="hybrid">
      </div>
      <div id="diet-form">
        <h3>Diet</h3>
        <p>Enter kg eaten in:</p>
        <label for="meat">Meat:</label>
        <input type="number" name="meat" @input="handleRunningDiet" v-model="meat">
        <br>
        <label for="veg">Veg:</label>
        <input type="number" name="veg" @input="handleRunningDiet" v-model="veg">
      </div>
      <!-- <input type="submit" name="Submit"/> -->
      <br>
      <button type="submit" alt="Submit"> <img src="https://svgsilh.com/svg_v2/1991841.svg" width="60px"height="100px"></button>

    </form>
    <br>
    <!-- <button type="submit" alt="Submit"> <img src="https://svgsilh.com/svg_v2/1991841.svg" width="60px"height="100px"></button> -->


  </div>
</template>
<script>
import EmissionFactorsService from '@/services/EmissionFactorsService.js';
import UserDataService from '@/services/UserDataService.js'
import { eventBus } from '../main.js';
export default {
  name: "forms-live-here",
  data(){
    return{
      name: null,
      car: null,
      train: null,
      plane: null,
      electricity: null,
      gas: null,
      hybrid: null,
      meat: null,
      veg: null,
      travelTotal: null,
      energyTotal: null,
      dietTotal: null,
      combinedTotal: null
    }
  },
  mounted(){

    eventBus.$on('travel-calculated', result => this.travelTotal = result)
    eventBus.$on('energy-calculated', result => this.energyTotal = result)
    eventBus.$on('diet-calculated', result => this.dietTotal = result)
    eventBus.$on('combined-calculated', result => this.combinedTotal = result)


    },
  methods: {
  handleSubmit(e){
    e.preventDefault()
    const newFootprint = {
      name: this.name,
      car: this.car * 473,
      train: this.train * 34.80,
      plane: this.plane * 26900,
      electricity: this.electricity * 700,
      gas: this.gas * 500,
      hybrid: this.hybrid * 600,
      meat: this.meat * 19690,
      veg: this.veg * 5000,
      travelTotal: this.travelTotal,
      energyTotal: this.energyTotal,
      dietTotal: this.dietTotal,
      combinedTotal: this.combinedTotal
      }

      UserDataService.postFootprint(newFootprint)
      .then((res) => {
        e.target.reset()
        eventBus.$emit('footprint-added', res)
        eventBus.$emit('clear-totals')
      })
  },

  handleRunningTravel(){
    const runningFootprint = {
      car: this.car,
      train: this.train,
      plane: this.plane
        }
      eventBus.$emit('running-total-travel', runningFootprint)
  },
  handleRunningEnergy(){
    const runningFootprint = {
      electricity: this.electricity,
      gas: this.gas,
      hybrid: this.hybrid
        }
      eventBus.$emit('running-total-energy', runningFootprint)
  },
  handleRunningDiet(){
    const runningFootprint = {
      meat: this.meat,
      veg: this.veg
        }
      eventBus.$emit('running-total-diet', runningFootprint)
  },



}
}
</script>

<style lang="css" scoped>
h2 {
	margin: 10px 0;
	padding: 0;
}
form {
	width: 75%;
	margin: 0 auto;
	background: rgba(255, 255, 255, 0.7);
	padding: 20px;
	margin-bottom: 40px;
}
label {
	min-width: 100px;
	display: inline-block;
}
</style>
