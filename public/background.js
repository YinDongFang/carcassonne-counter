chrome.action.onClicked.addListener((tab) => {
  chrome.windows.create({
    url: "index.html",
    type: "popup",
    width: 750,
    height: 500,
  });
});
