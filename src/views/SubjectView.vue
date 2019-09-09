<template>
  <div class="subject-view has-header">
    <banner title="聊聊你的观影感受"></banner>
    <template v-if="!showLoading">
      <div class="subject-card">
        <h1 class="title">{{ subject.title }}</h1>
        <div class="subject-info">
          <div class="right">
            <a href="#">
              <img v-if="subject.images" :src="subject.images.large" alt="cover" />
            </a>
          </div>
          
          <div class="left" v-if="subject.rating">
            <rating :rating="subject.rating">
              <span slot="ratingsCount">{{ subject.ratings_count }}人评价</span>
            </rating>
            <template v-if="subject.genres && subjectMeta">
              <p class="meta">{{ subjectMeta }}</p>
              <a href="#" class="open-app">用App查看影人资料</a>
            </template>
            <template v-if="subject.author && subjectMeta">
              <p class="meta">{{ subjectMeta }}</p>
              <a href="#" class="buy">在豆瓣购买</a>
            </template>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  
  import Banner from '../components/Banner.vue'
  import Rating from '../components/Rating.vue'
  import Marking from '../components/Marking.vue'
  import Card from '../components/Card.vue'
  import List from '../components/List.vue'
  import Scorller from '../components/Scroller.vue'
  import Tags from '../components/Tags.vue'
  import DownloadApp from '../components/DownloadApp.vue'
  import Loading from '../components/DownloadApp.vue'
  
  export default {
    name: 'subject-view',
    components: {
      Banner,
      Rating,
      Marking,
      Card,
      List,
      Scroller,
      Tags,
      DownloadApp,
      Loading
    },
    data () {
      return {
        showLoading: true,
        isExpand: true,
        items: new Array(5),
      }
    },
    computed: {
      ...mapState({
        subject: state => state.subject.subject,
        adImgUrl: state => state.subject.adImgUrl,
        questions: state => state.subject.questions,
        movieTags: state => state.subject.movieTage,
      }),
      ...mapGetters({
        subjectMeta: 'subjectMeta',
        summary: 'summary',
        genres: 'genres'
      })
    },
    methods: {
      expand: function (event) {
        event
        this.isExpand = false
      }
    },
    created () {
      const id = this.$route.params.id
      const classify = this.$route.params.classify
      
      this.$store.dispatch({
        type: 'getSingleSubject',
        id: id,
        classify: classify
      }).then(res => {
        res
        this.showLoading = false
      })
      
    }
  }
  
</script>

<style>
</style>
