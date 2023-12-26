import { styles } from '@/app/styles/style';
import Image from 'next/image';
import React from 'react';
import ReviewCard from "../Review/ReviewCard";

type Props = {}

export const reviews = [
    {
        name: "Gene Bates",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        profession: "Student | Cambridge university",
        comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae expedita."
    },
    {
        name: "Verna Santos",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        profession: "Full Stack Developer | Quarter ltd.",
        comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae expedita."
    },
    {
        name: "Jay Gibbs",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        profession: "Computer systems engineering student | Zimbabwe",
        comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae expedita."
    },
    {
        name: "Mina Davidson",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        profession: "Junior Web Developer | Indonesia",
        comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae expedita."
    },
    {
        name: "Rosemary Smith",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        profession: "Full Stack Developer | Algeria",
        comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae expedita."
    },
    {
        name: "Laura McKenzie",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        profession: "Full Stack Developer | Canada",
        comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae expedita.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae expedita."
    },
];

const Reviews = (props: Props) => {
  return (
    <div className='w-[90%] 800px:w-[85%] m-auto'>
        <div className='w-full 800px:flex items-center'>
            <div className='800px:w-[50%] w-full'>
                <Image
                    src={require("../../../public/assets/undraw_Web_development_0l6v-removebg-preview.png")}
                    alt='business'
                    width={800}
                    height={800}
                />
            </div>
            <div className='800px:w-[50%] w-full'>
                <h3 className={`${styles.title} 800px:!text-[35px]`}>
                    Our Students Are <span className='text-gradient'>Our Strength</span>{" "}
                    <br /> See What They Say About Us
                </h3>
                <br />
                <p className={styles.label}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque dignissimos magnam eos voluptatum, ducimus soluta doloremque qui incidunt voluptas praesentium dolor nesciunt ad porro ex minima dolores facere dolore veniam.
                </p>
            </div>
            <br />
            <br />
        </div>
        <div className='grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:ap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*:nth-child(3)]:!mt-[-60px] md:[&>*nth-child(6)]:!mt-[-40px]'>
            {
                reviews && reviews.map((i, index) => <ReviewCard item={i} key={index} />)
            }
        </div>
    </div>
  )
}

export default Reviews;
