class Book < ApplicationRecord
    has_many :users
    has_many :users, through: :checkouts
end
