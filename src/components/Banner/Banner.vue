<template>
  <div class="swipe-wrapper">
    <van-swipe ref="mySwiper" class="my-swipe" :autoplay="3000" lazy-render>
      <van-swipe-item
        @click="onClickBanner(item)"
        v-for="item in list"
        :key="item.id"
      >
        <img :src="getImageUrl(item.logo)" />
      </van-swipe-item>
    </van-swipe>
    <div v-if="isPC()" class="arrows">
      <van-icon class="arrow prev" @click="prev" name="arrow-left" />
      <van-icon class="arrow next" @click="next" name="arrow" />
    </div>
  </div>
</template>

<script setup>
import { getImageUrl,isPC } from "@/assets/js/utils";
import { ref, onMounted } from "vue";
defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
const emit = defineEmits(["onClickBanner"]);
const mySwiper = ref(null);

onMounted(() => {
  console.log(mySwiper.value);
});
const prev = () => {
  mySwiper.value.prev();
};
const next = () => {
  mySwiper.value.next();
};
const onClickBanner = (item) => {
  emit("onClickBanner", item);
};
</script>

<style lang="scss">
.swipe-wrapper {
  position: relative;
  cursor: pointer;
  .arrow {
    position: absolute;
    top: 50%;
    transform: translate3d(0, -50%, 0);
    color: #fff;
    font-size: 28rem;
    &.next{
      right:0;
    }
  }
}
.my-swipe {
  border-radius: 10px;
  overflow: hidden;
  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    text-align: center;
    background-color: #39a9ed;
    cursor: pointer;

    img {
      display: block;
      width: 100%;
    }
  }
}
</style>
