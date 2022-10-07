class Match < ApplicationRecord
    belongs_to :user, foreign_key: :user_id, class_name: "User"
    belongs_to :liked_user, foreign_key: :liked_user_id, class_name: "User"
end
