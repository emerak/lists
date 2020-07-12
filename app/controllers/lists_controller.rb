class ListsController < ApplicationController
  before_action :set_user

  def new
    @list = List.new
    @lists = List.all
  end

  def create
    @list = List.new(list_params)
    if @list.save
      body = 'List created :)'
      ActionCable.server.broadcast "list", @list
    else
      body = 'List not created :('
    end

    ActionCable.server.broadcast "notifications", message: body
  end

  def show
    @list = List.find(params[:id])
    @item = Item.new
  end

  private

  def list_params
    params.require(:list).permit(:name)
  end
end
