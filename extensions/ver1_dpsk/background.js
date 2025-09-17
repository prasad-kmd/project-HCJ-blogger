// Add custom header to all requests to your blog
chrome.webRequest.onBeforeSendHeaders.addListener(
  function (details) {
    // Add our custom header to identify extension users
    details.requestHeaders.push({
      name: "X-Premium-Access",
      value: "true",
    });

    return { requestHeaders: details.requestHeaders };
  },
  { urls: ["https://yourblog.com/*"] },
  ["blocking", "requestHeaders"]
);
