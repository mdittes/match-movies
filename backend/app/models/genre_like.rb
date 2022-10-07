class GenreLike < ApplicationRecord
    belongs_to :genre, foreign_key: :genre_id, class_name: "Genre"
    belongs_to :user, foreign_key: :user_id, class_name: "User"
end
