import axios from 'axios';
import './App.css';
import Cart from './Pages/Cart/Cart';
import ContactUs from './Pages/ContactUs/ContactUs';
import DashBoard from './Pages/DashBoard/DashBoard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Products from './Pages/Products/Products';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import ServicePage from './Pages/Service/Service';
import WishList from './Pages/WishList/WishList';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { adminLogin, getAdminProfile } from './redux/action/adminLogin';
import { refreshPage } from './redux/Reducer/adminReducer';



import { ProtectedRoute } from 'protected-route-react';
import { Toaster } from 'react-hot-toast';
import Loading from './components/Loading/Loading';
import ImageViewer from './components/ImageViewer/ImageViewer';
import Profile from './Pages/Profile/Profile';
import { getAllProudctCategory, getAllProudcts, getArrivalProudctCategory, getBanners, getPopularProduct, getSliderSlides } from './redux/action/product';
import Order from './Pages/Order/Order';
import ConfirmOrder from './Pages/ConfirmOrder/ConfirmOrder';



function App() {

  const dispatch = useDispatch();

  const { loading: adminLoading, user, adminAuthenticated } = useSelector(state => state.admin);
  const { loading: userLoading, userAuthenticated } = useSelector(state => state.user);
  const { loading: dashboardLoading, imageViewerWindow } = useSelector(state => state.dashboard);


  useEffect(() => {

    getSliderSlides(dispatch);
    getBanners(dispatch);
    getArrivalProudctCategory(dispatch);
    getPopularProduct(dispatch);
    getAllProudcts(dispatch);
    getAllProudctCategory(dispatch);

  }, [user, userAuthenticated, adminAuthenticated,
    adminLoading,
    userLoading,
    dashboardLoading,
    imageViewerWindow,
    window.location.pathname,

  ]);



  return (
    <>
      <div>
        <Router>

          {adminLoading || userLoading || dashboardLoading && < Loading />}

          {
            imageViewerWindow && <ImageViewer />
          }

          {/* {isUrl === '/profile' ? null : <Header />} */}

          <Routes>

            {/* Admin login System */}

            <Route
              path="/adminlogin"
              element={
                <ProtectedRoute isAuthenticated={!adminAuthenticated} redirect="/dashboard">

                  <Login />

                </ProtectedRoute>
              }
            />

            <Route element={<ProtectedRoute isAuthenticated={adminAuthenticated}></ProtectedRoute>}>

              <Route path='/dashboard' element={<DashBoard />} />

            </Route>



            {/* User Authentication System */}

            <Route
              path="/login"
              element={
                <ProtectedRoute isAuthenticated={!userAuthenticated} redirect="/me">

                  <Login />

                </ProtectedRoute>
              }

            />


            <Route element={<ProtectedRoute isAuthenticated={userAuthenticated}></ProtectedRoute>}>

              <Route path='/me' element={<Home />} />;
              <Route path='/profile' element={<Profile />} />
              <Route path='/wishlist' element={<WishList />} />;

            </Route>

            <Route path='/cart' element={<Cart />} />;



            {/* Local Paths  */}

            <Route path='/' element={<Home />} />;

            <Route path='/productes' element={<Products />} />;
            <Route path='/service' element={<ServicePage />} />;
            <Route path='/contactus' element={<ContactUs />} />;
            <Route path='/productdetails/:id' element={<ProductDetails />} />;

            <Route path='/order' element={<Order />} />;
            <Route path='/paymentsuccess' element={<ConfirmOrder />} />


            <Route path='*' element={<Home />} />


          </Routes>

          <Toaster

            toastOptions={{
              style: {
                fontFamily: 'roboto',
                fontWeight: 'bold'
              },
            }}
          />




        </Router>



      </div>

    </>
  );
}

export default App;
