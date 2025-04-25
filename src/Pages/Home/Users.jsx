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

        <div className='mb-28 w-4/5 mx-auto'>
            <h2 className="text-4xl text-[#F97D5E] darkDamagetext-[#87CEEB] font-bold mb-8 text-center" data-aos="fade-right" data-aos-duration="2000">
                {text} <Cursor />
            </h2>

            <div className='md:flex justify-center gap-x-12'>

                <div className='shadow-[4px_4px_10px_rgba(0,0,0,0.35)] darkDamageshadow-[1px_1px_8px_#f97d5e] darkDamageshadow-[1px_1px_8px_#87CEEB] p-12 rounded-xl darkDamagetext-[#87CEEB] border-b-8 border-[#F97D5E]' data-aos="fade-left"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000">
                    {
                        isLoadingTotal ? <LoadingSpinner></LoadingSpinner> :
                            <div className='text-center'>
                                <h3 className='text-3xl font-semibold'> Total Users </h3>
                                <p className='font-black text-3xl'> {TotalUsers} </p>
                            </div>
                    }
                </div>

                <div className='shadow-[4px_4px_10px_rgba(0,0,0,0.35)] darkDamageshadow-[1px_1px_8px_#f97d5e] darkDamageshadow-[1px_1px_8px_#87CEEB] p-12 rounded-xl darkDamagetext-[#87CEEB] border-b-8 border-[#F97D5E]' data-aos="fade-down"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000">
                    {
                        isLoadingSubscribed ? <LoadingSpinner></LoadingSpinner> :
                            <div className='text-center'>
                                <h3 className='text-3xl font-semibold'> Exclusive Users </h3>
                                <p className='font-black text-3xl'> {subscribedUsers} </p>
                            </div>
                    }
                </div>

                <div className='text-center shadow-[4px_4px_10px_rgba(0,0,0,0.35)] darkDamageshadow-[1px_1px_8px_#f97d5e] darkDamageshadow-[1px_1px_8px_#87CEEB] p-12 rounded-xl darkDamagetext-[#87CEEB] border-b-8 border-[#F97D5E]' data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000">
                    <h3 className='text-3xl font-semibold'> Normal Users </h3>
                    <p className='font-black text-3xl'> {normalUsers} </p>
                </div>
            </div>


        </div>
    );
};

export default Users;