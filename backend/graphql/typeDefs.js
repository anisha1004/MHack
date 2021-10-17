const { gql } = require("apollo-server");

module.exports = gql`
	type User {
		id: ID!
		username: String!
		email: String!
		token: String!
		avatar: String!
		createdAt: String!
	}
	type Description {
		desc: String!
	}
	type MedicalRecord {
		username: String!
		name: String!
		address: String!
		phone: String!
		bloodgroup: String!
		weight: String!
		height: String!
		medicalhistory: [Description]
	}
	input DescriptionInput {
		desc: String!
	}
	input RegisterInput {
		username: String!
		password: String!
		confirmPassword: String!
		email: String!
		avatar: String!
	}
	type Query {
		getMedicalRecords(username: String!): MedicalRecord!
	}
	type Mutation {
		register(registerInput: RegisterInput): User!
		login(username: String!, password: String!): User!
		createMedicalRecord(
			name: String!
			address: String!
			phone: String!
			bloodgroup: String!
			weight: String!
			height: String!
			medicalhistory: DescriptionInput
		): MedicalRecord!
	}
`;
