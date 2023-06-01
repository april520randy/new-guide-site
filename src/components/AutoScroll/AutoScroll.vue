<template>
  <div class="tiplist">
    <div class="list-title">B体育Al(精准大数据)</div>
    <!-- 赛事列表 -->
    <div class="table-wrapper">
      <div class="head">
        <span>比赛时间</span>
        <span>比赛队伍</span>
        <span>AI预测</span>
        <span>赛果</span>
      </div>
      <div class="list-wrapper">
        <div class="s-list">
          <template v-for="num in 2" :key="num">
            <div class="item">
              <p>05-09 09:35</p>
              <p>阿森纳 0-1 曼联</p>
              <p class="result">曼联不败</p>
              <p class="guess">预测正确</p>
            </div>
            <div class="item">
              <p>05-11 17:00</p>
              <p>尤文图斯 2-1 多特蒙德</p>
              <p class="result">尤文图斯不败</p>
              <p class="guess">预测正确</p>
            </div>
            <div class="item">
              <p>05-13 18:30</p>
              <p>多特蒙德 0-1 毕尔巴鄂</p>
              <p class="result">多特蒙德净胜1球以上</p>
              <p class="guess">预测正确</p>
            </div>
            <div class="item">
              <p>05-17 10:30</p>
              <p>水晶宫 0-1 热刺</p>
              <p class="result">热刺独赢</p>
              <p class="guess"></p>
            </div>
            <div class="item">
              <p>05-19 16:00</p>
              <p>西班牙人 0-1 巴萨罗那</p>
              <p class="result">西班牙人不败</p>
              <p class="guess">预测正确</p>
            </div>
            <div class="item">
              <p>05-23 16:35</p>
              <p>AC米兰0-1国际米兰</p>
              <p class="result">双方总进球数少于3球</p>
              <p class="guess">预测正确</p>
            </div>
            <div class="item">
              <p>05-24 12:00</p>
              <p>皇家马德里 0-1 巴萨罗那</p>
              <p class="result">巴萨罗那不败</p>
              <p class="guess"></p>
            </div>
            <div class="item">
              <p>05-25 15:30</p>
              <p>拜仁 2-1 皇家马德里</p>
              <p class="result">双方总进球大于3球</p>
              <p class="guess">预测正确</p>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.tiplist {
  .list-title {
    height: 36rem;
    line-height: 36rem;
    text-align: center;
    background: linear-gradient(180deg, #7b79fd 0%, #5e68fe 100%);
    border-radius: 15rem 15rem 0 0;
    color: #fff;
    font-size: 15rem;
  }
  .table-wrapper {
    overflow: hidden;
    border-bottom: 0;
    border-right: 0;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0 0 15rem 15rem;
    padding-bottom: 10px;
    font-size: 13rem;
    .head {
      display: flex;
      span {
        flex: 1;
        text-align: center;
        padding: 0 5rem;
        font-weight: 600;
        line-height: 40px;
        font-size: 12rem;
      }
    }
    .list-wrapper {
      height: 220rem;
      overflow: hidden;
      .s-list {
        animation: scrollAnimation 20s linear infinite;
        .item {
          display: flex;
          // height: 55px;
          p {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2rem 4rem;
            margin: 0;
            font-size: 12rem;
            &.result {
              background: #6a70fe;
              border-radius: 10rem;
              margin-bottom: 5rem;
              color: #fff;
            }
            &.guess {
              color: #ff4646;
            }
          }
        }
      }
    }
  }
}
@keyframes scrollAnimation {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, -50%, 0);
  }
}
</style>
