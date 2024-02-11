import { useGetHeroDataQuery } from '@/redux/features/layout/layoutApi'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import Loader from '../Loader/Loader'
import { useRouter } from 'next/navigation'

type Props = {}

const Hero: FC<Props> = (props) => {
    const { data, isLoading } = useGetHeroDataQuery("Banner", {});
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSearch = () => {
        if (search === "") {
            return;
        } else {
            router.push(`/courses?title=${search}`);
        }
    }

    return (
        <>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <div className='w-full 1000px:flex items-center'>
                        {/* 1100px:left-[18rem] 1500px:left-[21rem] */}
                        <div className='absolute top-[100px] 1000px:top-[unset] 1500px:h-[700px] 1500px:w-[700px] 1100px:h-[500px] 1100px:w-[500px]  h-[50vh] w-[50vh] hero-animation rounded-[50%]'></div>
                        <div className='1000px:w-[40%] flex 1000px:min-h-screen items-center justify-end pt-[70px] 1000px:pt-[0] z-10'>
                            <Image
                            src={data?.layout?.banner?.image?.url}
                            width={400}
                            height={400}
                            alt=''
                            className='object-contain 1100px:max-w-[90%] 800px:!max-w-[90%] w-[90%] 1500px:max-w-[85%] h-[auto] z-[10]'
                            />
                        </div>
                        {/* 1000px:mt-[0px] */}
                        <div className='1000px:w-[60%] 1500px:w-[60%] flex flex-col items-center text-center 1000px:text-left'>
                            <h2 className='dark:text-white text-[#000000c7] text-[30px] px-3 ml-12 w-full 1000px:text-[70px] 800px:!text-[60px] font-[600] font-Josefin py-2 1000px:leading-[75px]'>
                                {data?.layout?.banner?.title}
                            </h2>
                            {/* 1500px:!w-[55%] 1100px:!w-[70%] */}
                            <p className='dark:text-[#edfff4] ml-12 text-[#000000ac] font-Josefin font-[600] text-[15px] px-3 w-full py-2'>
                                {data?.layout?.banner?.subTitle}
                            </p>
                            <br />
                            {/* 1500px:w-[55%] 1100px:w-[70%] */}
                            <div className='w-[90%] h-[50px] bg-transparent relative'>
                                <input
                                type='search'
                                placeholder='Search Courses...'
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className='bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-{#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-[500] font-Josefin'
                                />
                                <div 
                                    className='absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px]'
                                    onClick={handleSearch}
                                >
                                    <BiSearch className='text-white' size={30} />
                                </div>
                            </div>
                            <br />
                            {/* 1500px:w-[55%] 1100px:w-[70%] */}
                            <div className='w-[90%] flex items-center'>
                                <Image
                                    src={require("../../../public/assets/client-1.jpg")}
                                    alt=''
                                    className='rounded-full h-12 w-12'
                                    style={{border: "3px solid #fff" }}
                                />
                                <Image
                                    src={require("../../../public/assets/client-2.jpg")}
                                    alt=''
                                    className='rounded-full ml-[-20px] h-12 w-12'
                                    style={{border: "3px solid #fff" }}
                                />
                                <Image
                                    src={require("../../../public/assets/client-3.jpg")}
                                    alt=''
                                    className='rounded-full ml-[-20px] h-12 w-12'
                                    style={{border: "3px solid #fff" }}
                                />
                                <p className='font-Josefin dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] font-[600]'>
                                    500k+ People already trusted us.{" "}
                                    <Link
                                    href="/courses"
                                    className='dark:text-[#46e256] text-[crimson]'
                                    >
                                        View Courses
                                    </Link>{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
        
    )
}

export default Hero;