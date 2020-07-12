class ListChannel < ApplicationCable::Channel
  def subscribed
    stream_from "list"
  end

  def follow(data)
    stream_from "list_#{data['id']}"
  end
end
