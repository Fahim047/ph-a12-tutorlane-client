import axiosPublic from '../api/axios';

export const getUserByEmail = async (email) => {
	try {
		const response = await axiosPublic(`/users?email=${email}`);
		return response.data;
	} catch (err) {
		console.error(err);
		throw err;
	}
};
