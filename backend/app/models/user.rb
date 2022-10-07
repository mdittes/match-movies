class User < ApplicationRecord
    has_many :genre_likes, dependent: :destroy
    has_many :genres, through: :genre_likes
    has_many :matches, dependent: :destroy
    has_many :liked_users, through: :matches
    has_many :liked_matches, foreign_key: :liked_user_id, class_name: "Match"
    has_many :likers, through: :liked_matches, source: :user

    has_secure_password
    validates :username, uniqueness: { case_sensitive: false }
    validates :username, presence: true
    validates :email, presence: true


    #method returns array of genres' names that user likes (or entire genre instance if you remove ".name")
    def by_genre
        self.genres.map do |genre|
            genre.name
        end
    end

    #method returns array of users' names that user likes (or entire user instance if you remove ".name")
    def by_user
        self.liked_users.map do |user|
            user.username
        end
    end

    #method returns array of users' names that like user (or entire user instance if you remove ".name")
    def by_liker
        self.likers.map do |user|
            user.username
        end
    end

    #method returns array of users' names that user likes (or entire user instance if you remove ".name")
    def by_liked_user
        self.liked_users.map do |user|
            user.username
        end
    end

    #method returns array of users' names that like user (or entire user instance if you remove ".name")
    def by_liked_liker
        self.likers.map do |user|
            user.username
        end
    end

    #method returns array of genres' names that user likes (or entire genre instance if you remove ".name")
    def by_liked_genre
        self.liked_genres.map do |genre|
            genre.name
        end
    end

end
