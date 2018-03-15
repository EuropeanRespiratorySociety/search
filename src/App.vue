<template>
  <v-app>
    <site-navigation></site-navigation>
    <search-bar></search-bar>
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
  import SiteFooter from './components/base/SiteFooter'
  import SiteNavigation from './components/base/SiteNavigation'
  import SearchBar from './components/search/SearchBar'
  import { mapActions, mapState } from 'vuex'
  
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
      ...mapState([
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
      },

      ...mapActions([
        'toggleDrawer',
        'searchAll',
        'setQuery',
        'searchByType',
        'resetResults',
        'setActiveTab'
      ]),

      toggle () {
        this.toggleDrawer()
      }
      // onScroll (e) {
      //   let container = document.getElementById('header-t')
      //   this.offsetTop = window.pageYOffset || document.documentElement.scrollTop

      //   if (this.offsetTop > 100 && !this.offline) {
      //     container.classList.remove('transparent')
      //   }

      //   if (this.offsetTop < 100 && !this.offline) {
      //     container.classList.add('transparent')
      //   }
      // }
    },
    components: { SiteFooter, SiteNavigation, SearchBar }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
  @import './css/fonts.css'

  .card--flex-toolbar {
    margin-top: -64px;
  }
</style>
