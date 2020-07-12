class ItemsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "list_#{params[:id]}"
  end
end
