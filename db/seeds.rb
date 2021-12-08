# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Checkout.destroy_all
Book.destroy_all
User.destroy_all


20.times do
    Book.create!(title: Faker::Book.title, author: Faker::Book.author, genre: Faker::Book.genre, description: Faker::Quote.yoda)
end

20.times do
    User.create!(first_name: Faker::Name.first_name, password: Faker::Name.last_name)
end

20.times do
    Checkout.create!(book_id: Book.ids.sample, user_id: User.ids.sample, due_date: Faker::Date.forward(days: 14) )
end

puts "done seeding"

