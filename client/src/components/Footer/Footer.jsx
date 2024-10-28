import React from 'react';
import './footer.scss';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';


const Footer = () => {
    return (
        <div>
            <div className="footer">

                <div className="newsLetter">
                    <div>
                        <img src="news.png" alt="" />
                    </div>
                    <div>
                        <h2>NEWSLETTER</h2>
                        <p>Sign up to recive the latest updates.</p>
                    </div>
                    <div>
                        <input type="text" placeholder='email' />
                        <button>SUBCRIBE</button>
                    </div>

                    <div>
                        <span><FaFacebookF /></span>
                        <span><FaYoutube /></span>
                        <span><AiFillGithub /></span>
                        <span><AiOutlineTwitter /></span>
                    </div>
                </div>


                <div className="footerContent">
                    <div className="left">
                        <h1>Decor <span>Trove</span></h1>
                        <div className="details">
                            <p>Address : Bazar Mufti Nawabpura, Moradabad</p>
                            <p>Phone : +91 9058714187</p>
                            <p>Email : arbaazhasan@gamil.com</p>
                        </div>
                    </div>
                    <div className="right">
                        <div>
                            <div>
                                <span>INFORMATION</span>
                            </div>
                            <div>
                                <p>About Us</p>
                                <p>Contact Us</p>
                                <p>Delivery Inforamtion</p>
                                <p>Privary Policy </p>
                                <p>Terms & Condition</p>
                            </div>
                        </div>

                        <div>
                            <div>
                                <span>QUICK SHOP</span>
                            </div>
                            <div>
                                <p>About Us</p>
                                <p>Contact Us</p>
                                <p>Delivery Inforamtion</p>
                                <p>Privary Policy </p>
                                <p>Terms & Condition</p>
                            </div>

                        </div>

                        <div>
                            <div>
                                <span>QUICK HELP</span>
                            </div>
                            <div>
                                <p>About Us</p>
                                <p>Contact Us</p>
                                <p>Delivery Inforamtion</p>
                                <p>Privary Policy </p>
                                <p>Terms & Condition</p>
                            </div>

                        </div>


                    </div>
                </div>



            </div>
        </div>
    );
};

export default Footer;