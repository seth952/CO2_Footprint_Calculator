<template lang="html">
  <div class="div">
    <article class="accordion" :class="accordionClasses">
      <div class="accordion-header" @click="toggleAccordion">
      </div>
      <div class="accordion-body" >
        <div class="body-content">

    <highcharts v-if="chartOptions.series[0].data.length > 0" :options="chartOptions"/>

      <date-history :footprints="footprints" />
    </div>
          </div>
        </article>
</div>
</template>

<script>
import UserDataService from '@/services/UserDataService.js'
import {eventBus} from '@/main.js'
import {Chart} from 'highcharts-vue'
import Highcharts from 'highcharts'
import drilldown from 'highcharts/modules/drilldown'
import DateHistory from './DateHistory';

drilldown(Highcharts)
export default {

  data(){
    return{
      show: true,
        isOpen: false,
      footprints: [],
      chartOptions:{
    chart: {
        type: 'pie'
    },
    title: {

    },
    subtitle: {
        text: 'Click the slices to view a breakdown of your footprint'
    },

    accessibility: {
        announceNewData: {
            enabled: true
        },
        point: {
            valueSuffix: '%'
        }
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of Total Footprint<br/>'
    },

    series: [
        {
            name: "Footprint",
            colorByPoint: true,
            data: [

            ]
        }
    ],
    drilldown: {
        series: [

        ]
    }
}

}
},
  components:{
    highcharts: Chart,
    'date-history': DateHistory
  },
  methods: {
    percentage(footprint){
      let travelPercentage = (footprint.travelTotal / footprint.combinedTotal) * 100
      let energyPercentage = (footprint.energyTotal /footprint.combinedTotal) * 100
      let dietPercentage = (footprint.dietTotal / footprint.combinedTotal) * 100

      //drilldown
      let travelDrillCar = (footprint.car / footprint.travelTotal) * 100
      let travelDrillTrain = (footprint.train / footprint.travelTotal) * 100
      let travelDrillPlane = (footprint.plane / footprint.travelTotal) * 100

      let energyDrillElectriciy = (footprint.electricity / footprint.energyTotal) * 100
      let energyDrillGas = (footprint.gas / footprint.energyTotal) * 100
      let energyDrillHybrid = (footprint.hybrid / footprint.energyTotal) * 100

      let dietDrillMeat = (footprint.meat / footprint.dietTotal) * 100
      let dietDrillVeg = (footprint.veg / footprint.dietTotal) * 100




      this.chartOptions.series[0].data.push({
        name: "Travel",
        y: travelPercentage,
        drilldown: "Travel"
      })
      this.chartOptions.series[0].data.push({
        name: "Energy",
        y: energyPercentage,
        drilldown: "Energy"
      })
      this.chartOptions.series[0].data.push({
        name: "Diet",
        y: dietPercentage,
        drilldown: "Diet"
      })

      this.chartOptions.drilldown.series.push(
        {
            name: "Travel",
            id: "Travel",
            data: [
              ["Car",
              travelDrillCar
              ],
              ["Train",
            travelDrillTrain],
              ["Plane",
            travelDrillPlane]
            ]
        },
        {
          name: "Energy",
          id: "Energy",
          data: [
            ["Electricity",
            energyDrillElectriciy
            ],
            ["Gas",
          energyDrillGas],
            ["Hybrid",
          energyDrillHybrid]
          ]
        },
        {
          name: "Diet",
          id: "Diet",
          data: [
            ["Meat",
            dietDrillMeat
            ],
            ["Veg",
          dietDrillVeg]
          ]
        }
      )

    },
    toggleAccordion() {

    this.isOpen = !this.isOpen;
    // eventBus.$on('topic-clicked', (isOpen) => this.isOpen = false);
  }
  },
  mounted(){
    UserDataService.getUserData()
    .then(footprints => this.footprints = footprints)



    eventBus.$on('footprint-added', (footprint)=> {
      this.footprints.push(footprint)
      this.chartOptions.series[0].data.length = 0
      this.chartOptions.title = {text: `CO2 Footprint for ${footprint.date}`}
      this.percentage(footprint)

    })

    eventBus.$on('form-submit', () => {
      this.toggleAccordion();
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
}

}

</script>

<style lang="css" scoped>
.div {
  /* background-color: lightslategrey; */
  padding: 0px;
  /* margin-top: 80px; */
  /* align-content: flex-end; */
  background-color: white;
  width: 100%;
  scroll-behavior: auto;


}
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
    transition: 5.7s ease all;
    background-color: white;




}
.is-closed .accordion-body {
    max-height: 0px;
}
.body-content {
    padding: 0px;
}
</style>
