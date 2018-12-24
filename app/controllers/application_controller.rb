class ApplicationController < ActionController::Base
    before_action :authenticate_user!  

    protect_from_forgery with: :exception
    before_action :configure_permitted_parameters, if: :devise_controller?

    protected

    def configure_permitted_parameters
        # devise_parameter_sanitizer.permit(:sing_up, keys: [:nickname])
        devise_parameter_sanitizer.permit(:sign_up, keys: [:nickname])
        devise_parameter_sanitizer.permit(:account_update, keys: [:nickname])
    end

    private

    def set_locale
        I18n.locale = params[:locale] || I18n.default_locale
    end
    
    def default_url_options(options = {})
        { locale: I18n.locale }.merge options
    end
end


    