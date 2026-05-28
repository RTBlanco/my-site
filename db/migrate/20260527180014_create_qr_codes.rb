class CreateQrCodes < ActiveRecord::Migration[8.0]
  def change
    create_table :qr_codes do |t|
      t.integer :hits, default: 0
      t.string :description

      t.timestamps
    end
  end
end
