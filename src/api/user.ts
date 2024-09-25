import { apiUrl } from './apiUrl';
import service from '@/uitls/request';

export const getUserInfo = async (params?: any) => {
	return await service.get(apiUrl.user.getUserInfo, { params: params });
};