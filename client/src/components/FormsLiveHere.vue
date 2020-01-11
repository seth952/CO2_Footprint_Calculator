<template>
  <div class="forms" v-on:submit.prevent="handleSubmit">
    <form class="" action="index.html" method="post">
      <div id="travel-form">
        <h3>Travel</h3>
        <p>Enter miles traveled by:</p>
        <label for="car">Car:</label>
        <input type="text" name="car" @change="handleChange" v-model="car">
        <br>
        <label for="train">Train:</label>
        <input type="text" name="train" v-model="train">
        <br>
        <label for="plane">Plane:</label>
        <input type="text" name="plane" v-model="plane">
      </div>
      <div id="energy-form">
        <h3>Energy</h3>
        <p>Enter kilowatts used:</p>
        <label for="electricity">Electricity:</label>
        <input type="text" name="electricity" v-model="electricity">
        <br>
        <label for="gas">Gas:</label>
        <input type="text" name="gas" v-model="gas">
        <br>
        <label for="hybrid">Hybrid:</label>
        <input type="text" name="hybrid" v-model="hybrid">
      </div>
      <div id="diet-form">
        <h3>Diet</h3>
        <p>Enter kg eaten in:</p>
        <label for="meat">Meat:</label>
        <input type="text" name="meat" v-model="meat">
        <br>
        <label for="veg">Veg:</label>
        <input type="text" name="veg" v-model="veg">
      </div>
    </form>
    <br>
    <button type="button" name="Submit">Submit</button>


  </div>
</template>
<script>
import EmissionFactorsService from '@/services/EmissionFactorsService.js';
import { eventBus } from '../main.js';
export default {
  name: "forms-live-here",
  data(){
    return{
      car: '',
      train: '',
      plane: '',
      electricity: '',
      gas: '',
      hybrid: '',
      meat: '',
      veg: ''
    }
  },
  methods: {
  handleSubmit(){
    const newFootprint = {
      car: this.car,
      train: this.train,
      plane: this.plane,
      electricity: this.electricity,
      gas: this.gas,
      hybrid: this.hybrid,
      meat: this.meat,
      veg: this.veg
      }

    // UserDataService.post(newFootprint)
    // .then((footprint) => {
    //   eventBus.$emit('emission-added', emission);
    //   this.car = this.train = this.plane = this.electricity = this.gas = this.hybrid = this.meat = this.veg ;
    // });
  },

  handleChange(){
    const changeFootprint = {
      car: this.car
      }

      eventBus.$emit('running-total', changeFootprint);


  }


}
}
</script>
<style lang="scss" scoped>
</style>
