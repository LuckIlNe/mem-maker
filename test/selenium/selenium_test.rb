# frozen_string_literal: true

require 'json'
require 'selenium-webdriver'
require 'test/unit'

PASSWORD = '111111'
USER_NICKNAME = 'selenium'
USER_EMAIL = 'selenium@gmail.com'
PASSWORD.freeze
USER_NICKNAME.freeze
USER_EMAIL.freeze

class Registration < Test::Unit::TestCase
  def setup
    @driver = Selenium::WebDriver.for :chrome
    @base_url = 'http://localhost:3000/'
    @accept_next_alert = true
    @driver.manage.timeouts.implicit_wait = 30
    @verification_errors = []
  end

  def teardown
    @driver.quit
    assert_equal [], @verification_errors
  end

  test '1 registration' do
    @driver.get(@base_url + 'users/sign_in')
    @driver.find_element(:link, 'Sign up').click
    assert element_exists?(:link, 'Log in')
    @driver.find_element(:id, 'user_nickname').clear
    @driver.find_element(:id, 'user_nickname').send_keys USER_NICKNAME
    @driver.find_element(:id, 'user_email').clear
    @driver.find_element(:id, 'user_email').send_keys USER_EMAIL
    @driver.find_element(:id, 'user_password').clear
    @driver.find_element(:id, 'user_password').send_keys PASSWORD
    @driver.find_element(:id, 'user_password_confirmation').clear
    @driver.find_element(:id, 'user_password_confirmation').send_keys PASSWORD
    @driver.find_element(:name, 'commit').click
    assert element_exists?(:link, 'Add Photos')
  end

  test '2 sign in' do
    log_in
  end

  test '3 check Photo' do
    log_in
    @driver.find_element(:link, 'Add Photos').click
    assert element_exists?(:link, 'New Photo')
  end

  test '4 create mem' do
    log_in
    @driver.find_element(:link, 'My Memes').click
    @driver.find_element(:link, 'New meme').click
    @driver.find_element(:class, 'selected').click 
    @driver.find_element(:id, 'mem_title').clear
    @driver.find_element(:id, 'mem_title').send_keys "Test mem"
    @driver.find_element(:id, 'mem_context').clear
    @driver.find_element(:id, 'mem_context').send_keys "Тесты Тесты Тесты"
    @driver.find_element(:id, 'top').clear
    @driver.find_element(:id, 'top').send_keys "Tests Tesr"
    @driver.find_element(:id, 'bot').clear
    @driver.find_element(:id, 'bot').send_keys "Tests Tesr"
    @driver.find_element(:name, 'commit').click
    assert element_exists?(:link, 'Edit')
  end

  test '5 check Posts' do
    log_in
    @driver.find_element(:link, 'Posts').click
    @driver.find_element(:name, 'commit').click
    assert element_exists?(:class, "card")
  end

  test '6 sign out' do
    log_in
    @driver.find_element(:link, 'Sign out').click
    assert element_exists?(:link, 'Log in')
  end

  private

  def log_in
    sleep 1
    @driver.get(@base_url)
    @driver.find_element(:link, 'Log in').click
    assert element_exists?(:link, 'Log in')
    @driver.find_element(:id, 'user_email').clear
    @driver.find_element(:id, 'user_email').send_keys USER_EMAIL
    @driver.find_element(:id, 'user_password').clear
    @driver.find_element(:id, 'user_password').send_keys PASSWORD
    @driver.find_element(:name, 'commit').click
    assert element_exists?(:link, 'Add Photos')
  end

  def element_present?(how, what)
    @driver.find_element(how, what)
    true
  rescue Selenium::WebDriver::Error::NoSuchElementError
    false
  end

  def element_exists?(how, what)
    !10.times do
      break if begin
                  element_present?(how, what)
               rescue StandardError
                 false
                end

      sleep 1
    end
  end
end
