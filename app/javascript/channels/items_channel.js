import consumer from "./consumer"
import $ from "jquery"

$(document).ready(function() {
  const list_id = $('#list').data("list");

  if (list_id == undefined) { return; }

  consumer.subscriptions.create({channel: "ItemsChannel", id: `${list_id}`}, {
    // Called once when the subscription is created.
    initialized() {
    },

    // Called when the subscription is ready for use on the server.
    connected() {
    },

    received(data) {
      if (data) {
        switch(data.operation) {
          case 'remove':
            const list = $("#list")

            $(list).find(`#${data.id}`).remove()
            break;
          default:
            const url = `/lists/${data.list_id}/items/${data.id}`
            debugger
            const item = `
              <div class="card mt-2" id="${data.id}">
                <div class="card-content">
                  <p class="title">
                    ${data.description}
                  </p>
                </div>
                <footer class="card-footer">
                  <p class="card-footer-item">
                    <span class="icon is-medium">
                      <a href="${url}" data-method="patch">
                        <i class="fas fa-trash-alt"></i>
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
            $('#cards').append(item)

        }

      }
    }
  })
})

