class CreateEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :entries do |t|
      t.string :entry_type
      t.float :amt
      t.string :description
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
