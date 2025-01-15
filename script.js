chrome.runtime.onInstalled.addListener(() => {
    console.log("extension is installed");
        //sending a notifictaion
        chrome.notifications.create("notify", {
        type: "basic",
        iconUrl: "icon.jpeg",
        title: "motivational notify",
        message: "Keep going You are unstoppable!!🚀"
    }, () => {
    if (chrome.runtime.lastError) {
      console.error("Notification Error:", chrome.runtime.lastError.message);
    } else {
      console.log("Notification created successfully!");
    }
  });
  
});
