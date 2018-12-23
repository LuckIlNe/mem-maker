require 'test_helper'

class PostsControllerTest < ActionDispatch::IntegrationTest
  test "should get lasts" do
    get posts_lasts_url
    assert_response :success
  end

  test "should get popular" do
    get posts_popular_url
    assert_response :success
  end

end
