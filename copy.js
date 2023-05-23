chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "copyUrl") {
      var url = document.activeElement.value;
      if (url) {
        chrome.storage.local.set({ "selectedUrl": url });
        sendResponse({ copied: true });
      } else {
        sendResponse({ copied: false });
      }
    }
  });
  