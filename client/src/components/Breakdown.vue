<template>
  <div v-if="breakdown">
    <h2>CO2 Breakdown</h2>
    <h4>Travel</h4>
    <p>Car:{{breakdown.car}}</p>
    <p>Train:{{breakdown.train}}</p>
    <p>Plane:{{breakdown.plane}}</p>
    <p>Total: {{breakdown.travelTotal}}</p>
    <h4>Energy</h4>
    <p>Electricity:{{breakdown.electricity}}</p>
    <p>Gas:{{breakdown.gas}}</p>
    <p>Hybrid:{{breakdown.hybrid}}</p>
    <p>Total: {{breakdown.energyTotal}}</p>
    <h4>Diet</h4>
    <p>Meat:{{breakdown.meat}}</p>
    <p>Veg{{breakdown.veg}}</p>
    <p>Total: {{breakdown.dietTotal}}</p>

    
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
