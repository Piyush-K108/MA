import React, { useState, useEffect } from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
const MapAndForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [submissionStatus, setSubmissionStatus] = useState(null);
    const [submissionError, setSubmissionError] = useState(null);

    const formData = {
        "name": name,
        "email": email,
        "message": message
    }
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });
    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://formspree.io/f/xqkvnadz', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                setSubmissionStatus('Form submitted successfully!');
            } else {
                setSubmissionError('Form submission failed. Please try again later.');
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            setSubmissionStatus('Form submission failed. Please try again later.');
        }
    };

    return (

        <div ref={ref} className="bg-[#313131] py-[5%] text-[#a3a7b1] min-h-screen">
            <div className=" mx-auto my-24 px-6 mc:px-12">
                <iframe
                    className={`${isVisible ? 'animate-fadeInRight' : ''}`}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.7436785220773!2d75.81489531464645!3d22.850788784996055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396317ab267100ab%3A0x95a6c8a0577e7ceb!2sMatani%20Architects!5e0!3m2!1sen!2sin!4v1664355313792!5m2!1sen!2sin"
                    width="100%"
                    height="600px"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <div className={`${isVisible ? 'animate-fadeInLeft' : ''} px-6 mc:px-12`} >
                    <div style={{ backgroundColor: '#212121', opacity: '90%', color: 'white' }}
                        className="block rounded-lg bg-[#212121] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
                        <div className="mb-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 nx:ml-[-14px]">
                            <div className="mx-auto mb-12 text-center lg:mb-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                    stroke="currentColor" className="mx-auto text-dimWhite mb-6 h-8 w-8 dark:text-primary-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <h6 className="font-medium">Dewas, Madhya Pradesh 455001</h6>
                            </div>

                            <div className="mx-auto mb-12 text-center lg:mb-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                    stroke="currentColor" className="mx-auto text-dimWhite mb-6 h-8 w-8 dark:text-primary-400">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                                </svg>
                                <h6 className="font-medium">India</h6>
                            </div>

                            <div className="mx-auto mb-6 text-center md:mb-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                    stroke="currentColor" className="mx-auto text-dimWhite mb-6 h-8 w-8 dark:text-primary-400">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                <h6 className="font-medium">+91-977-002-2850</h6>
                            </div>
                            <div className="mx-auto mb-6 text-black text-center md:mb-0">
                                <AiOutlineMail className='w-12 text-dimWhite h-10 mb-4 ml-20 ' />
                                <h6 className="font-medium text-white ">mataniarchitects@gmail.com </h6>
                            </div>
                        </div>
                        {submissionStatus && <p className='mb-4 text-[#00FF7F]'>{submissionStatus}</p>}
                        {submissionError && <p className='mb-4 text-[#FF0000]'>{submissionError}</p>}
                        <div className="mx-auto flex nx:flex-col  md:max-w-full">

                            <form className={`mt-4 xl:ml-[35%] xl:w-[640px] lg:w-[620px] md:w-[620px] sm:w-[600px] lg:ml-[27%] md:ml-[12%] sm:ml-[5%] nx:ml-[-2%]  nx:w-[200px]  ml-80 `} onSubmit={handleSubmit}>

                                <div className="relative mb-10" data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        className={`peer block min-h-[auto] w-full rounded border-1 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear dark:text-neutral-200 dark:placeholder-text-neutral-200 dark:peer-focus:text-primary placeholder-opacity-50`}
                                        id="name"
                                        placeholder=" "
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <label
                                        className={`absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out 
                                        ${name ? 'opacity-100 -translate-y-9' : 'opacity-50'
                                            }`}
                                        htmlFor="name"
                                    >
                                        Name
                                    </label>
                                </div>


                                <div className="relative mb-10" data-te-input-wrapper-init>
                                    <input
                                        type="email"
                                        className={`peer block min-h-[auto] w-full rounded border-1 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear dark:text-neutral-200 dark:placeholder-text-neutral-200 dark:peer-focus:text-primary placeholder-opacity-50`}
                                        id="email"
                                        placeholder=" "
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label
                                        className={`absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out 
                                        ${email ? 'opacity-100 -translate-y-9' : 'opacity-50'
                                            }`}
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                </div>


                                <div className="relative mb-10" data-te-input-wrapper-init>
                                    <textarea
                                        className={`peer block min-h-[auto] w-full rounded border-1 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear dark:text-neutral-200 dark:placeholder-text-neutral-200 dark:peer-focus:text-primary placeholder-opacity-50`}
                                        id="message"
                                        placeholder=" "
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                    <label
                                        className={`absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out 
                                        ${message ? 'opacity-100 -translate-y-9' : 'opacity-50'
                                            }`}
                                        htmlFor="message"
                                    >
                                        Message
                                    </label>
                                </div>


                                <button type="submit" data-te-ripple-init data-te-ripple-color="light"
                                    className="inline-block w-full hover:scale-y-[1.2] rounded bg-[#e77034f3] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e77034f3] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_e77034f3,0_4px_18px_0_e77034f3] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_e77034f3,0_4px_18px_0_e77034f3] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_e77034f3,0_4px_18px_0_e77034f3] dark:shadow-[0_4px_9px_-4px_e77034f3] dark:hover:shadow-[0_8px_9px_-4px_e77034f3,0_4px_18px_0_e77034f3] dark:focus:shadow-[0_8px_9px_-4px_e77034f3,0_4px_18px_0_e77034f3]  dark:active:shadow-[0_8px_9px_-4px_e77034f3,0_4px_18px_0_e77034f3]  lg:mb-0">
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div >

    )
}

export default MapAndForm;


