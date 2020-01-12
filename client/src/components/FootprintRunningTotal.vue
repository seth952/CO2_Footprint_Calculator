<template lang="html">
  <div class="running-total-container">
      <travel-running-total v-if="travelrunningtotal" :emissionsProp="emissions" :travelProp="travelrunningtotal"/>
      <h3 id="energyrunningtotal">Energy Total:</h3>
      <h3 id="dietrunningtotal">Diet Total:</h3>
      <h2 id="combinedrunningtotal">Combined Running Total:</h2>
    </div>
</template>

<script>

import { eventBus } from '../main.js';
import EmissionFactorsService from '@/services/EmissionFactorsService';
import TravelRunningTotal from './TravelRunningTotal.vue'

export default {
  name: 'footprint-running-total',
  data(){
    return {
      travelrunningtotal: null,
      travelactualrunningtotal: null,
      energyrunningtotal: null,
      dietrunningtotal: null,
      emissions: []
    }
  },
  components:{
    'travel-running-total': TravelRunningTotal
  },

  methods:{
    // getArray(){
    // let travelArray = []
    // this.travelArray.push(this.travelrunningtotal.car * this.emissions[0].travel.car)
    // this.travelArray.push(this.travelrunningtotal.train * this.emissions[0].travel.train)
    // this.travelArray.push(this.travelrunningtotal.plane * this.emissions[0].travel.plane)
},
// sumTravel(someArray){
//   return someArray.reduce((total, travel) => {
//       return total + travel
//   }, 0)
//
// }

  mounted() {

    EmissionFactorsService.getEmissionFactors()
    .then(emissions => this.emissions = emissions)

    // .then(eventBus.$on('running-total-travel', (changeFootprint)=> {
    // this.travelrunningtotal = changeFootprint
    // }))
    // .then(this.testRunningTotal)
    // UserDataService.getUserData()
    // .then(users => this.users = users)


    eventBus.$on('running-total-travel', (changeFootprint)=> {
    this.travelrunningtotal = changeFootprint
    })
      eventBus.$on('running-total-energy', (changeFootprint)=> {
      this.energyrunningtotal = changeFootprint
    })
      eventBus.$on('running-total-diet', (changeFootprint)=> {
      this.dietrunningtotal = changeFootprint
    })
    




    }
  }



</script>

<style lang="css" scoped>
</style>
