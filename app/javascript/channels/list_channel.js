import consumer from "./consumer"
import $ from "jquery"

$(document).ready(function() {
  const list_name = $('#list_name')

  if (list_name == undefined) { return; }

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

    received(data) {
      if (data) {
        const list = $("#lists")

        switch(data.operation) {
          case 'remove':
            $(list).find(`#${data.id}`).remove()
            break;
          default:
            const url = `/lists/${data.id}`
            const item = `
              <div class="card mt-2" id="${data.id}">
                <div class="card-content">
                  <p class="title">
                    ${data.name}
                  </p>
                </div>
                <footer class="card-footer">
                  <p class="card-footer-item">
                    <span class="icon is-medium">
                      <a href="${url}">
                        <i class="fas fa-plus"></i>
                      </a>
                    </span>
                  </p>
                  <p class="card-footer-item">
                    <span class="icon is-medium">
                      <a href="${url}" data-method="patch">
                        <i class="fas fa-edit"></i>
                      </a>
                    </span>
                  </p>
                  <p class="card-footer-item">
                    <span class="icon is-medium">
                      <a href="${url}" data-method="delete">
                        <i class="fas fa-trash-alt"></i>
                      </a>
                    </span>
                  </p>
                </footer>
              </div>
            `
            $(lists).append(item)

        }
      }
    }
  })
})
