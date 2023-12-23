'use client'
import React from 'react';
import DashboardHero from "../../components/Admin/DashboardHero";
import AdminProtected from "../../../app/hooks/adminProtected";
import Heading from "../../../app/utils/Heading";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import AllCourses from "../../components/Admin/Course/AllCourses";

type Props = {}

const page = (props: Props) => {
  return (
    <AdminProtected>
            <Heading
            title="Elearning - Admin"
            description="Elearning is a platform for students to learn and get help from teachers"
            keywords="Programming,MERN,Redux,Machine Learning"
        />
        <div className='flex h-screen'>
            <div className='1500px:w-[16%] w-1/5'>
                <AdminSidebar/>
            </div>
            <div className='w-[85%]'>
                <DashboardHero />
                <AllCourses />
            </div>
        </div>
    </AdminProtected>
)
}

export default page;
