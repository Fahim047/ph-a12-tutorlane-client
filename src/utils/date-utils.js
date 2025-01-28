export const formatInGlobalDate = (date) => {
	const newDate = new Date(date);
	const formattedDate = new Intl.DateTimeFormat('en-GB', {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
	}).format(newDate);
	return formattedDate;
};
