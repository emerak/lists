class ApplicationController < ActionController::Base
  before_action :authenticate_user!

  private

  def set_user
    cookies.encrypted[:user_id] = current_user.id
  end
end
