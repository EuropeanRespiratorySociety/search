<template>
    <v-navigation-drawer
        app
        v-model="drawer"
        light
        :mini-variant="mini"
        disable-route-watcher
        >
        <div class="ml-5 mt-3">
            <i class="icon-ers icon" style="font-size:150px; color:#d0043c;"></i>
          <!--<img src="../../assets/logo-top.png" width="200" height="112" />-->
        </div>

        <!-- <v-list class="pa-1">
          <v-list-tile v-if="mini" @click.stop="mini = !mini">
            <v-list-tile-action>
              <v-icon>chevron_right</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list> -->

      <v-list dense class="pt-3">
        <v-list-group
            v-model="item.active"
            v-for="item in items"
            :key="item.title"
            :prepend-icon="item.icon"
            no-action
          >
        <v-list-tile slot="activator" :to="item.path">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile v-for="subItem in item.items" :key="subItem.title" @click="" :to="`${item.path}${subItem.path}`">
          <v-list-tile-action>
            <v-icon>{{ subItem.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>  
      </v-list>
    </v-navigation-drawer>
</template>

<script>
  import { mapActions } from 'vuex'
  import paths from '../../router/paths'
  // reminder this.$vuetify.breakpoint.mdAndUp -> let you know the size of screen (bool)

  export default {
    name: 'site-navigation',
    data () {
      return {
        mini: false,
        items: paths,
        right: null
      }
    },

    methods: {
      ...mapActions([
        'setDrawer'
      ])
    },

    computed: {
      drawer: {
        get: function () {
          return this.$store.state.drawer
        },
        set: function (value) {
          this.setDrawer(value)
        }
      }
    }

  }
</script>

<style lang="stylus">
  @import '../../stylus/main'
  .logo-title {
    height: 112px !important;
  }

  .navigation-drawer {
    max-height:100% !important
  }
</style>
