<template>
  <div class="box-mid" id="sport-list">
    <div
      class="box-item"
      v-for="item in list"
      :class="getTypeClassName(item.btype)"
      :key="item.id"
    >
      <div class="item-h">
        <div>
          <img
            class=""
            :src="getImageUrl(item.logo)"
            alt=""
            style="width: 64rem; height: 62rem; margin-right: 13rem"
          />
        </div>
        <div class="item-h-right">
          <div class="item-name">
            <div class="guan-name">官方</div>
            <div class="main-title">{{ item.bbannerTitle }}</div>
            <div class="main-star">
              <text>强烈推荐：</text>
              <img
                v-for="num in 5"
                :key="num"
                src="@/assets/img/Star@2x.png"
                alt=""
                style="width: 16rem; height: 16rem"
              />
            </div>
          </div>
          <div class="main-gif">
            新人注册即&nbsp;<text>送{{ item.registerHandsel }}元</text>
          </div>
          <div v-if="isBSport(item)" class="main-mes">
            流水+包赔&nbsp;<text>累计可拿{{ item.otherHandsel }}元</text>
          </div>
          <div v-else class="main-mes" style="font-size: 13rem">
            每周<text>{{ item.otherHandsel }}元</text>
          </div>
        </div>
      </div>
      <div class="item-bot">
        <a
          @click="register(item)"
          href="javascript:;"
          :class="item.btype === '2' ? 'black' : ''"
          class="register bot-btn"
          >立即注册</a
        >
        <a
          v-if="!isPC()"
          @click="download(getDownloadUrl(item))"
          href="javascript:;"
          :class="item.btype === '2' ? 'black' : ''"
          class="download bot-btn"
          >APP下载</a
        >
        <van-popover v-else placement="top" v-model:show="item.showPopover">
          <div class="qr-code-wrapper">
            <QrCode :size="150" :link="getDownloadUrl(item)" />
          </div>
          <template #reference>
            <a
              @click="pcDownload(item.showPopover)"
              href="javascript:;"
              :class="item.btype === '2' ? 'black' : ''"
              class="download bot-btn"
              >APP下载</a
            >
          </template>
        </van-popover>
      </div>
    </div>
  </div>
</template>

<script setup>
import QrCode from "@/components/QrCode/QrCode.vue";
import { getImageUrl, isPC, getMobilePlatform } from "@/assets/js/utils";
import { statistics } from "@/hooks/statistics";
defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
const emit = defineEmits(["register", "download"]);
function register(item) {
  emit("register", item);
}
function download(url) {
  emit("download", url);
}
function pcDownload(bool) {
  if (!bool) {
    statistics("download");
  }
}
function isBSport(item) {
  return item.btype !== "1";
}
const getTypeClassName = (type) => {
  switch (Number(type)) {
    case 1:
      return "b-sport";
    case 2:
      return "ml-sport";
    case 3:
      return "bb-sport";
    case 4:
      return "k-sport";
    default:
      return "b-sport";
  }
};

function getDownloadUrl({ bbannerBtnLink, bbannerBtn2Link }) {
  let platform = getMobilePlatform();
  if (platform === "IOS") {
    return bbannerBtnLink;
  } else {
    return bbannerBtn2Link;
  }
}
</script>

<style lang="scss" scoped>
.box-mid {
  .box-item {
    // height: 140rem;
    background-color: #fff;
    border-radius: 15rem;
    margin-top: 15rem;
    padding: 13rem 10rem;
    box-sizing: border-box;

    .item-h {
      display: flex;
      .item-h-right {
        font-size: 13rem;

        .item-name {
          display: flex;
          align-items: center;
          font-weight: 500;
          .main-title {
            margin: 0 8rem;
            font-weight: 600 !important;
            font-size: 17rem;
          }

          .main-star {
            display: flex;
            align-items: center;
            text {
              font-weight: 600;
            }
          }
        }

        .main-gif {
          font-weight: 600;
          font-family: "PingFang SC";

          text {
            color: #ff0000;
          }
        }

        .main-mes {
          font-weight: 600;
          text {
            color: #c03bff;
          }
        }
      }
    }

    .item-bot {
      display: flex;
      justify-content: space-between;
      margin-top: 13rem;
      font-size: 17rem;
      font-weight: 600;

      .bot-btn {
        display: inline-block;
        width: 168rem;
        height: 40rem;
        line-height: 40rem;
        text-align: center;
        border-radius: 5rem;
        border-radius: 15rem;
        color: #fff;
        text-decoration: none;
        &.black {
          color: #000;
        }
      }
    }
    // 公共样式
    .guan-name {
      width: 36rem;
      height: 22rem;
      line-height: 22rem;
      border-radius: 10rem;
      text-align: center;
    }
    .bot-btn {
      background: linear-gradient(180deg, #b63939 0%, #ff4646 100%);
    }
    // b体育单独样式
    &.b-sport {
      .bot-btn {
        background: linear-gradient(180deg, #b63939 0%, #ff4646 100%);
      }
      .guan-name {
        background-color: #ca0101;
        color: #ffffff;
      }
    }
    // 米乐体育单独样式
    &.ml-sport {
      .bot-btn {
        background: linear-gradient(180deg, #ffbb00 0%, #ffd543 100%);
      }
      .guan-name {
        background-color: #000000;
        color: #ffc122;
      }
    }
    // BB体育单独样式
    &.bb-sport {
      .bot-btn {
        background: linear-gradient(180deg, #434e90 0%, #6b7aef 100%);
      }
      .guan-name {
        background-color: #5251b9;
        color: #ffffff;
      }
    }
    // K体育单独样式
    &.k-sport {
      .bot-btn {
        background: linear-gradient(180deg, #155ba0 0%, #47b9eb 100%);
      }
      .guan-name {
        background-color: #154480;
        color: #ffffff;
      }
    }
  }
}
.qr-code-wrapper {
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  padding: 10px;
}
</style>
