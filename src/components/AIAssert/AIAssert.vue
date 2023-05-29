<template>
  <div class="wrapper">
    <div class="tipline">
      <img
        src="@/assets/img/Group 6@2x.png"
        alt=""
        style="width: 102rem; height: 17rem"
      />
      <text class="tip-title">Al预测</text>
      <img
        src="@/assets/img/GroupR@2x.png"
        alt=""
        style="width: 102rem; height: 17rem"
      />
    </div>
    <div class="tipnote">
      智能AI大数据分析，花更少的时间获取最新赛事，涵盖各种推荐，最全最劲爆的赛事供您投注：五大联赛，欧冠，世界杯，NBA红单胜率高达90%
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 20rem;
  margin-bottom: 16rem;
  .tipline {
    display: flex;
    align-items: center;
    text-align: center;
    height: 22rem;
    line-height: 22rem;
    font-size: 20rem;
    font-weight: 600;
    padding: 0 32rem;

    .tip-title {
      display: block;
      margin: 0 18rem;
      color: #6b7aef;
    }
  }

  .tipnote {
    margin: 8rem 0 17rem 0;
    font-weight: 400;
    font-size: 15rem;
    color: #666666;
  }
}
</style>
