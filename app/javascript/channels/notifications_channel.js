
import consumer from "./consumer"
consumer.subscriptions.create("NotificationsChannel", {
  // Called once when the subscription is created.
  initialized() {
  },
 
  // Called when the subscription is ready for use on the server.
  connected() {
  },
 
  // Called when the WebSocket connection is closed.
  disconnected() {
  },
 
  // Called when the subscription is rejected by the server.
  rejected() {
  },
 
  received(data) {
  },
 
  create() {
  }
})
