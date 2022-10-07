class GenreSerializer < ActiveModel::Serializer
  attributes :id, :genre, :image, :blurb
  has_many :users
end
