# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  post_type  :string           not null
#  title      :string
#  body       :text
#  link_url   :string
#  media_link :string
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  validates :user_id, :post_type, presence: true

  validates :post_type, inclusion: { in: ["text", "quote", "audio", 'video', "image", "link", "reblog"] }, allow_nil: true
  validates :media_type, inclusion: { in: ["audio", "video", "image", "none", ''] }, allow_nil: true

  belongs_to :original_author,
    primary_key: :id,
    foreign_key: :original_auth_id,
    class_name: :User,
    optional: true

  belongs_to :user

  has_many :likes

  has_many :liking_users,
    through: :likes,
    source: :user
end
