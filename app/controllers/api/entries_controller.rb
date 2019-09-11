class Api::EntriesController < ApplicationController
  def index
    render json: current_user.entries.order(created_at: :desc)
  end

  def create
    entry = current_user.entries.new(entry_params)
    if entry.save
      render json: entry
    else
      binding.pry
    end
  end

  private
    def entry_params
      params.require(:entry).permit(:amt, :description, :entry_type)
    end
end
