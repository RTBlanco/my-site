class CreateQrCodes < ActiveRecord::Migration[8.0]
  def change
    create_table :qr_codes do |t|
      t.string :path
      t.integer :hits
      t.string :description

      t.timestamps
    end
  end
end
