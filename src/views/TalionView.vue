<template>
  <div class="talion-view">
    <div class="header-bar">
      <span class="close-talion" @click="closeTalion">关闭</span>
      <form class="search" onsubmit="return false">
        <input
         type="search"
         name="query"
         
         />
      </form>
    </div>
  </div>
</template>

<script>
import SubNav from '/src/components/SubNav'

export default {
  name: 'talion-view',
  components: {SubNav},
  data () {
    return {
      queryStr: ''
    }
  },
  methods: {
    closeTalion: function () {
      this.$emit('closeTalion')
    },
    goSearch: function () {
      this.$emit('closeTalion')
      this.$router.push({
        name: 'SearchView',
        params: {
          q: this.queryStr
        }
      })
    }
  }
}
</script>

<style>
</style>
