class User < ApplicationRecord
  validates :username, :session_token, :password_digest, presence: true
  validates :username, :session_token, uniqueness: true

  attr_reader :password

  after_initialize :ensure_session_token

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
end
