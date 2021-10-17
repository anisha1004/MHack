const { UserInputError } = require("apollo-server");
const MedicalRecord = require("../../models/MedicalRecords");
const checkAuth = require("../../utils/checkAuth");

module.exports = {
	Query: {
		async getMedicalRecords(_, { username }) {
			try {
				const medicalRecord = MedicalRecord.findOne({ username });
				if (medicalRecord) return medicalRecord;
				else throw new Error("Record Not found");
			} catch (err) {
				throw new Error(err);
			}
		},
	},

	Mutation: {
		async createMedicalRecord(
			_,
			{
				name,
				address,
				phone,
				height,
				weight,
				bloodgroup,
				medicalhistory: { desc },
			},
			context
		) {
			const user = checkAuth(context);
			const username = user.username;
			if (name === "") {
				throw new UserInputError("Title Cannot be empty");
			}
			// if (desc.trim() === "") {
			// 	throw new UserInputError("Body cannot be empty");
			// }
			const checkMedicalRecord = MedicalRecord.findOne({ username });
			if (checkMedicalRecord === null) {
				const newMedicalRecord = new MedicalRecord({
					username,
					name,
					address,
					phone,
					height,
					weight,
					bloodgroup,
					medicalhistory: { desc },
				});
				const medicalRecord = await newMedicalRecord.save();
				return medicalRecord;
			} else {
				const newRecord = await MedicalRecord.findOneAndUpdate(
					{ username },
					{
						username,
						name,
						address,
						phone,
						height,
						weight,
						bloodgroup,
						medicalhistory: { desc },
					},
					{ useFindAndModify: false }
				);
				return newRecord;
			}
		},
	},
};
