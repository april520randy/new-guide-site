<template>
  <div ref="qrcode" class="qr-code"></div>
</template>
<script setup>
import QRCode from "qrcode2";
import { ref, onMounted } from "vue";
const props = defineProps({
  link: {
    type: String,
    default: "",
  },
  size: {
    type: [String, Number],
    default: 100,
  },
});
const qrcode = ref(null)
onMounted(() => {
  // 生成二维码
  var qrcodeDom = qrcode.value;
  qrcodeDom.innerHTML = "";
  new QRCode(qrcodeDom, {
    text: props.link,
    width: props.size,
    height: props.size,
    colorDark: "#000",
    colorLight: "#fff",
    correctLevel: QRCode.CorrectLevel.H,
  });
});
</script>
