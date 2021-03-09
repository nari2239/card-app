class RecordsController < ApplicationController
  def index
  end

  def new
    @record = Record.new
  end

  def create
    @record = Record.new(record_params)
    if @record.save
      redirect_to root_path
    end
  end

  private
  def record_params
    params.require(:record).permit(:date, :time, :skip, :to_do)
  end
end
