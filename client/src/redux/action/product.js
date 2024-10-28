import axios from "axios";
import { addProducCarttFail, addProductCartRequest, addProductCartSuccess, addProductWishlistFail, addProductWishlistRequest, addProductWishlistSucces, bannerFail, bannersRequest, bannersSuccess, getAllProductRequest, getAllProductSuccess, getAllProudctFail, getArrivalCategoryFail, getArrivalCategoryRequest, getArrivalCategorySuccess, getArrivalProductFail, getArrivalProudctRequest, getArrivalProudctSuccess, getCartArrayFail, getCartArrayRequest, getCartArraySuccess, getPopularProductSuccess, getProductCategoryFail, getProductCategoryRequest, getProductCategorySuccess, getProudctFail, getProudctRequest, getProudctSuccess, getWishlistArrayFail, getWishlistArrayRequest, getWishlistArraySuccess, isProudctinWishlist, removeProductCartFail, removeProductCartRequest, removeProductCartSuccess, removeWishlistProductFail, removeWishlistProductRequest, removeWishlistProductSuccess, searchProductFail, searchProductRequest, searchProductSuccess, sliderSlidesFail, sliderSlidesRequest, sliderSlidesSuccess } from "../Reducer/productReducer";
import { server } from "../store";
import toast from "react-hot-toast";

export const getSliderSlides = async (dispatch) => {

    try {

        dispatch(sliderSlidesFail());

        const { data } = await axios.get(`${server}/product/getsliderslide`, {}, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });


        dispatch(sliderSlidesSuccess(data));

    } catch (error) {
        console.log(error);
        dispatch(sliderSlidesFail(error));
    }
};


export const getBanners = async (dispatch) => {


    try {

        dispatch(bannersRequest());
        const { data } = await axios.get(`${server}/product/getbanners`, {}, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        // console.log(data);
        dispatch(bannersSuccess(data));

    } catch (error) {
        console.log(error);
        dispatch(bannerFail(error));

    }
};


export const getArrivalProudctCategory = async (dispatch) => {

    try {
        dispatch(getArrivalCategoryRequest());

        const { data } = await axios.get(`${server}/product/getArrivalproductcategory`, {}, {
            headers: {
                "Content-Type": "application/json",
            },

            withCredentials: true
        });

        // console.log(data);

        dispatch(getArrivalCategorySuccess(data));

    } catch (error) {

        console.log(error);
        dispatch(getArrivalCategoryFail(error));

    }

};


export const getArrivalProudcts = async (dispatch, category) => {

    try {

        dispatch(getArrivalProudctRequest());

        const { data } = await axios.get(`${server}/product/getarrivalproducts/${category}`, {
        }, {
            headers: {
                "Content-Type": "appliction/json"
            },
            withCredentials: true
        });

        dispatch(getArrivalProudctSuccess(data.message));
        // console.log(data);

    } catch (error) {

        dispatch(getArrivalProductFail(error));
        console.log(error);

    }

};


export const getPopularProduct = async (dispatch) => {
    try {
        const { data } = await axios.get(`${server}/product/getpopularproduct`, {}, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        });

        dispatch(getPopularProductSuccess(data.data));

    } catch (error) {

        console.log(error);

    }
};


export const getProudct = async (dispatch, _id) => {


    try {

        dispatch(getProudctRequest());

        const { data } = await axios.get(`${server}/product/getproduct?pId=${_id}`, {}, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        });

        dispatch(getProudctSuccess(data.Product));
        // console.log(data);

    } catch (error) {

        dispatch(getProudctFail(error));
        console.log(error);
    }
};


export const getAllProudcts = async (dispatch) => {

    try {
        dispatch(getAllProductRequest());

        const { data } = await axios.get(`${server}/product/getallproducts`, {}, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch(getAllProductSuccess(data.allProducts));

        // console.log(data.allProducts);


    } catch (error) {

        dispatch(getAllProudctFail());

        console.log(error);

    }


};

export const getAllProudctCategory = async (dispatch) => {

    try {
        dispatch(getProductCategoryRequest());

        const { data } = await axios.get(`${server}/product/getallcategoryproducts`, {}, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        // console.log(data);

        dispatch(getProductCategorySuccess(data.ProudctArray));

    } catch (error) {
        console.log(error);
        dispatch(getProductCategoryFail(error));

    }
};


export const getUserWishlistArray = async (dispatch) => {

    try {

        dispatch(getWishlistArrayRequest());

        const { data } = await axios.post(`${server}/user/getwishlistproducts`, {}, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        });

        dispatch(getWishlistArraySuccess(data.wishlistArray));


    } catch (error) {

        dispatch(getWishlistArrayFail(error.message));
        console.log(error);

    }

};


export const addProductWishlist = async (dispatch, id, pageRefresh) => {

    try {
        dispatch(addProductWishlistRequest());

        const { data } = await axios.post(`${server}/user/addproductwishlist/${id}`, {}, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch(addProductWishlistSucces(pageRefresh));

        toast.success(data.message);


        getCartArray(dispatch);

    } catch (error) {

        dispatch(addProductWishlistFail(error.response.data.message));
        toast.error(error.response.data.message);
        console.log(error);

    }
};


export const isProductInWishlist = async (dispatch, id) => {


    try {
        const { data } = await axios.post(`${server}/user/isproductwishlist/${id}`, {}, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        // console.log(data.message);
        dispatch(isProudctinWishlist(data.message));


    } catch (error) {

        console.log(error);


    }
};




export const removeProductWishlist = async (dispatch, id, refresh) => {

    dispatch(removeWishlistProductRequest());

    try {

        const { data } = await axios.post(`${server}/user/removeproductwishlist/${id}`, {

        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        // console.log(data);
        dispatch(removeWishlistProductSuccess(refresh));
        toast.success(data.message);

        getUserWishlistArray(dispatch);



    } catch (error) {
        dispatch(removeWishlistProductFail(error));
        console.log(error);

    }


};



export const getCartArray = async (dispatch) => {


    try {
        dispatch(getCartArrayRequest());

        const { data } = await axios.post(`${server}/user/getusercart`, {}, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch(getCartArraySuccess(data.cartArray));
        // console.log(data.cartArray);


    } catch (error) {

        dispatch(getCartArrayFail(error));
        console.log(error);

    }
};


export const addProductInCart = async (dispatch, id, qty) => {

    try {

        dispatch(addProductCartRequest());

        const { data } = await axios.post(`${server}/user/addproductcart/${id}`, {
            qty
        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch(addProductCartSuccess());

        // console.log(data);
        toast.success(data.message);



    } catch (error) {

        dispatch(addProducCarttFail(error.response.data.message));
        // console.log(error);
        toast.error(error.response.data.message);

    }



};


export const removeProductCart = async (dispatch, id) => {
    removeProductCartRequest, removeProductCartSuccess, removeProductCartFail;

    try {

        dispatch(removeProductCartRequest());

        const { data } = await axios.post(`${server}/user/removeproductcart/${id}`, {

        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true

        });

        dispatch(removeProductCartSuccess());
        getCartArray(dispatch);
        toast.success(data.message);

    } catch (error) {
        dispatch(removeProductCartFail());
        console.log(error);
    }
};

export const getSearchProduct = async (dispatch, pName) => {

    try {
        dispatch(searchProductRequest());

        const { data } = await axios.get(`${server}/product/getproductbyname/${pName}`, {}, {

            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        // console.log(data);

        dispatch(searchProductSuccess(data.message));

    } catch (error) {

        dispatch(searchProductFail(error));
        console.log(error);

    }
};

