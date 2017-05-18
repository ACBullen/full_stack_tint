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
  validates :post_type, inclusion: { in: ["text", "quote", "audio", 'video', "image", "link"] }, allow_nil: true
  validates :media_type, inclusion: { in: ["audio", "video", "image"] }, allow_nil: true

  belongs_to :user
end
