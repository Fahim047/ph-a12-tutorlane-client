import axiosPublic from '../api/axios';
import { asyncHandler } from './asyncHandler';

export const getUserByEmail = async (email) => {
	try {
		const response = await axiosPublic(`/users?email=${email}`);
		return response.data;
	} catch (err) {
		console.error(err);
		throw err;
	}
};
export const getTeacherRequests = asyncHandler(async () => {
	const response = await axiosPublic.get('/admin/teacher-requests');
	return response.data;
});
// export const getTeacherRequestByEmail = asyncHandler(async()=>{
//   const response = await axiosPublic.get('/teachers/teacher-requests');
// 	return response.data;
// })
// export const getTeachRequestByUserId = asyncHandler(async(userId)=>{
//   const response = await axiosSecure.get(`/users/teach-request?userId=${userId}`)
// })
