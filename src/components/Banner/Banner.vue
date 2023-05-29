<template>
  <van-swipe class="my-swipe" :autoplay="3000" lazy-render height="220">
    <van-swipe-item
      @click="onClickBanner(item)"
      v-for="item in list"
      :key="item.id"
    >
      <img :src="item.img" />
    </van-swipe-item>
  </van-swipe>
</template>

<script setup>
defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
const emit = defineEmits(['onClickBanner'])
const onClickBanner = (item) => {
  emit('onClickBanner',item)
};
</script>

<style lang="scss" scoped></style>
