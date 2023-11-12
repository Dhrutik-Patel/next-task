import axiosInstance from '@/helper/axios';

export const getTasks = async () => {
    try {
        const response = await axiosInstance.get('/api/tasks');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getTask = async (id) => {
    try {
        const response = await axiosInstance.get(`api/tasks/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const addTask = async (task) => {
    try {
        const response = await axiosInstance.post('/api/tasks', task);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const updateTask = async (task) => {
    try {
        const response = await axiosInstance.put(`/api/tasks/${task.id}`, task);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteTask = async (id) => {
    try {
        const response = await axiosInstance.delete(`/api/tasks/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
