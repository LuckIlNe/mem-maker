class Mem < ApplicationRecord
    def lasts_mems
        Mem.new.mems.sort_by { |post| post[:mem].created_at}.to_a.reverse
    end

    def user_mems
        Mem.all.select { |mem| mem.id_user == current_user}
    end

    def mems
        Mem.all.map do |mem|
            {
                mem: mem,
                photo_url: Photo.find_by_id(mem.photo_id).normal,
                nickname: User.find_by_id(mem.user_id).nickname
            }
        end
    end
end
