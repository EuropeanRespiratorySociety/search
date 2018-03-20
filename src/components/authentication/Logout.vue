<template>
    <v-btn 
      v-text="isAuthenticated ? 'Logout' : 'Login'"
      @click="submit"
      flat
    >
    </v-btn>
  </v-container>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'logout',
    data () {
      return {
      }
    },

    computed: {
      ...mapGetters('authentication', [
        'isAuthenticated'
      ])
    },

    methods: {
      ...mapActions('authentication', [
        'logout'
      ]),

      submit () {
        this.isAuthenticated
          ? this.logout()
          : this.$router.push({path: '/login'})
      }
    }

  }
</script>

<style lang="stylus">
  @import '../../stylus/main'
</style>