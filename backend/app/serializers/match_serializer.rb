class MatchSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :liked_user_id
end
