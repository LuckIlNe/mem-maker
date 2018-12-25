require 'test_helper'

class PhotosControllerTest < ActionDispatch::IntegrationTest

  setup do
    sign_in users(:one)
    @photo = photos(:two)
    #@photo.image = fixture_file_upload 'logo1.jpg'
    photo = fixture_file_upload 'logo1.jpg'
      assert_difference('Photo.count') do
        post photos_url, params: { photo: { image: photo, title: @photo.title } }
    end
  end

  test "should get index" do
    get photos_url
    assert_response :success
  end

  test "should get new" do
    get new_photo_url
    assert_response :success
  end

  test "should create photo" do
  
      assert_redirected_to photo_url(Photo.last)
    end


  test "should show photo" do
    sign_in users(:one)
    get photo_url(@photo)
    assert_response :success
  end

  test "should destroy photo" do
    assert_difference('Photo.count', -1) do
      delete photo_url(@photo)
  end

    assert_redirected_to photos_url
  end
end
