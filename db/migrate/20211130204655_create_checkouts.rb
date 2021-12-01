class CreateCheckouts < ActiveRecord::Migration[6.1]
  def change
    create_table :checkouts do |t|
      t.integer :book_id
      t.integer :user_id
      t.string :due_date

      t.timestamps
    end
  end
end
