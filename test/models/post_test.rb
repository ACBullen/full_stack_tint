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

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
