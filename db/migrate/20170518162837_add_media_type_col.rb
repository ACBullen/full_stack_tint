class AddMediaTypeCol < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :media_type, :string
  end
end
