import axiosInstance from '@/helper/axios';

export const signup = async (user) => {
    try {
        const response = await axiosInstance.post('/api/users', user);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const login = async (user) => {
    try {
        const response = await axiosInstance.post('/api/login', user);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
