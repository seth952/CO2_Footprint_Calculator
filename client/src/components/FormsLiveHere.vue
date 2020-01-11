<template lang="html">

</template>

<script>
import EmissionFactorsService from '@/services/EmissionFactorsService.js'
import UserDataService from '@/services/UserDataService'

export default {
  name: 'test',
  data(){
    return {
      emissions: [],
      users: []
    }
  },
  mounted() {
    EmissionFactorsService.getEmissionFactors()
    .then(emissions => this.emissions = emissions)
    UserDataService.getUserData()
    .then(users => this.users = users)


  }
}
</script>

<style lang="css" scoped>
</style>
