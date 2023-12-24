'use client'
import React from 'react';
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import Heading from '@/app/utils/Heading';
import DashboardHero from '@/app/components/Admin/DashboardHero';
import EditCategories from '../../components/Admin/Customization/EditCategories';

type Props = {}

const page = ({ params }: any) => {
    const id = params?.id;

    return (
        <div>
            <Heading
                title='ELearning - Admin'
                description='ELearning is a platform for students to learn and get help from teachers'
                keywords='Programming,MERN,Redux,Machine Learning'
            />
            <div className='flex'>
                <div className='1500px:w-[16%] w-1/5'>
                    <AdminSidebar/>
                </div>
                <div className='w-[85%]'>
                    <DashboardHero />
                    <EditCategories />
                </div>
            </div>
        </div>
    )
}

export default page;
