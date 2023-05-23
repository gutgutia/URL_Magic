document.addEventListener("DOMContentLoaded", function () {
    chrome.storage.local.get("urls", function (result) {
      var urls = result.urls || [];
      var urlList = document.getElementById("url-list");
      urls.forEach(function (url) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = "#";
        a.textContent = url;
        a.addEventListener("click", function () {
          chrome.storage.local.set({ "selectedUrl": url });
          window.close();
        });
        li.appendChild(a);
        urlList.appendChild(li);
      });
    });
  });
  