chrome.action.onClicked.addListener((tab) => {
  chrome.windows.create({
    url: "index.html",
    type: "popup",
    width: 600,
    height: 400,
  });
});
