<template>
  <div class="movie-view has-header">
    <scroller title="影院热映" type="hasCover" :items="hotMovies"></scroller>
    <scroller title="免费在线观影" type="hasCover" :items="topMovies"></scroller>
    <scroller title="新片速递" type="hasCover" :items="newMovies"></scroller>
    <scroller title="发现好电影" type="onlyString" :items="movieTags"></scroller>
    <types></types>
    <download-app></download-app>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  
  import Scroller from '../components/Scroller.vue'
  import Types from '../components/Types.vue'
  import DownloadApp from '../components/DownloadApp.vue'
  
  export default {
    name: 'movie-view',
    components: { Scroller, Types, DownloadApp },
    data () {
      return {}
    },
    computed: {
      ...mapState({
        hotMovies: state => state.movie.hotMovies,
        topMovies: state => state.movie.topMovies,
        newMovies: state => state.movie.newMovies,
        movieTags: state => state.movie.movieTags
      })
    },
    methods: {
      getMovie: function () {
        this.$store.dispatch('getMovie')
      }
    },
    created () {
      this.getMovie()
    }
  }
</script>

<style scoped>
</style>
