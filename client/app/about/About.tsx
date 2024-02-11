import React from 'react'
import { styles } from '../styles/style'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='text-black dark:text-white'>
        <br />
        <h1 className={`${styles.title} 800px:!text-[45px]`}>
            What is <span className='text-gradient'>Elearning ?</span>
        </h1>
        <br />
        <div className='w-[95%] 800px:w-[85%] m-auto'>
            <p className='text-[18px] font-Poppins'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ullam ab quo illo suscipit ipsam beatae itaque? Totam, neque temporibus quo praesentium pariatur facere ab quod, blanditiis autem eligendi sint.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ullam ab quo illo suscipit ipsam beatae itaque? Totam, neque temporibus quo praesentium pariatur facere ab quod, blanditiis autem eligendi sint.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ullam ab quo illo suscipit ipsam beatae itaque? Totam, neque temporibus quo praesentium pariatur facere ab quod, blanditiis autem eligendi sint.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ullam ab quo illo suscipit ipsam beatae itaque? Totam, neque temporibus quo praesentium pariatur facere ab quod, blanditiis autem eligendi sint.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ullam ab quo illo suscipit ipsam beatae itaque? Totam, neque temporibus quo praesentium pariatur facere ab quod, blanditiis autem eligendi sint.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ullam ab quo illo suscipit ipsam beatae itaque? Totam, neque temporibus quo praesentium pariatur facere ab quod, blanditiis autem eligendi sint.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ullam ab quo illo suscipit ipsam beatae itaque? Totam, neque temporibus quo praesentium pariatur facere ab quod, blanditiis autem eligendi sint.
            </p>
            <br />
            <span className='font-cursive text-[22px]'>Alex Esaki</span>
            <h5 className='text-[18px] font-Poppins'>
                Co-founded and CEO of Elearning
            </h5>
            <br />
            <br />
            <br />
        </div>
    </div>
  )
}

export default About