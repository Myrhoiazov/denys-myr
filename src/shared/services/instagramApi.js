import {API} from './http';

const getAllMedia = async () => {
	const {data} = await API.get('/');
	return data;
};

export const instgramApi = {
	getAllMedia,
};
