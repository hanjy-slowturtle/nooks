export const useNotification = (title, options) => {
    if (!("Notification" in window)) {
      return;
    }
    const triggerNotification = () => {
      if (Notification.permission !== "granted") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            console.log(title, options);
            new Notification(title, options);
          } else {
            return;
          }
        });
      } else {
        console.log(title, options);
        new Notification(title, options);
      }
    };
    
    return triggerNotification;
};