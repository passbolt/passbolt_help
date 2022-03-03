function CookiebotCallback_OnAccept() {
  if (Cookiebot.consent.statistics) {
    enableStatisticsCookies();
  } else {
    disableStatisticsCookies();
  }
}
function CookiebotCallback_OnDecline() {
  if (!Cookiebot.consent.statistics) {
    disableStatisticsCookies();
  }
}
function enableStatisticsCookies() {
  _paq.push(['setCookieConsentGiven']);
}
function disableStatisticsCookies() {
  _paq.push(['forgetCookieConsentGiven']);
}