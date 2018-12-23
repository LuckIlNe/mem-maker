class CreateMems < ActiveRecord::Migration[5.2]
  def change
    create_table :mems do |t|
      t.string :title
      t.string :context
      t.string :top_text
      t.string :bottom_text
      t.integer :photo_id

      t.timestamps
    end
  end
end
