const medicalRecordResolvers = require("./medicalRecords");
const userResolvers = require("./users");

module.exports = {
	Query: {
		...medicalRecordResolvers.Query,
	},
	Mutation: {
		...userResolvers.Mutation,
		...medicalRecordResolvers.Mutation,
	},
};
