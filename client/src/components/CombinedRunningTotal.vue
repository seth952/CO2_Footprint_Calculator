<template lang="html">
    <div class="">
      <h4>Combined Total:{{ combinedTotal }}</h4>
    </div>
</template>

<script>
import TravelRunningTotal from '@/components/TravelRunningTotal'
import EnergyRunningTotal from '@/components/EnergyRunningTotal'
import DietRunningTotal from '@/components/DietRunningTotal'
import { eventBus } from '../main.js';

export default {
  name: 'combined-running-total',
  data() {
    return {
      travelTotal: 0,
      energyTotal: 0,
      dietTotal: 0
    }
  },
  mounted(){
    eventBus.$on('travel-calculated', result => this.travelTotal = result)
    eventBus.$on('energy-calculated', result => this.energyTotal = result)
    eventBus.$on('diet-calculated', result => this.dietTotal = result)

  },
  computed:{
    combinedTotal(){
      return this.dietTotal + this.energyTotal + this.travelTotal
    }
  }
}

</script>

<style lang="css" scoped>
</style>
