<template>
  <div class="container" :class="isPC() ? 'is-pc' : 'is-h5'">
    <!-- banner -->
    <Banner
      v-if="bannerList.length"
      @onClickBanner="onClickBanner"
      :list="bannerList"
    />
    <!-- 体育列表 -->
    <SportList
      @download="download"
      @register="register"
      v-if="sportList.length"
      :list="sportList"
    />

    <!-- AI预测 -->
    <AIAssert />
    <!-- 自动滚动 -->
    <AutoScroll />
    <!-- 活动列表 -->
    <ActivityList
      v-if="activityList.length"
      @onClickActivity="onClickActivity"
      :list="activityList"
    />
    <!-- loading -->
    <Loading v-if="loading" />
  </div>
</template>
<script setup>
import { prefixUrl, isPC } from "@/assets/js/utils";
import SportList from "@/components/SportList/SportList";
import AIAssert from "@/components/AIAssert/AIAssert";
import ActivityList from "@/components/ActivityList/ActivityList";
import Loading from "@/components/Loading/Loading";
import "vant/es/toast/style";
import { ref, onMounted } from "vue";
import { showToast } from "vant";
import { statistics } from "@/hooks/statistics";

const BASE_URL = import.meta.env.VITE_API_URL;
const ERR_OK = 200;
const loading = ref(false);
const bannerList = ref([]);
const sportList = ref([]);
const activityList = ref([]);

onMounted(async () => {
  // 统计页面浏览次数
  statistics("init");
  showLoading();
  try {
    const { code, data } = await fetchBannerList();

    if (code === ERR_OK) {
      bannerList.value = data.records.filter((item) => item.phyStatus);
    }
    const res = await fetchSportList();
    if (res.code === ERR_OK) {
      let list = res.data.records || [];
      console.log(list);
      list = list.filter((item) => item.bstatus); // 可见
      list.sort((a, b) => a.sort - b.sort); // 排序
      sportList.value = list;
    }
  } catch (err) {
    console.log(err.message);
    showToast("获取数据失败");
  }
  hideLoading();

  try {
    const res2 = await fetchActivityList();
    if (res2.code === ERR_OK) {
      let list = res2.data.records || [];

      activityList.value = list.filter((item) => item.actBannerStatus);
    }
  } catch (err) {
    console.log(err.message);
    showToast("获取数据失败");
  }
});
// 获取轮播列表
function fetchBannerList() {
  let url = `${BASE_URL}/bphyh`;
  return fetch(url).then((res) => res.json());
}
// 获取体育列表
function fetchSportList() {
  let url = `${BASE_URL}/bphy`;
  return fetch(url).then((res) => res.json());
}
// 获取活动列表
function fetchActivityList() {
  let url = `${BASE_URL}/phyact`;
  return fetch(url).then((res) => res.json());
}
// 点击轮播banner
const onClickBanner = (item) => {
  console.log(item);
  if (item.bannerTopLink) {
    window.location.href = prefixUrl(item.bannerTopLink);
  }
};

// 统计，点击注册
function register(item) {
  let url = prefixUrl(item.bbannerBtn);
  statistics("register", url);
}
function download(url) {
  url = prefixUrl(url);
  statistics("download", url);
}

// 点击活动
const onClickActivity = (item) => {
  if (item.actBannerBtnLink) {
    window.location.href = prefixUrl(item.actBannerBtnLink);
  }
};

function showLoading() {
  loading.value = true;
}
function hideLoading() {
  loading.value = false;
}
</script>
<style lang="scss"></style>
<style lang="scss">
.container {
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
  padding: 50rem 12rem 55rem;
  background: url("@/assets/img/headbg.png") no-repeat center top;
  background-size: 100%;
  background-attachment: fixed;
  &.is-pc {
    background: rgb(213, 240, 251);
    padding-top: 10rem;
  }
}
</style>
