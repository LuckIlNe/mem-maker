class PostsController < ApplicationController
  def lasts
    respond_to do |format|
        format.html
        format.json do
            render json:
            { type: 'response', value: Mem.new.lasts_mems.sort_by  }
        end
    end
  end


  def popular
  end
end
