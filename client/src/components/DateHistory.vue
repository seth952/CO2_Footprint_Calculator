<template>
  <div class="">
    <select @change="handleChange" v-model="selectedDate">
      <option v-for="(foot, index) of footprints" :key="index" :value="foot">
        Previous Entry: {{foot.date}}
        </option>

      </select>



      <breakdown :breakdown="selectedDate"/>
    </div>
  </template>
  <script>
  import Breakdown from './Breakdown';
  import {eventBus} from '../main.js';
  import HotelService from '@/services/UserDataService';
  export default {
    props: ['footprints'],
    data(){
      return{
        selectedDate: null
      }
    },
      components:{
        'breakdown': Breakdown
      },

    methods: {
      handleChange(e){
      eventBus.$emit('selected-date', this.selectedDate)
    }
  }
}

  </script>
  <style lang="scss" scoped>
  </style>
