class GenreLikeSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :genre_id
end
