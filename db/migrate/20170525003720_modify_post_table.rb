class ModifyPostTable < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :original_auth_id, :integer
    add_index :posts, :original_auth_id
  end
end
