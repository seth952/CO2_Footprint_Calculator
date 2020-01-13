<template lang="html">

</template>

<script>
import UserDataService from '@/services/UserDataService.js'
import {eventBus} from '@/main.js'
export default {

  data(){
    return{
      footprints: []
    }
  },
  mounted(){
      UserDataService.getUserData()
      .then(footprints => this.footprints = footprints)

      eventBus.$on('footprint-added', (footprint)=> {
        this.footprints.push(footprint)
      })
  }
}
</script>

<style lang="css" scoped>
</style>
