<template>
  <v-app>
    <site-navigation></site-navigation>
    <transition name="test" mode="out-in">
      <v-content>
        <v-container fluid>
          <v-layout row>
            <router-view></router-view>
          </v-layout>
        </v-container>
      </v-content>
    </transition>

    <site-footer></site-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import SiteFooter from './components/base/SiteFooter.vue'
import SiteNavigation from './components/base/SiteNavigation.vue'

export default {
  name: 'App',
  data () {
    return {
      offsetTop: 0,
      height: 600,
      rightDrawer: false
    }
  },

  computed: {
    ...mapState('base', [
      'drawer',
      'offline'
    ])
  },

  methods: {
    setClass () {
      if (this.offline) {
        return 'error elevation-0'
      }
      return 'primary elevation-0'
    }
  },
  components: { SiteFooter, SiteNavigation }
}
</script>

<style lang="stylus">
  .card--flex-toolbar {
    margin-top: -64px;
  }
</style>
