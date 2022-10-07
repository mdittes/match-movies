class Genre < ApplicationRecord
    has_many :genre_likes
    has_many :users, through: :genre_likes

    #method returns array of users' names who like that genre (or entire user instance if you remove ".name")
    def by_user
        self.users.map do |user|
            user.username
        end
    end
end
