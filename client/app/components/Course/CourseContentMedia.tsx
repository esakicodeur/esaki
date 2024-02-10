import { styles } from '@/app/styles/style';
import CoursePlayer from '@/app/utils/CoursePlayer';
import { useAddAnswerInQuestionMutation, useAddNewQuestionMutation } from '@/redux/features/courses/coursesApi';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { AiFillStar, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineStar } from 'react-icons/ai';
import { BiMessage } from 'react-icons/bi';
import { VscVerifiedFilled } from 'react-icons/vsc';
import { format } from 'timeago.js';

type Props = {
    data: any;
    id: string;
    activeVideo: number;
    setActiveVideo: (activeVideo: number) => void;
    user: any;
    refetch: any;
}

const CourseContentMedia = ({data, id, activeVideo, setActiveVideo, user, refetch}: Props) => {
    const [activeBar, setActiveBar] = useState(0);
    const [question, setQuestion] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(1);
    const [answer, setAnswer] = useState("");
    const [questionId, setQuestionId] = useState("");
    const [addNewQuestion, { isSuccess, error, isLoading: questionCreationLoading }] = useAddNewQuestionMutation();
    const [addAnswerInQuestion, {isSuccess:answerSuccess, error:answerError, isLoading: answerCreationLoading}] = useAddAnswerInQuestionMutation();

    const isReviewExists = data?.reviews?.find(
        (item: any) => item.user._id === user._id
    );

    const handleQuestion = () => {
        if (question.length === 0) {
            toast.error("Question can't be empty");
        } else {
            console.log({question, courseId: id, contentId: data[activeVideo]._id});
            addNewQuestion({question, courseId: id, contentId: data[activeVideo]._id});
        }
    }

    useEffect(() => {
        if (isSuccess) {
            setQuestion("");
            refetch();
            toast.success("Question added successfully");
        }

        if (answerSuccess) {
            setAnswer("");
            refetch();
            toast.success("Answer added successfully");
        }

        if (error) {
            if ("data" in error) {
                const errorMessage = error as any;
                toast.error(errorMessage.data.message);
            }
        }

        if (answerError) {
            if ("data" in answerError) {
                const errorMessage = answerError as any;
                toast.error(errorMessage.data.message);
            }
        }
    }, [isSuccess, error, answerSuccess, answerError]);

    const handleAnswerSubmit = () => {
        addAnswerInQuestion({answer, courseId: id, contentId: data[activeVideo]._id, questionId: questionId});
    }

    return (
        <div className='w-[95%] 800px:w-[86%] py-4 m-auto'>
            <CoursePlayer
                title={data[activeVideo]?.title}
                videoUrl={data[activeVideo]?.videoUrl}
            />
            <div className='w-full flex items-center justify-between my-3'>
                <div
                    className={`${styles.button} !w-[unset] !min-h-[40px] !py-[unset] ${
                        activeVideo === 0 && "!cursor-no-drop opacity-[.8]"
                    }`}
                    onClick={() => 
                        setActiveVideo(activeVideo === 0 ? 0 : activeVideo -1)
                    }
                >
                    <AiOutlineArrowLeft className='mr-2' />
                    Prev Lesson
                </div>
                <div
                    className={`${styles.button} !w-[unset] !min-h-[40px] !py-[unset] ${
                        data.length - 1 === activeVideo && "!cursor-no-drop opacity-[.8]"
                    }`}
                    onClick={() => 
                        setActiveVideo(
                            data && data.length - 1 === activeVideo
                                ? activeVideo
                                : activeVideo + 1
                        )
                    }
                >
                    Next Lesson
                    <AiOutlineArrowRight className='ml-2' />
                </div>
            </div>

            <h1 className='pt-2 text-[25px] font-[600] text-black dark:text-white'>{data[activeVideo].title}</h1>
            <br />
            <div className='w-full p-4 flex items-center justify-between bg-slate-500 bg-opacity-20 backdrop-blur shadow-[bg-slate-700] rounded shadow-inner'>
                {["Overview", "Ressources", "Q&A", "Reviews"].map((text, index) => (
                    <h5
                        key={index}
                        className={`800px:text-[20px] cursor-pointer ${
                            activeBar === index ? "text-red-500" : "text-black dark:text-white"
                        }`}
                        onClick={() => setActiveBar(index)}
                    >
                        {text}
                    </h5>
                ))}
            </div>
            <br />
            {activeBar === 0 && (
                <p className='text-[18px] text-black dark:text-white whitespace-pre-line mb-3'>
                    {data[activeVideo]?.description}
                </p>
            )}
            {activeBar === 1 && (
                <div>
                    {data[activeVideo]?.links.map((item: any, index: number) => (
                        <div key={index} className='mb-5'>
                            <h2 className='800px:text-[20px] 800px:inline-block text-black dark:text-white'>
                                {item.title && item.title + " :"}
                            </h2>
                            <a
                                className='inline-block text-[#4395c4] 800px:text-[20px] 800px:pl-2'
                                href={item.url}
                            >
                                {item.url}
                            </a>
                        </div>
                    ))}
                </div>
            )}
            {activeBar === 2 && (
                <>
                    <div className='flex w-full'>
                        <Image
                            src={user.avatar ? user.avatar.url : "https://res.cloudinary.com/dt2bm2kmn/image/upload/v1702384300/avatars/l7yhf50kphvvlkbkgiop.jpg" }
                            alt=''
                            width={50}
                            height={50}
                            className='w-[50px] h-[50px] rounded-full object-cover'
                        />
                        <textarea
                            name=''
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            id=''
                            cols={40}
                            rows={5}
                            placeholder='Write your question...'
                            className='outline-none bg-transparent dark:text-white text-black ml-3 border border-[#ffffff57] 800px:w-full p-2 rounded w-[90%] 800px:text-[18px] font-Poppins'
                        ></textarea>
                    </div>
                    <div className='w-full flex justify-end'>
                        <div
                            className={`${
                                styles.button
                            } !w-[120px] !h-[40px] text-[18px] mt-5 ${questionCreationLoading && "cursor-not-allowed"}`}
                            onClick={questionCreationLoading ? () => {} : handleQuestion}
                        >
                            Submit
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className='w-full h-[1px] bg-[#ffffff3b]'></div>
                    <div>
                        <CommentReply
                            data={data}
                            activeVideo={activeVideo}
                            answer={answer}
                            setAnswer={setAnswer}
                            handleAnswerSubmit={handleAnswerSubmit}
                            user={user}
                            setQuestionId={setQuestionId}
                            answerCreationLoading={answerCreationLoading}
                        />
                    </div>
                </>
            )}
            {activeBar === 3 && (
                <div className='w-full'>
                    <>
                        {!isReviewExists && (
                            <>
                                <div className='flex w-full'>
                                    <Image
                                        src={user.avatar ? user.avatar.url : "https://res.cloudinary.com/dt2bm2kmn/image/upload/v1702384300/avatars/l7yhf50kphvvlkbkgiop.jpg" }
                                        alt=''
                                        width={50}
                                        height={50}
                                        className='w-[50px] h-[50px] rounded-full object-cover'
                                    />
                                    <div className='w-full'>
                                        <h5 className='pl-3 text-[20px] font-[500] dark:text-white text-black'>
                                            Give a Rating <span className='text-red-500'>*</span>
                                        </h5>
                                        <div className='flex w-full ml-2 pb-3'>
                                            {[1, 2, 3, 4, 5].map((i) => 
                                                rating >= i ? (
                                                    <AiFillStar
                                                        key={i}
                                                        className='mr-1 cursor-pointer'
                                                        color='rgb(246,186,0)'
                                                        size={25}
                                                        onClick={() => setRating(i)}
                                                    />
                                                ) : (
                                                    <AiOutlineStar
                                                        key={i}
                                                        className='mr-1 cursor-pointer'
                                                        color='rgb(246,186,0)'
                                                        size={25}
                                                        onClick={() => setRating(i)}
                                                    />
                                                )
                                            )}
                                        </div>
                                        <textarea
                                            name=''
                                            value={review}
                                            onChange={(e) => setReview(e.target.value)}
                                            id=''
                                            cols={40}
                                            rows={5}
                                            placeholder='Write your comment...'
                                            className='dark:text-white text-black outline-none bg-transparent ml-3 border border-[#ffffff57] 800px:w-full p-2 rounded w-[90%] 800px:text-[18px] font-Poppins'
                                        ></textarea>
                                    </div>
                                </div>
                                <div className='w-full flex justify-end'>
                                    <div className={`${styles.button} !w-[120px] !h-[40px] text-[18px] mt-5 800px:mr-0 mr-2`}>
                                        Submit
                                    </div>
                                </div>
                            </>
                        )}
                    </>
                </div>
            )}
        </div>
    );
};

const CommentReply = ({
    data,
    activeVideo,
    answer,
    setAnswer,
    handleAnswerSubmit,
    setQuestionId,
    answerCreationLoading
}: any) => {
    return (
        <>
            <div className='w-full my-3'>
                {
                    data[activeVideo].questions.map((item: any, index: any) => (
                        <CommentItem
                            key={index}
                            data={data}
                            activeVideo={activeVideo}
                            item={item}
                            index={index}
                            answer={answer}
                            setAnswer={setAnswer}
                            setQuestionId={setQuestionId}
                            handleAnswerSubmit={handleAnswerSubmit}
                            answerCreationLoading={answerCreationLoading}
                        />
                    ))
                }
            </div>
        </>
    )
}

const CommentItem = ({
    setQuestionId,
    item,
    answer,
    setAnswer,
    handleAnswerSubmit,
    answerCreationLoading
}: any) => {
    const [replyActive, setReplyActive] = useState(false);

    return (
        <>  
            <div className='my-4'>
                <div className='flex mb-2'>
                    <div>
                        <Image
                            src={item.user.avatar ? item.user.avatar.url : "https://res.cloudinary.com/dt2bm2kmn/image/upload/v1702384300/avatars/l7yhf50kphvvlkbkgiop.jpg" }
                            alt=''
                            width={50}
                            height={50}
                            className='w-[50px] h-[50px] rounded-full object-cover'
                        />
                    </div>
                    <div className='pl-3 text-[#000020b8] dark:text-white'>
                        <h5 className='text-[20px]'>{item?.user.name}</h5>
                        <p>{item?.question}</p>
                        <small className='text-[#000020b8] dark:text-[#ffffff83]'>{!item.createdAt ? "" : format(item?.createdAt)} *</small>
                    </div>
                </div>
                <div className='w-full flex'>
                    <span
                        className='800px:pl-16 text-[#000020b8] dark:text-[#ffffff83] cursor-pointer mr-2'
                        onClick={() => {
                            setReplyActive(!replyActive)
                            setQuestionId(item._id)
                        }}
                    >
                        {!replyActive ? item.questionReplies.length !== 0 ? "All Replies" : "Add Reply" : "Hide Replies"}
                    </span>
                    <BiMessage size={20} className='cursor-pointer dark:text-[#ffffff83] text-[#000000b8]' />
                    <span className='pl-1 mt-[-4px] cursor-pointer dark:text-[#ffffff83] text-[#000000b8]'>
                        {item.questionReplies.length}
                    </span>
                </div>
                {
                    replyActive && (
                        <>
                            {item.questionReplies.map((item: any, index: any) => (
                                <div key={index} className='w-full flex 800px:ml-16 my-5 text-black dark:text-white'>
                                    <div>
                                        <Image
                                            src={item.user.avatar ? item.user.avatar.url : "https://res.cloudinary.com/dt2bm2kmn/image/upload/v1702384300/avatars/l7yhf50kphvvlkbkgiop.jpg" }
                                            alt=''
                                            width={50}
                                            height={50}
                                            className='w-[50px] h-[50px] rounded-full object-cover'
                                        />
                                    </div>
                                    <div className='pl-3'>
                                        <div className='flex items-center'>
                                            <h5 className='text-[20px]'>{item.user.name}</h5> <VscVerifiedFilled className='text-[#50c750] ml-2 text-[20px]' />
                                        </div>
                                        <p>{item.answer}</p>
                                        <small className='text-[#ffffff83]'>
                                            {format(item.createdAt)} *
                                        </small>
                                    </div>
                                </div>
                            ))}
                            <>
                                <div className='w-full flex relative dark:text-white text-black'>
                                    <input
                                        type='text'
                                        placeholder='Enter your answer...'
                                        value={answer}
                                        onChange={(e: any) => setAnswer(e.target.value)}
                                        className={`block 800px:ml-12 mt-12 outline-none bg-transparent border-b border-[#00000027] dark:text-white text-black dark:border-[#fff] p-[5px] w-[95%] ${answer === "" || answerCreationLoading && 'cursor-not-allowed'}`}
                                    />
                                    <button
                                        type='submit'
                                        className='absolute right-0 bottom-0 dark:text-white text-black'
                                        onClick={handleAnswerSubmit}
                                        disabled={answer === "" || answerCreationLoading}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default CourseContentMedia