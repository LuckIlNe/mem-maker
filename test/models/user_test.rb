require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test 'should not create user' do
    user = User.new
    assert !user.save
  end

  test 'should find user' do
    assert User.exists?(email: 'test@test.com')
  end

  test 'should not save with same fields' do
    user = User.new
    user.email = 'test@test.com'
    assert !user.save
  end
end
