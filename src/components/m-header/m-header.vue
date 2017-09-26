<template>
    <div class="header">
        <div href="#" class="header_left">
            <span class="chengshi">郑州</span>
            <i class="xiala iconfont icon-xiala1"></i>
        </div>
        <div href="#" class="header_middle">
            <i class="shousuo iconfont icon-sousuo"></i>
            <input class="searchbox" type="search" placeholder="搜索一下">
            <i class="cexiao"></i>
        </div>
        <div href="#" class="header_right">
            <span class="hongdian"></span>
            <i class="lingdao iconfont icon-line-ling-sm"></i>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style scoped lang="scss">
  .header{
    background: #1bbc9b;
    line-height:0.9rem;
    height: 0.9rem;
    display: flex;
    padding-bottom:0.2rem;
    box-sizing: border-box;
    justify-content:space-around;
    align-items: center;
    .header_left{
      color: #fff;
      height: 0.9rem;
      .chengshi{font-size: 0.28rem;vertical-align: middle;}
      .xiala{display:inline-block;margin-left:-0.28rem;font-size: 0.22rem;vertical-align: middle;}
    }
    .header_middle{
      display: flex;
      margin-top: 0.24rem;
      box-sizing: border-box;
      justify-content:space-around;
      margin-top: 0.24rem;
      height: 0.6rem;
      background-color: #fff;
      border-radius: 0.2rem;
      align-items: center;
      .shousuo{
        font-size: 0.3rem;
        text-indent: 0.1rem;
        padding-top: 0.04rem;
      }
      .searchbox{
        border-radius: 0.1rem;
        width: 3.6rem;
        height: 0.4rem;
        font-size: 0.24rem;
        text-indent: 0.1rem;
      }
      .cexiao{
        font-size: 0.3rem;
      }
    }
    .header_right{
      position: relative;
      color: #fff;
      .lingdao{
        font-size: 0.36rem;
      }
      .hongdian{
        width: 0.16rem;
        height: 0.16rem;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        left: 0.2rem;
        top: 0.48rem;
        display: inline-block;
      }
    }
  }
</style>