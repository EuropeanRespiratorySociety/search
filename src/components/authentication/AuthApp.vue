<script>
  import SimpleHeader from '@/components/base/SimpleHeader'
  import Login from '@/components/authentication/Login'
  import UserProfile from '@/components/authentication/UserProfile'
  import { mapGetters } from 'vuex'

  export default {
    name: 'search-app',

    render (h) {
      const tag = this.isAuthenticated ? 'user-profile' : 'login'
      return h('div', {
        style: {
          width: '100%'
        }
      }, [h('simple-header'), h(tag)])
    },

    computed: {
      ...mapGetters('authentication', [
        'isAuthenticated'
      ])
    },

    components: {SimpleHeader, Login, UserProfile}
  }
</script>