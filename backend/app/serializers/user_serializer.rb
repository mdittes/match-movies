class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :email, :image_url
end
