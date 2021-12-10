class User < ApplicationRecord
    has_many :checkouts, dependent: :destroy
    has_many :books, through: :checkouts
    # validates :username, presence: true
end
