require 'test_helper'

class MemTest < ActiveSupport::TestCase
  #test 'should not create mem' do
  #  mem = Mem.new
  #  assert !mem.save
  #end

  test 'should find mem' do
    assert Mem.exists?(title: 'MyString')
  end

  #test 'should not save with same fields' do
  #  user = Mem.new
  #  user. = 'test@test.com'
  #  assert !user.save
  #end
end
