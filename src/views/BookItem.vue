<template>
  <div class="movie-view has-header">
    <scorller title="最受关注图书 | 虚构类" type="hasCover" :items="novel"></scorller>
    <scorller title="最受关注图书 | 非虚构类" type="hasCover" :items="reality"></scorller>
    <scorller title="豆瓣纸书" type="hasCover" :items="travel">
      
    </scorller>
    
  </div>
</template>

<script>
import {mapState} from 'vuex'

import Scorller from '../components/Scroller'
import Types from '../components/Types'
import DownloadApp from '../components/DownloadApp'

export default {
  name: 'book-view',
  components: {Scorller, Types, DownloadApp},
  data () {
    return {}
  },
  computed: {
    ...mapState({
      novel: state => state.book.novel,
      reality: state => state.book.reality,
      travel: state => state.book.travel,
      bookTags: state => state.book.bookTags
    })
  },
  methods: {
    getBook: function () {
      this.$store.dispatch('getBook')
    }
  },
  created () {
    this.getBook()
  }
}

</script>

<style>
</style>
