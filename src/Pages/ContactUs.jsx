import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { FiMail } from 'react-icons/fi';
import { FaFacebook, FaMobile, FaWhatsapp } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';


export default function ContactUs() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_q4mz69g', 'template_motnhd9', form.current, 'hDzqQtESw86Hp0onJ')
            .then(
                () => {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Send Message",
                        showConfirmButton: false,
                        timer: 1000
                    });

                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    }

    return (
        <section className='py-20'>
     
            <h2 className="text-center text-3xl pb-20 text-hoverprimary font-semibold tracking-tight">Contact Us
            <div className=" mt-3 w-32 mx-auto border-t-4 border-hoverprimary"></div>
            </h2>
            <div className='container mx-auto gap-10 grid grid-cols-1 lg:grid-cols-2 pb-8 '>
                <div className='inline grid-cols-1 space-y-4 '>
                    {/* Gmail */}
                    <div className="p-6 hover:border-purple-700 border w-72 mx-auto border-gray-700 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 relative group overflow-hidden bg-btnprimary hover:bg-inherit ">
                        <div className="flex items-center justify-center text-center mb-4 z-10 relative">
                            <h3 className="text-2xl font-semibold text-hoverprimary">
                                <FiMail className='text-center' />
                            </h3>
                        </div>
                        <p className="text-gray-300 z-10 relative text-center">
                            meghlabiswas643@gmail.com
                        </p>
                        <a href="mailto:meghlabiswas643@gmail.com" className='text-hoverprimary text-center block mx-auto'>Send a Message</a>
                    </div>

                    {/* FaceBook */}
                    <div className="p-6 border hover:border-purple-700 w-72 mx-auto border-gray-700 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 relative group overflow-hidden bg-btnprimary hover:bg-inherit ">
                        <div className="flex items-center justify-center text-center mb-4 z-10 relative">
                            <h3 className="text-2xl font-semibold text-hoverprimary">
                                <FaMobile className='text-center' />
                            </h3>
                        </div>
                        <p className="text-gray-300 z-10 relative text-center">
                            +8801859075523
                        </p>
                        <a href="" className='text-hoverprimary text-center block mx-auto'>Send a Message</a>
                        
                    </div>
                    {/* WhatsApp */}
                    <div className="p-6 border hover:border-purple-700 w-72 mx-auto border-gray-700 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-500 relative group overflow-hidden bg-btnprimary hover:bg-inherit ">
                        <div className="flex items-center justify-center text-center mb-4 z-10 relative">
                            <h3 className="text-2xl font-semibold text-hoverprimary">
                                <FaWhatsapp className='text-center' />
                            </h3>
                        </div>
                        <p className="text-gray-300 z-10 relative text-center">
                            WhatsApp
                        </p>
                        <a href="https://wa.me/8801859075523?text=Hello" className='text-hoverprimary text-center block mx-auto'>Send a Message</a>
                    </div>
                </div>
                {/* contact us */}
                <div className="w-full max-w-md md:mx-auto border-purple-600 rounded-lg border px-10 pb-10 pt-8 shadow-md ">
                    <div className="mb-6">
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="w-full space-y-6">
                        <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                            <label className="block font-medium" htmlFor="name">
                                Name**
                            </label>
                            <input
                                className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                id="name"
                                placeholder="Your Name"
                                name="user_name"
                                type="text"
                                required
                            />
                        </div>
                        <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                            <label className="block font-medium" htmlFor="_email">
                                Email
                            </label>
                            <input
                                className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                id="_email"
                                placeholder="Your Email"
                                name="user_email"
                                type="email"
                                required
                            />
                        </div>
                        <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                            <label className="block font-medium" htmlFor="_message">
                                Message**
                            </label>
                            <textarea
                                className="min-h-[80px] w-full rounded border px-3 py-2 leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                id="_message"
                                placeholder="what's in your mind"
                                name="message"
                                required
                            />
                        </div>
                        <button className="rounded-md bg-hoverprimary px-4 py-2 text-white transition-colors">Submit</button>
                    </form>
                </div>
            </div>
        </section>


    )
}
