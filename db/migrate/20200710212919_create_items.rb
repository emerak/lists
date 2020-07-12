class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.references(:list)
      t.text :description
      t.text :status
      t.references(:user)
      t.timestamps
    end
  end
end
