// import Model from "../models/model";

export const getUsers = async (req, res) => {
	try {
		let filteredUsers = [];

		res.status(200).send({ users: filteredUsers })
	}	catch (err) {
		console.log("Error in getUsers controller", err.message);
		res.status(500).send({ error: "Internal Server Error" });
	}
};
