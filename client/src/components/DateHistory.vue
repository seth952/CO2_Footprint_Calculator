<template>
  <div class="">
    <select id="dateHistory">
      <option v-for="(foot, index) of footprints" :key="index" :value="foot">
        Previous entry: {{foot.name}}
        </option>

      </select>


    </div>
  </template>
  <script>
  import {eventBus} from '../main.js';
  import HotelService from '@/services/UserDataService';
  export default {
    props: ['footprints']

  }
  </script>
  <style lang="scss" scoped>
  </style>
