chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension is installed");
  //creating alarms to send notification periodically
  chrome.alarms.create("notifyAlarm",{
    delayInMinutes: 1,  // Start after 1 minute
    periodInMinutes: 1  // Repeat every 1 minute
  })

});

//listening for alarms
chrome.alarms.onAlarm.addListener((alarm) => {
  if(alarm.name === "notifyAlarm"){
    sendNotifications();
  }
})


function sendNotifications(){
  //creating a notification
  chrome.notifications.create("Notify",{
    type: "basic",
    iconUrl: "icon.jpeg",
    title: "Motivational msg",
    message: "Keep going Man You CAN!!🚀"
  }, (notificationId) => {
    console.log("Notification sent with ID:", notificationId);
  })
}