class AddCommentsCol < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :comments, :text
  end
end
