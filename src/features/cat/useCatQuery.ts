import { useQuery } from '@tanstack/react-query';

const getCatPic = async () => {
	const res = await fetch('https://api.thecatapi.com/v1/images/search');
	if (!res.ok) {
		throw new Error('Не получилось получить кота');
	}
	const data = await res.json();
	console.log(data);
	return data[0].url;
};

export const useCatQuery = () => {
	return useQuery({
		queryKey: ['cat'],
		queryFn: getCatPic,
		enabled: false,
		placeholderData: './black-cat.jpg',
	});
};
