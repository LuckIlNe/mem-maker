require 'test_helper'

class MemsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @mem = mems(:one)
  end

  test "should get index" do
    get mems_url
    assert_response :success
  end

  test "should get new" do
    get new_mem_url
    assert_response :success
  end

  test "should create mem" do
    assert_difference('Mem.count') do
      post mems_url, params: { mem: { bottom_text: @mem.bottom_text, context: @mem.context, photo_id: @mem.photo_id, title: @mem.title, top_text: @mem.top_text } }
    end

    assert_redirected_to mem_url(Mem.last)
  end

  test "should show mem" do
    get mem_url(@mem)
    assert_response :success
  end

  test "should get edit" do
    get edit_mem_url(@mem)
    assert_response :success
  end

  test "should update mem" do
    patch mem_url(@mem), params: { mem: { bottom_text: @mem.bottom_text, context: @mem.context, photo_id: @mem.photo_id, title: @mem.title, top_text: @mem.top_text } }
    assert_redirected_to mem_url(@mem)
  end

  test "should destroy mem" do
    assert_difference('Mem.count', -1) do
      delete mem_url(@mem)
    end

    assert_redirected_to mems_url
  end
end
