class ListChannel < ApplicationCable::Channel
  def subscribed
    stream_from "list"
  end
end
