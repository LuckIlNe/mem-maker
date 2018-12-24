class Mem < ApplicationRecord
    def lasts_mems
        Mem.new.mems.sort_by { |post| post[:mem].created_at}.to_a.reverse
    end

    def user_mems
        Mem.all.select { |mem| mem.id_user == current_user}
    end

    def mems
        Mem.all.map do |mem|
            date = mem.created_at.strftime("%F %T").gsub(/(\d+)-(\d+)-(\d+)/,"#{$3}.#{$2}.#{$1}")
            {
                mem: mem,
                photo_url: Photo.find_by_id(mem.photo_id).normal,
                nickname: User.find_by_id(mem.user_id).nickname,
                date: date
            }
        end
    end

    def mem(mem)
        date = mem.created_at.strftime("%F %T").gsub(/(\d+)-(\d+)-(\d+)/,"#{$3}.#{$2}.#{$1}")
            {
                mem: mem,
                photo_url: Photo.find_by_id(mem.photo_id).normal,
                nickname: User.find_by_id(mem.user_id).nickname,
                date: date
            }.to_json
    end
end
