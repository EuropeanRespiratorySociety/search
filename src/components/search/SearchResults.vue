<template>

  <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>

    <v-container grid-list-md>
      <v-layout v-if="results" row wrap>
        <v-flex v-for="(post, index) in results" xs12 sm12 :key="post.id">
          <v-card>
            <v-card-text>              
              <h3 class="headline mb-0" v-html="">
                <span v-html="post.title"></span>
                <v-icon style="margin:-5px 0 0 -5px;" color="red" v-if="post.access === 'restricted'">lock_outline</v-icon>
              </h3>
              <span v-if="post.category">
                {{post.category}}
              </span>
              <span v-if="post.authors" v-html="post.authors">
              </span>
            </v-card-text>
            <v-card-actions>
              <v-btn :href="post.url" target="_blank" flat color="primary">Read</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout justify-center v-if="showPagination">
      <v-pagination :length="pages" v-model="page" :total-visible="8"></v-pagination>
    </v-layout>
  </v-flex>
</template>

<script>
  import moment from 'moment'
  import { createNamespacedHelpers } from 'vuex'
  const { mapActions, mapState, mapGetters } = createNamespacedHelpers('search')

  export default {
    name: 'search-toolbar',
    data () {
      return {
        fixed: false
      }
    },

    watch: {
      'page' (value) {
        this.setPageNumber(value)
        this.searchAll()
      }
    },

    computed: {
      ...mapState({
        counters: state => state.counters,
        pageNumber: state => state.pageNumber,
        i: state => state.i
      }),

      ...mapGetters({
        results: 'results'
      }),

      showPagination () {
        return this.results.length >= 10 || this.page > 1
      },

      pages () {
        const index = this.i
        return this.setPages(this.counters[index])
      },

      page: {
        get: function () {
          return this.pageNumber
        },
        set: function (value) {
          this.setPageNumber(value)
        }
      }
    },

    methods: {
      ...mapActions([
        'setPageNumber',
        'searchAll'
      ]),

      setPages (amount) {
        const f = amount => limit => Math.ceil(amount / limit)
        return f(amount)(this.$store.state.base.limit)
      }
    },

    filters: {
      moment: (date) => moment(date).format('MMMM Do YYYY, h:mm:ss a')
    }

  }
</script>

<style lang="stylus">
  @import '../../stylus/main'
  .published {
    font-size:18px!important;
    padding-right:5px;
  }

  .highlight {
    font-weight: bold;
    background-color: yellow;
  }


</style>
