<script>
  export default {
    name: 'search-app',
    functional: true,
    render (h, c) {
      const header = require('../search/SearchBar').default
      const results = require('../search/SearchResults').default
      return [h(header), h(results)]
    }
  }
</script>