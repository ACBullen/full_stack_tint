# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  profile_pic     :string           default("http://www.drodd.com/images15/letter-t37.jpg"), not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :session_token, :password_digest, presence: true
  validates :username, :session_token, uniqueness: true

  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token
  after_create :gen_self_follow

  def self.find_by_credentials(username, pw)
    @user = User.find_by(username: username)
    return nil unless @user

    if @user.is_password?(pw)
      return @user
    else
      nil
    end
  end

  def password=(pw)
    @password = pw

    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end


  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def gen_self_follow
    Follow.create({follower_id: self.id, followee_id: self.id})
  end

  has_many :posts

  has_many :likes

  has_many :liked_posts,
    through: :likes,
    source: :post

  has_many :follows,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :Follow

  has_many :followings,
    primary_key: :id,
    foreign_key: :followee_id,
    class_name: :Follow


  has_many :followed_users,
    through: :follows,
    source: :followee

    has_many :followers,
      through: :followings,
      source: :follower
end
