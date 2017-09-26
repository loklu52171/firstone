<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <foot-nav></foot-nav>
  </div>
</template>

<script type="text/ecmascript-6">
  import footNav from '../components/foot-nav/foot-nav'

  export default {
    components: {
      footNav
    }
  }
</script>

<style lang="scss">

</style>
