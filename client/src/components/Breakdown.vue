<template>
  <div v-if="breakdown" class="message-header">
    <article class="accordion" :class="accordionClasses">
      <div class="accordion-header" @click="toggleAccordion">
    <div class="accordion-body">
      <div class="body-content">
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
      </div>
      </div>
    </article>

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
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
      eventBus.$on('handleChange')
      }
    },
  mounted(){
    eventBus.$on('history-pie', (banana) => {
      this.percentage()
    })
  },
  computed: {
    accordionClasses() {
      return {
        'is-closed': !this.isOpen,
        'is-primary': this.isOpen,
        'is-dark': !this.isOpen
      }
    }
},
}
</script>
<style lang="css" scoped>
.accordion {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
}
.accordion-header {
    cursor: pointer;
}
.accordion-body   {
    padding: 0;
    max-height: 200em;
    overflow: hidden;
    transition: 0.3s ease all;
}
.is-closed .accordion-body {
    max-height: 0;
}
.body-content {
    padding: 20px;
}
.message-header{
  cursor: pointer;
}
</style>
