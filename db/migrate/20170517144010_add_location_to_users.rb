class AddLocationToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :location_id, :integer
  end
end
