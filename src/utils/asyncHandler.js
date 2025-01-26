const asyncHandler = (fn) => {
	return async (...args) => {
		try {
			return await fn(...args);
		} catch (error) {
			console.error('An error occurred:', error);
			throw error;
		}
	};
};

export { asyncHandler };
