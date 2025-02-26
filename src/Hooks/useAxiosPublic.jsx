import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://server-three-indol-46.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;