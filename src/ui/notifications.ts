export default (tokens: Record<string, any>) => ({
  "notifications.foreground": tokens.color.gray[220],
  "notifications.background": tokens.color.gray[900],
  "notificationToast.border": tokens.color.gray[600],
  "notificationsErrorIcon.foreground": tokens.color.orange[700],
  "notificationsWarningIcon.foreground": tokens.color.orange[400],
  "notificationsInfoIcon.foreground": tokens.color.blue[350],
  "notificationCenter.border": tokens.color.gray[650],
  "notificationCenterHeader.foreground": tokens.color.gray[500],
  "notificationCenterHeader.background": tokens.color.gray[1200],
  "notifications.border": tokens.color.blue[1200],
});
