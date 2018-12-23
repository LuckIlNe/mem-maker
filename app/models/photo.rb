class Photo < ApplicationRecord
    has_attached_file :image, styles: { :normal => "500x500>", :thumb => "250x250>" }
    validates_attachment :image,
                    content_type: { content_type: /\Aimage\/.*\z/ },
                    size: { less_than: 1.megabyte }
    def normal
        image.url(:normal)
    end

    def thumb
        image.url(:thumb)
    end
end
