export function prefixUrl(url) {
  if (!url) return "";
  if (!url.includes("http")) {
    url = "https://" + url;
  }
  return url;
}

export function getMobilePlatform() {
  if (navigator.userAgent.match(/Android/i)) return "Android";
  if (
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i)
  )
    return "IOS";
  if (navigator.userAgent.match(/Windows Phone/i)) return "Windows Phone";
  return "other";
}

export function getImageUrl(src) {
  if (src.includes("http")) {
    return src;
  } else {
    return import.meta.env.VITE_API_URL + "/assets/" + src;
  }
}

export function isPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
  }
  return flag;
}