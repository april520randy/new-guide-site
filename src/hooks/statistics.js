import { showLoadingToast, closeToast } from "vant";

export function statistics(type, url) {
  if (url) {
    showLoadingToast();
  }
  return fetch(`${import.meta.env.VITE_API_URL}/bphyh/page?type=${type}`)
    .then(() => {
      closeToast();
      if (url) {
        window.location.href = url;
      }
    })
    .catch((err) => {
      closeToast();
      if (url) {
        window.location.href = url;
      }
    });
}