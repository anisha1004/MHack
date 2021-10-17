const mongoose = require("mongoose");

const MedicalRecordSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			unique: true,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
			min: 10,
			max: 10,
		},
		bloodgroup: {
			type: String,
			required: true,
		},
		weight: { type: String, required: true },
		height: { type: String, required: true },
		medicalhistory: [
			{
				desc: {
					type: String,
					//required: true,
				},
			},
		],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("MedicalRecords", MedicalRecordSchema);
