<template>
  <div class="movie-view has-header">
    <scorller title="最受关注图书 | 虚构类" type="hasCover" :items="novel"></scorller>
    <scorller title="最受关注图书 | 非虚构类" type="hasCover" :items="reality"></scorller>
    <scorller title="豆瓣纸书" type="hasCover" :items="travel">
      <div class="promItem" slot="promItem">
        <img class="cover" src="../assets/book_zw.jpg" alt="">
        <div class="content">
          <span class="price">￥68</span>
          <p class="name">造物</p>
          <p class="info">改变世界的万物图典，3000幅图里的发明与冒险</p>
        </div>
      </div>
    </scorller>
    <scorller title="发现好书" type="onlyString" :items="bookTags"></scorller>
    <types></types>
    <download-app></download-app>
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

<style scoped>
.promItem {
  overflow: hidden;
  margin: 1.6rem 1.8rem 0.8rem 1.6rem;
}

.cover {
  float: left;
  width: 10rem;
  margin-right: 1.5rem;
}

.content {
  margin-left: 1rem;
}

.name {
  font-size: 2rem;
  color: #494949;
  margin: 1rem;
  max-width: 100%;
  line-height: 2.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}

.price {
  float: right;
  color: #E76648;
  font-size: 1.6rem;
  line-height: 2.2rem;
}

.info {
  font-size: 1.3rem;
  font-weight: 300;
  line-height: 1.5;
  color: #9B9B9B;
}
</style>
