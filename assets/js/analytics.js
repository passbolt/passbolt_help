$(document).ready(() => {
  new CookiesEuBanner(function () {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-23506466-1', {'allowAdFeatures': false, 'anonymizeIp': true});
  }, true);
});
