<template>
    <v-navigation-drawer
      app
      v-model="drawer"
      light
      :mini-variant.sync="mini"
      disable-route-watcher
    >

      <v-toolbar flat class="transparent" :style="!mini? 'margin-bottom:10px;' : ''">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <i v-if="mini && showMini" class="icon-ers icon" style="font-size:50px; color:#d0043c;"></i>
            </v-list-tile-avatar>
            <v-list-tile-content style="height:130px;padding: 10px 0">
              <v-list-tile-title style="height:100px;margin-top:30px">
              <div class="text-xs-center">
                <i class="icon-ers icon" style="font-size:80px; color:#d0043c;"></i>
              </div>
              </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn v-if="showMini" icon @click.native.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pa-1">
        <v-list-tile v-if="mini && showMini" @click.native.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list dense class="pt-3">
      <span v-for="item in items" :key="item">
        <v-list-tile
          v-if="(
            !item.group && (item.private && isAuthenticated)
            || (!item.group && !item.private))"
          :key="item.title"
          :to="!item.external ? item.path : null"
          :href="item.external ? item.path : null"
        >
          <v-list-tile-action :class="item.icon.length > 1 ? 'inline' : ''">
            <v-icon v-for="icon in item.icon" :key="icon">{{ icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-list-tile-sub-title v-if="item.subtitle"> {{ item.subtitle }} </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-group
          v-model="item.active"
          v-if="item.group"
          :key="item.title"
          :prepend-icon="item.icon"
          no-action
        >
        <v-list-tile
          slot="activator"
          :to="!item.external ? item.path : null"
          :href="item.external ? item.path : null"
          >
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-list-tile-sub-title v-if="item.subtitle"> {{ item.subtitle }} </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile
          v-for="subItem in item.items"
          :key="subItem.title"
          :to="!item.external ? `${item.path}${subItem.path}` : null"
          :href="item.external ? item.path : null"
        >
          <v-list-tile-action :class="subItem.icon.length > 1 ? 'inline' : ''">
            <v-icon v-for="icon in subItem.icon" :key="icon">{{ icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            <v-list-tile-sub-title v-if="subItem.subtitle"> {{ subItem.subtitle }} </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
      </span>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import paths from '@/router/paths'
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
    ...mapActions('base', [
      'setDrawer'
    ])
  },

  computed: {
    ...mapGetters('authentication', [
      'isAuthenticated'
    ]),

    showMini () {
      return this.$store.state.base.showMini
    },

    drawer: {
      get () {
        return this.$store.state.base.drawer
      },
      set (value) {
        this.setDrawer(value)
      }
    }
  }

}
</script>

<style>
  @import '../../css/fonts.css';

  .logo-title {
    height: 112px !important;
  }

  .navigation-drawer {
    max-height:100% !important;
  }

  .inline {
    display: block;
  }
</style>
