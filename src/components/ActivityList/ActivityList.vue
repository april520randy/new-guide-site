<template>
  <!-- <div class="activity-list">
    <div
      @click="onClickActivity(item)"
      class="item"
      v-for="item in list"
      :key="item.id"
    >
      <img :src="item.img" alt="" />
    </div>
  </div> -->
  <div class="box-itemr">
    <div
      @click="onClickActivity(item)"
      class="item"
      v-for="item in list"
      :key="item.id"
    >
      <div id="bottom-title1">{{ getTitle(item.title) }}</div>
      <div id="bottom-btn1" class="item-btn btn-color">立即领取</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
const emit = defineEmits(["onClickActivity"]);
const onClickActivity = (item) => {
  emit("onClickActivity", item);
};
const getTitle = (title) => {
  if (title) {
    title = title.replace(/(\d+%*)/g, '<span  style="color:#FF0000">$&</span>');
  }
  return title;
};
</script>

<style lang="scss" scoped>
.box-itemr {
  box-sizing: border-box;
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42rem;
    line-height: 42rem;
    background: #ffffff;
    box-shadow: 0 0 4rem rgba(0, 0, 0, 0.25);
    border-radius: 12rem;
    margin-top: 16rem;
    font-weight: 600;
    font-size: 17rem;
    padding: 0 4rem 0 10rem;

    .item-btn {
      width: 99rem;
      height: 32rem;
      line-height: 32rem;
      text-align: center;
      border-radius: 10rem;
      color: #fff;
    }
  }

  .btn-color {
    background: linear-gradient(180deg, #6ba4fb 0%, #358aff 100%);
  }

  .btn-color-two {
    background: linear-gradient(180deg, #7c79fc 0%, #5c67fd 100%);
  }
}
</style>
