<template lang="html">
  <div class="running-total-container">
      <h3 id="travelrunningtotal">Travel Total:</h3>
      <h3 id="energyrunningtotal">Energy Total:</h3>
      <h3 id="dietrunningtotal">Diet Total:</h3>
      <h2 id="combinedrunningtotal">Combined Running Total:</h2>
    </div>
</template>

<script>

import { eventBus } from '../main.js';
import EmissionFactorsService from '@/services/EmissionFactorsService';

export default {
  name: 'footprint-running-total',
  data(){
    return {
      travelrunningtotal: [],
      energyrunningtotal: [],
      dietrunningtotal: [],
      combinedrunningtotal: [],
      emissions: [],

    }
  },

  mounted() {
    EmissionFactorsService.getEmissionFactors()
    .then(emissions => this.emissions = emissions)
    // UserDataService.getUserData()
    // .then(users => this.users = users)

      eventBus.$on('running-total', (changeFootprint)=> {
      this.travelrunningtotal.push(changeFootprint)
    })
    }
  }



</script>

<style lang="css" scoped>
</style>
