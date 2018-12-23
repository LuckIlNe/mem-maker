require "application_system_test_case"

class MemsTest < ApplicationSystemTestCase
  setup do
    @mem = mems(:one)
  end

  test "visiting the index" do
    visit mems_url
    assert_selector "h1", text: "Mems"
  end

  test "creating a Mem" do
    visit mems_url
    click_on "New Mem"

    fill_in "Bottom text", with: @mem.bottom_text
    fill_in "Context", with: @mem.context
    fill_in "Photo", with: @mem.photo_id
    fill_in "Title", with: @mem.title
    fill_in "Top text", with: @mem.top_text
    click_on "Create Mem"

    assert_text "Mem was successfully created"
    click_on "Back"
  end

  test "updating a Mem" do
    visit mems_url
    click_on "Edit", match: :first

    fill_in "Bottom text", with: @mem.bottom_text
    fill_in "Context", with: @mem.context
    fill_in "Photo", with: @mem.photo_id
    fill_in "Title", with: @mem.title
    fill_in "Top text", with: @mem.top_text
    click_on "Update Mem"

    assert_text "Mem was successfully updated"
    click_on "Back"
  end

  test "destroying a Mem" do
    visit mems_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Mem was successfully destroyed"
  end
end
