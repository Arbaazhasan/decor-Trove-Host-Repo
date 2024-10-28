import axios from "axios";
import { addBannerFail, addBannerRequest, addBannerSuccess, addNewArrivalsProductRequest, addNewArrivalsProductSuccess, addNewArrivalsProductsFail, addPopularProductFail, addPopularProductRequest, addPopularProductSuccess, addProductFail, addProductRequest, addProductSuccess, addSlideFail, addSlideRequest, addSlideSuccess, deleteProductFail, deleteProductRequest, deleteProductSuccess, deleteSlideFail, deleteSlideRequest, deleteSlideSuccess, getAllProductsFail, getAllProductsRequest, getAllProductsSuccess, getArrivalCategoryFail, getArrivalCategoryRequest, getArrivalCategorySuccess, getSearchProductFail, getSearchProductRequest, getSearchProductSuccess, imageViewerFail, imageViewerRequest, imageViewerSuccess, updateArrivalCategoryFail, updateArrivalCategoryRequest, updateArrivalCategorySuccess, updateProductFail, updateProductRequest, updateProductSuccess } from "../Reducer/dashboard";
import { server } from "../store";
import toast from "react-hot-toast";




export const imageViewerLoader = (dispatch, imageArray) => {

    try {

        dispatch(imageViewerRequest());

        dispatch(imageViewerSuccess({ array: imageArray.imageArray, door: true }));

    } catch (error) {
        dispatch(imageViewerFail(error.message));

    }

};




export const getSearchProduct = async (dispatch, pNo) => {


    try {

        dispatch(getSearchProductRequest());

        const { data } = await axios.get(`${server}/product/getproduct/?pNo=${pNo}`, {
            headers: {
                "Content-Type": "application/json",
            },

            withCredentials: true
        });

        dispatch(getSearchProductSuccess(data.Product));

    } catch (error) {
        dispatch(getSearchProductFail());
        toast.error(error.response.data.Product);
    }
};




export const addProduct = async (dispatch,
    pNo,
    name,
    desc,
    color,
    price,
    category,
    available,
    images,
) => {


    // console.log(
    //     pNo,
    //     name,
    //     desc,
    //     color,
    //     price,
    //     category,
    //     available,
    //     images,
    // );


    try {
        dispatch(addProductRequest());

        const formData = new FormData();

        formData.append('pNo', pNo);
        formData.append('name', name);
        formData.append('desc', desc);
        formData.append('color', color);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('available', available);

        for (const i of images) {
            formData.append('file', i);
        }


        const { data } = await axios.post(`${server}/product/new`,
            formData, {
            withCredentials: true
        });

        dispatch(addProductSuccess(data));

        toast.success(data.message);

    } catch (error) {

        dispatch(addProductFail(error.message));
        toast.error(error.response.data.message);

    }

};



export const updateProduct = async (
    dispatch,
    searchItem,
    pNo,
    name,
    desc,
    color,
    price,
    category,
    available,
    imageArray,
    newImagesArray,
    deleteImages
) => {
    try {
        dispatch(updateProductRequest());

        const formData = new FormData();

        formData.append('pNo', pNo);
        formData.append('name', name);
        formData.append('desc', desc);
        formData.append('color', color);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('available', available);

        if (imageArray) {
            imageArray.forEach((imageObject, index) => {
                formData.append(`imageArray[${index}]`, JSON.stringify(imageObject));
            });
        }

        if (deleteImages) {
            deleteImages.forEach((value) => {
                formData.append('deleteImages', value);
            });
        }

        for (const i of newImagesArray) {
            formData.append('file', i);
        }

        const { data } = await axios.post(
            `${server}/product/update/${searchItem}`,
            formData,
            {
                withCredentials: true,
            }
        );


        dispatch(updateProductSuccess());

        toast.success(data.message);
    } catch (error) {
        dispatch(updateProductFail(error.message));
        console.error(error);
        toast.error(error.message);
    }
};


export const deleteProduct = async (dispatch, pNo) => {

    try {

        dispatch(deleteProductRequest());

        const { data } = await axios.get(`${server}/product/delete/${pNo}`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true
            });

        dispatch(deleteProductSuccess());
        toast.success(data.message);

    } catch (error) {

        dispatch(deleteProductFail(error.message));
        toast.error(error.response.data.message);

    }

};


export const getAllProduct = async (dispatch) => {

    try {
        dispatch(getAllProductsRequest());

        const { data } = await axios.get(`${server}/product/getallproducts`, {
            headers: {
                "Content-Type": "application/json",
            },

            withCredentials: true
        });

        dispatch(getAllProductsSuccess(data.allProducts));

    } catch (error) {

        dispatch(getAllProductsFail(error.message));
        console.log(error);

    }

};


export const addPoppularProduct = async (dispatch, tabNo, pNo) => {

    try {
        dispatch(addPopularProductRequest());

        const { data } = await axios.post(`${server}/product/addpopularproduct`, {
            tabNo,
            pNo
        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch(addPopularProductSuccess());
        toast.success(data.message);

    } catch (error) {

        dispatch(addPopularProductFail(error.message));
        toast.error(error.response.data.message);

    }

};


export const addNewArrivalsProduct = async (dispatch, pNo, tabNo, arrivalCategory) => {

    try {
        dispatch(addNewArrivalsProductRequest());
        console.log(tabNo);

        const { data } = await axios.post(`${server}/product/addarrival/05`, {
            tabNo,
            category: arrivalCategory,
            pNo
        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch(addNewArrivalsProductSuccess());
        toast.success(data.message);

    } catch (error) {
        dispatch(addNewArrivalsProductsFail(error.message));
        toast.error(error.response.data.message);

    }

};


export const updateArrivalCategory = async (dispatch, oldCat, newCat) => {

    try {

        dispatch(updateArrivalCategoryRequest());

        const { data } = await axios.put(`${server}/product/updatearrivalcategory`, {
            oldCat, newCat

        }, {
            headers: {
                "Content-Type": "application/json"
            },

            withCredentials: true
        });

        dispatch(updateArrivalCategorySuccess());

        toast.success(data.message);

    } catch (error) {

        dispatch(updateArrivalCategoryFail(error.message));

        toast.error(error.response.data.message);
    }

};


export const getArrivalCategory = async (dispatch) => {

    try {
        dispatch(getArrivalCategoryRequest());
        // , 

        const { data } = await axios.get(`${server}/product/getArrivalproductcategory`, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch(getArrivalCategorySuccess(data.category));


    } catch (error) {
        dispatch(getArrivalCategoryFail());
        console.log(error);

    }

};


export const addBanner = async (dispatch, bNo, bannerText, image) => {
    try {


        dispatch(addBannerRequest());

        const formData = new FormData();

        formData.append('bNo', bNo);
        formData.append('bannerText', bannerText);
        formData.append('file', image[0]);


        const { data } = await axios.post(`${server}/product/addbanner`,
            formData, {
            withCredentials: true
        });

        dispatch(addBannerSuccess());

        toast.success(data.message);


    } catch (error) {

        dispatch(addBannerFail(error.message));
        toast.error(error.response.data.message);

    }

};



export const addSlider = async (dispatch, slideNo, slideText, slideImage) => {


    try {

        dispatch(addSlideRequest());


        const formData = new FormData();


        formData.append('slideNo', slideNo);
        formData.append('slideText', slideText);
        formData.append('file', slideImage[0]);

        const { data } = await axios.post(`${server}/product/addslider`,
            formData
            , {
                withCredentials: true
            });

        dispatch(addSlideSuccess());
        toast.success(data.message);

    } catch (error) {
        dispatch(addSlideFail(error.message));
        toast.error(error.response.data.message);

    }

};


export const deleteSlide = async (dispatch, no) => {

    try {
        dispatch(deleteSlideRequest());


        const { data } = await axios.delete(`${server}/product/deleteslider/${no}`, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch(deleteSlideSuccess());

        toast.success(data.message);
    } catch (error) {

        dispatch(deleteSlideFail(error.message));
        toast.error(error.response.data.message);
    }

};