<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/home">
      <span class="tab-link">首页</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/shop">
      <span class="tab-link">好店</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/discount">
      <span class="tab-link">优惠</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/personal">
      <span class="tab-link">个人</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="scss">

  .tab{
    display: flex;
    height: 0.44rem;
    line-height: 0.44rem;
    font-size: 0.18rem;
    .tab-item{
      flex: 1;
      text-align: center;
      .tab-link{
        padding-bottom: 0.05rem;
        color: yellow;
      } 
      &.router-link-active{
        .tab-link{
          color:red;
          border-bottom: 2px solid red;
        }
      }
    }  
  }
    
</style>