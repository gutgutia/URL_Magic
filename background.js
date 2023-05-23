chrome.commands.onCommand.addListener(function (command) {
    if (command === "paste-url") {
      chrome.storage.local.get("selectedUrl", function (result) {
        var url = result.selectedUrl;
        if (url) {
          chrome.tabs.executeScript({
            code: "document.activeElement.value += '" + url + "';"
          });
        }
      });
    }
  });
  