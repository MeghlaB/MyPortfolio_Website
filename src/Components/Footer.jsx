import { FaFacebook, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import logo from '../assets/icons/logo1.png'
export default function Footer() {
    return (
        <footer className="flex flex-col bg-[#1F1F38] text-white py-8">
            <div className="container mx-auto flex flex-col items-center justify-between gap-6 md:flex-row">
                {/* Footer Branding */}
                <div className="text-center md:text-left">
                    <h5 className="text-2xl font-bold">
                       <img src={logo} alt="" className="w-24 h-24 rounded-lg" />
                    </h5>
                    <h5 className="text-lg font-semibold mt-2">
                        <span className="text-hoverprimary">Contact Us:</span> meghlabiswas643gmail.com
                    </h5>
                </div>

                {/* Social Media Links */}
                 <div className="flex gap-6 mt-6 lg:mt-4 justify-center lg:justify-start">
                                        <a href="https://mail.google.com/mail/u/3/#inbox" className="text-2xl text-white hover:text-hoverprimary">
                                            <FiMail />
                                        </a>
                                        <a href="https://www.facebook.com/onu.biswas.166205" className="text-2xl text-white hover:text-hoverprimary">
                                            <FaFacebook />
                                        </a>
                                        <a href="https://github.com/MeghlaB" className="text-2xl text-white hover:text-hoverprimary">
                                            <FaGithub />
                                        </a>
                                    </div>
            </div>

            {/* Footer Bottom */}
            <aside className="mt-6 bg-[#1F1F38] text-center text-sm">
                <p>&copy; 2025. All Rights Reserved.</p>
            </aside>
        </footer>
    );
}
