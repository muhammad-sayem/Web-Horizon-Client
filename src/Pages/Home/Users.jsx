import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import CountUp from 'react-countup';


const Users = () => {
    const [text] = useTypewriter({
        words: ["Our Users"],
        loop: 0
    });

    const axiosPublic = useAxiosPublic();

    const { data: TotalUsers, isLoading: isLoadingTotal } = useQuery({
        queryKey: ['totalUsers'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/users/count');
            return data.count;
        }
    });

    const { data: subscribedUsers, isLoading: isLoadingSubscribed } = useQuery({
        queryKey: ['subscribedUsers'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/users/subscribed');
            return data.count;
        }
    });

    let normalUsers = TotalUsers - subscribedUsers;

    // console.log(TotalUsers);

    return (

        <div className='mb-12 md:mb-20 lg:mb-32 w-3/5 mx-auto'>
            {/* <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#5a45ce] font-bold mb-8 text-center" data-aos="fade-right" data-aos-duration="1500"> {text} <Cursor /> </h2> */}

            <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#5a45ce] font-bold mb-8 text-center" data-aos="fade-right" data-aos-duration="1500"> Our Users </h2>

            <div className='lg:flex justify-center gap-x-12 space-y-6 md:space-y-0'>

                <div className='lg:w-1/3 shadow-[4px_4px_10px_rgba(0,0,0,0.35)] px-2 py-12 rounded-xl border-b-8 border-[#5a45ce]' data-aos="fade-left"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500">
                    {
                        isLoadingTotal ? <LoadingSpinner></LoadingSpinner> :
                            <div className='text-center'>
                                <h3 className='text-3xl font-semibold'> Total Users </h3>
                                <p className='font-black text-3xl'> {TotalUsers} </p>
                            </div>
                    }
                </div>

                <div className='lg:w-1/3 shadow-[4px_4px_10px_rgba(0,0,0,0.35)] px-2 py-12 rounded-xl border-b-8 border-[#5a45ce]' data-aos="fade-down"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500">
                    {
                        isLoadingSubscribed ? <LoadingSpinner></LoadingSpinner> :
                            <div className='text-center'>
                                <h3 className='text-3xl font-semibold'> Exclusive Users </h3>
                                <p className='font-black text-3xl'> {subscribedUsers} </p>
                            </div>
                    }
                </div>

                <div className='lg:w-1/3 text-center shadow-[4px_4px_10px_rgba(0,0,0,0.35)] px-2 py-12 rounded-xl border-b-8 border-[#5a45ce]' data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500">
                    <h3 className='text-3xl font-semibold'> Normal Users </h3>
                    <p className='font-black text-3xl'> {normalUsers} </p>
                </div>
            </div>


        </div>
    );
};

export default Users;