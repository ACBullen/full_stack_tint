class AddReblogPostIDtoPosts < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :rb_post_id, :integer
    add_index :posts, :rb_post_id
  end
end
