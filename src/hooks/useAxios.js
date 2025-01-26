import axios from 'axios';

const axiosSecure = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});
const useAxios = () => {
	return { axiosSecure };
};
export default useAxios;
