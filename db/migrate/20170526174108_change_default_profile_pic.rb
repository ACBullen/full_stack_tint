class ChangeDefaultProfilePic < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :profile_pic, :string, null: false, default: "http://res.cloudinary.com/dadyuehpo/image/upload/v1495820397/letter-t37_mozgvd.jpg"
  end
end
