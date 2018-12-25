class Mem < ApplicationRecord
    def self.lasts_mems
        Mem.mems.sort_by { |post| post[:mem].created_at}.to_a.reverse
    end

    def self.user_mems
        Mem.all.select { |mem| mem.id_user == current_user}
    end

    def self.mems
        Mem.all.map do |mem|
            date = mem.created_at.strftime("%F %T").gsub(/(\d+)-(\d+)-(\d+)/,"#{$3}.#{$2}.#{$1}").to_s
            {
                mem: mem,
                photo_url: Photo.find_by_id(mem.photo_id).normal,
                nickname: User.find_by_id(mem.user_id).nickname,
                date: date
            }
        end
    end

    def mem
        date = self.created_at.strftime("%F %T").gsub(/(\d+)-(\d+)-(\d+)/,"#{$3}.#{$2}.#{$1}")
        mem = {
                mem: self,
                photo_url: Photo.find_by_id(self.photo_id).normal,
                nickname: User.find_by_id(self.user_id).nickname,
                date: date
        }.to_json
        
    end
end
