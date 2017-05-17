class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.string :post_type, null: false
      t.string :title
      t.text :body
      t.string :link_url
      t.string :media_link
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :posts, :user_id
  end
end
