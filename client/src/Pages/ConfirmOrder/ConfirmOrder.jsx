import React from 'react';
import './confirmOrder.scss';
import { FaCheck } from "react-icons/fa";
import { Link, useSearchParams } from 'react-router-dom';

const ConfirmOrder = () => {

    const searchQuery = useSearchParams()[0];

    const referenceNum = searchQuery.get('reference');

    return (

        <div className="confirmOrder">

            <section>
                <div className="top">
                    <div >
                        <FaCheck />
                    </div>
                </div>

                <div className="greeting">
                    <h1>Than you for ordering!</h1>
                    <p>reference_id : {referenceNum}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut et officiis recusandae, fugit exercitationem dolores!</p>
                </div>

                <div className="redirectBtns">
                    <div>
                        <Link to={'/profile'}>
                            <button>VIEW PRDER</button>
                        </Link>

                        <Link to={'/'}>
                            <button>CONTINUE SHOPPING</button>
                        </Link>
                    </div>
                </div>


            </section>

        </div>

    );
};

export default ConfirmOrder;