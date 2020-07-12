import consumer from "./consumer"
import $ from "jquery"

consumer.subscriptions.create("ListChannel", {
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

  follow() {
    const list_id = $('#list').data('list');
    this.perform('follow', {
      id: list_id
    });

  },
 
  received(data) {
    console.log(data)
    const list = `<li>${data.name}</li>`
    $('#lists').append(list)
  },
 
  create() {
    const list_id = $('#list').data('list');
    this.perform('follow', {
      id: list_id
    });
  }
})
