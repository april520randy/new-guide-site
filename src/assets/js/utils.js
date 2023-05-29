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
  return import.meta.env.VITE_API_URL + "/assets/" + src;
}