class AddColumnUserIdToMems < ActiveRecord::Migration[5.2]
  def change
    add_column :mems, :user_id, :integer
  end
end
