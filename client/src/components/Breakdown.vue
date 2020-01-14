<template>
  <div v-if="breakdown">
    <h2>CO2 Breakdown</h2>
    <h4>Travel</h4>
    <p>Car: {{breakdown.car}} miles</p>
    <p>Train: {{breakdown.train}} miles</p>
    <p>Plane: {{breakdown.plane}} miles</p>
    <p>Total: {{breakdown.travelTotal}} CO2e</p>
    <h4>Energy</h4>
    <p>Electricity: {{breakdown.electricity}} kilowatts</p>
    <p>Gas:{{breakdown.gas}} kilowatts</p>
    <p>Hybrid:{{breakdown.hybrid}} kilowatts</p>
    <p>Total: {{breakdown.energyTotal}} CO2e</p>
    <h4>Diet</h4>
    <p>Meat: {{breakdown.meat}} lbs</p>
    <p>Veg: {{breakdown.veg}} lbs</p>
    <p>Total: {{breakdown.dietTotal}} CO2e</p>


  </div>
</template>
<script>
import Result from './Result.vue'
import {eventBus} from '@/main.js'
import {Chart} from 'highcharts-vue'
import Highcharts from 'highcharts'
import drilldown from 'highcharts/modules/drilldown'
drilldown(Highcharts)
export default {
  props: ['breakdown', 'chartProp'],
  mounted(){
    eventBus.$on('history-pie', (banana) => {
      this.percentage()
    })
  }
}
</script>
<style lang="scss" scoped>
</style>
