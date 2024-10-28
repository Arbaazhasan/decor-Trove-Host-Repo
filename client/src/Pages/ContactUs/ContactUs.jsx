import React from 'react';
import "./contactUs.scss";
import Header from '../../components/Header/Header';

const ContactUs = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "b04ad689-8a47-4a35-a55a-38639fe7dcee");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };



    return (
        <div>

            <Header />
            <div className="contactUsWindow">

                <div className="left">
                    <p>Decor<span>Trove</span></p>
                </div>

                <div className="right">

                    <h3>CONTACTS</h3>

                    <div className="contactDetails">
                        <p><span>ADDRESS : </span>
                            Bazar Mufti, Nawabpura, Moradabad - 244001, Utter Pradesh, India </p>
                        <p><span>Phone : </span> +91 9058714187, +91 7906427187</p>
                        <p><span>Email : </span>arbaazhasan.ah@gmail.com</p>

                    </div>

                    <form action="" onSubmit={onSubmit}>
                        <div>
                            <div>
                                <div><label htmlFor="">Name <span>*</span></label></div>
                                <input type="text" name="name" required />
                            </div>

                            <div>
                                <div><label htmlFor="">Email <span>*</span></label></div>
                                <input type="email" name="email" required />
                            </div>

                        </div>
                        <div>
                            <div>
                                <label htmlFor="">Comment<span>*</span></label>
                            </div>
                            <textarea name="message" cols="30" rows="10" required></textarea>
                        </div>

                        <button type="submit">SEND MESSAGE</button>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default ContactUs;