import React from 'react';
import './userProfile.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { updateUserData } from '../../redux/action/userLogin';
import { useDispatch, useSelector } from 'react-redux';


const UserProfile = () => {

    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);

    const [isUpdate, setIsUpdate] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo1, setPhoneNo1] = useState("");
    const [phoneNo2, setPhoneNo2] = useState("");
    const [address, setAddress] = useState("");
    const [address2, setAddress2] = useState("");
    const [landMark, setLandMark] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");

    const onChangeHandler = (e, field) => {
        const value = e.target.value;
        switch (field) {

            case 'name':
                setName(value);
                break;

            case 'email':
                setEmail(value);
                break;

            case 'phoneNo1':
                setPhoneNo1(value);
                break;

            case 'phoneNo2':
                setPhoneNo2(value);
                break;

            case 'address':
                setAddress(value);
                break;

            case 'address2':
                setAddress2(value);
                break;

            case 'landMark':
                setLandMark(value);
                break;

            case 'city':
                setCity(value);
                break;

            case 'country':
                setCountry(value);
                break;

            case 'state':
                setState(value);
                break;

            default:
                break;
        }
    };

    const submitHandler = () => {

        updateUserData(dispatch,
            name
            , email
            , phoneNo1
            , phoneNo2
            , address
            , address2
            , landMark
            , city
            , state
            , country
        );

        // console.log("Submit");


    };

    useEffect(() => {


        // console.log("name" + " : " + name);
        // console.log("email" + " : " + email);
        // console.log("phoneNo1" + " : " + phoneNo1);
        // console.log("phoneNo2" + " : " + phoneNo2);
        // console.log("address" + " : " + address);
        // console.log("address2" + " : " + address2);
        // console.log("landMark" + " : " + landMark);
        // console.log("city" + " : " + city);
        // console.log("state" + " : " + state);
        // console.log("country" + " : " + country);




        user && setName(user.name);
        user && setEmail(user.username);
        user && setPhoneNo1(user.phoneNo);
        user && setPhoneNo2(user.alternatePNo);
        user && setAddress(user.address);
        user && setAddress2(user.secondAddress);
        user && setLandMark(user.landMark);
        user && setCity(user.city);
        user && setState(user.state);
        user && setCountry(user.country);


    }, [isUpdate, user]);

    return (
        <div>
            <div className="userInfo">

                <div className='userDetails' >
                    <div>
                        <p>Name</p>
                        <input type="text" value={name} onChange={(e) => onChangeHandler(e, 'name')} style={{ pointerEvents: isUpdate ? "fill" : "none" }} />
                    </div>
                    <div>
                        <p>Email</p>
                        <input type="text" value={email} onChange={(e) => onChangeHandler(e, 'email')} style={{ pointerEvents: isUpdate ? "fill" : "none" }} />
                    </div>
                    <div>
                        <p>Phone no.</p>
                        <input type="text" value={phoneNo1} onChange={(e) => onChangeHandler(e, 'phoneNo1')} style={{ pointerEvents: isUpdate ? "fill" : "none" }} />
                    </div>
                    <div>
                        <p>Alternative Phone no.</p>
                        <input type="text" value={phoneNo2} onChange={(e) => onChangeHandler(e, 'phoneNo2')} style={{ pointerEvents: isUpdate ? "fill" : "none" }} />
                    </div>
                    <div>
                        <p>Address</p>
                        <input type="text" value={address} onChange={(e) => onChangeHandler(e, 'address')} style={{ pointerEvents: isUpdate ? "fill" : "none" }} />
                    </div>
                    <div>
                        <p>Address 2</p>
                        <input type="text" value={address2} onChange={(e) => onChangeHandler(e, 'address2')} style={{ pointerEvents: isUpdate ? "fill" : "none" }} />
                    </div>
                    <div>
                        <p>Land Mark</p>
                        <input type="text" value={landMark} onChange={(e) => onChangeHandler(e, 'landMark')} style={{ pointerEvents: isUpdate ? "fill" : "none" }} />
                    </div>
                    <div>
                        <p>City</p>
                        <input type="text" value={city} onChange={(e) => onChangeHandler(e, 'city')} style={{ pointerEvents: isUpdate ? "fill" : "none" }} />
                    </div>

                    <div>
                        <p>State</p>
                        <input type="text" value={state} onChange={(e) => onChangeHandler(e, 'state')} style={{ pointerEvents: isUpdate ? "fill" : "none" }} />
                    </div>
                    <div>
                        <p>Country</p>
                        <input type="text" value={country} onChange={(e) => onChangeHandler(e, 'country')} style={{ pointerEvents: `${isUpdate ? "fill" : "none"}` }} />
                    </div>


                    <button onClick={() => { setIsUpdate((pre) => !pre); isUpdate && submitHandler(); }}> {isUpdate ? "Submit" : "Edit"}</button>

                </div>



            </div>


        </div>
    );
};

export default UserProfile;