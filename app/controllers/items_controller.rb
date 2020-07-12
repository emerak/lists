# frozen_string_literal: true

class ItemsController < ApplicationController
  def create
    @list = List.find(params[:list_id])
    @item = @list.items.build(item_params)
    @item.user = current_user

    if @item.save
      ActionCable.server.broadcast "list_#{@item.list_id}", @item
    end
  end

  def destroy
    @list = List.find(params[:list_id])
    @item = @list.items.find(params[:id])

    if @item.destroy
      ActionCable.server.broadcast "list_#{@item.list_id}", operation: :remove, id: @item.id
    end
  end

  private

  def item_params
    params.require(:item).permit(:description)
  end
end
