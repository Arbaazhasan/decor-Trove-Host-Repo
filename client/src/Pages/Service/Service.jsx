import React from 'react';
import './service.scss';
import { FaPaintRoller, FaCouch, FaPalette, FaHome } from 'react-icons/fa';

const ServicePage = () => {
    return (
        <div className="service-page">
            <header className="service-header">
                <h1>Welcome to Our Decor Services</h1>
                <p>Your Trusted Partner in Creating Beautiful Spaces</p>
            </header>

            <section className="service-section">
                <h2>Our Services</h2>
                <ul className="service-list">
                    <li>
                        <div className="service-icon"><FaPaintRoller /></div>
                        <div className="service-details">
                            <h3>Interior Design</h3>
                            <p>Our interior design experts will work with you to create a personalized and stylish interior that reflects your taste and lifestyle.</p>
                        </div>
                    </li>
                    <li>
                        <div className="service-icon"><FaCouch /></div>
                        <div className="service-details">
                            <h3>Furniture Selection</h3>
                            <p>Choose from our curated collection of furniture pieces to complement your decor, or let us help you find the perfect pieces.</p>
                        </div>
                    </li>
                    <li>
                        <div className="service-icon"><FaPalette /></div>
                        <div className="service-details">
                            <h3>Color Consultation</h3>
                            <p>Not sure which colors will work best for your space? Our color consultants can provide expert guidance.</p>
                        </div>
                    </li>
                    <li>
                        <div className="service-icon"><FaHome /></div>
                        <div className="service-details">
                            <h3>Home Staging</h3>
                            <p>Selling your home? Our home staging services can help make your property more appealing to potential buyers.</p>
                        </div>
                    </li>
                </ul>
            </section>

            <section className="service-section">
                <h2>Why Choose Us</h2>
                <p>Decor Trove is your one-stop solution for all your decor needs. Here are some reasons to choose us:</p>

                <ul className="service-list">
                    <li>Years of Experience</li>
                    <li>Passionate Designers</li>
                    <li>Customized Solutions</li>
                    <li>Quality Products</li>
                    <li>Client-Centric Approach</li>
                </ul>
            </section>

            <section className="service-section">
                <h2>Contact Us</h2>
                <p>Ready to transform your space? Contact us today to discuss your decor needs and schedule a consultation.</p>
                <a href="contact.html" className="contact-button">Get in Touch</a>
            </section>

            <footer className="service-footer">
                <p>&copy; 2023 Decor Trove. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default ServicePage;
