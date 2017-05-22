class Like < ApplicationRecord
  validates :user_id, :post_id, presence: true
  validates :username, uniqueness: { scope: :post_id }

  belongs_to :user

  belongs_to :post
end
