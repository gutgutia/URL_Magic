document.addEventListener("click", function (event) {
    var target = event.target;
    if (target.nodeName === "INPUT" || target.nodeName === "TEXTAREA") {
      chrome.runtime.sendMessage({ action: "getFieldUrl" });
    }
  });
  