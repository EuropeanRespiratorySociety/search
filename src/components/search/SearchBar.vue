<template>
      <v-toolbar 
      app
      tabs
      fixed
      dark
      color="primary"
      flat
    >
      <v-toolbar-side-icon @click.stop="toggle"></v-toolbar-side-icon>
      <v-text-field
        prepend-icon="search"
        label="Search"
        solo-inverted
        class="mx-3"
        flat
        v-model="query"
        @keyup="search()"
      ></v-text-field>
      <v-tabs
        slot="extension"
        centered
        v-model="tab"
        slider-color="white"
        color="transparent"
        show-arrows
      >
        <v-tab key="all" :href="'#all'" @click="search"
        >
          All ({{counters.all}})
        </v-tab>
        <v-tab key="web" :href="'#web'" @click="search"
        >
          Web ({{counters.web}})
        </v-tab>
        <v-tab key="journals" :href="'#journals'" @click="search"
        >
          Journals ({{counters.journals}})
        </v-tab>
        <v-tab key="congress" :href="'#congress'" @click="search"
        >
          Congress ({{counters.congress}})
        </v-tab>
        <v-tab style="color: #90CAF9!important" disabled key="education"
        >
          Education
        </v-tab>
      </v-tabs>  
    </v-toolbar>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  // import moment from 'moment'
  import debounce from 'lodash/debounce'

  export default {
    name: 'search-results',
    data () {
      return {
        fixed: false
      }
    },

    watch: {
      query: 'search'
    },

    created () {
      const q = this.routeQuery
      q
        ? this.setQuery(q)
        : this.resetResults()
    },

    computed: {
      ...mapGetters([
        'searchQuery',
        'routeQuery',
        'counters',
        'index'
      ]),

      tab: {
        get: function () {
          return this.$store.state.search.i
        },
        set: function (value) {
          this.setActiveTab(value)
        }
      },

      query: {
        get: function () {
          return this.searchQuery
        },
        set: function (value) {
          this.setQuery(value)
        }
      }
    },

    methods: {
      ...mapActions([
        'searchAll',
        'setQuery',
        'searchByType',
        'resetResults',
        'setActiveTab'
      ]),

      search: debounce(function () {
        const i = this.index
        if (this.query.length > 0) {
          this.setActiveTab(i)
          this.searchAll(this.query)
        } else {
          this.setActiveTab(i)
          this.resetResults()
        }
      }, 300)
    }
  }
</script>

<style lang="stylus">
  @import '../../stylus/main'
</style>