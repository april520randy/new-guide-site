<template>
  <van-swipe class="my-swipe" :autoplay="3000" lazy-render height="160">
    <van-swipe-item
      @click="onClickBanner(item)"
      v-for="item in list"
      :key="item.id"
    >
      <img :src="getImageUrl(item.logo)" />
    </van-swipe-item>
  </van-swipe>
</template>

<script setup>
import { getImageUrl } from "@/assets/js/utils";
defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
const emit = defineEmits(["onClickBanner"]);
const onClickBanner = (item) => {
  emit("onClickBanner", item);
};
</script>

<style lang="scss">
.my-swipe {
  border-radius: 10px;
  overflow: hidden;
  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
