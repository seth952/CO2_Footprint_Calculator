<template>
  <div v-if="breakdown">
    <h2>CO2 Breakdown</h2>
    <h4>Travel</h4>
<<<<<<< HEAD
    <p>Car:{{breakdown.car}}kg CO2e/day</p>
    <p>Train:{{breakdown.train}}kg CO2e/day</p>
    <p>Plane:{{breakdown.plane}}kg CO2e/day</p>
    <p>Total: {{breakdown.travelTotal}}kg CO2e/day</p>
    <h4>Energy</h4>
    <p>Electricity:{{breakdown.electricity}}kg CO2e/day</p>
    <p>Gas:{{breakdown.gas}}kg CO2e/day</p>
    <p>Hybrid:{{breakdown.hybrid}}kg CO2e/day</p>
    <p>Total: {{breakdown.energyTotal}}kg CO2e/day</p>
    <h4>Diet</h4>
    <p>Meat:{{breakdown.meat}}kg CO2e/day</p>
    <p>Veg{{breakdown.veg}}kg CO2e/day</p>
    <p>Total: {{breakdown.dietTotal}}kg CO2e/day</p>
=======
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
>>>>>>> 5ef5c53855bb643f798e91229f8f340ecbebd10b


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
