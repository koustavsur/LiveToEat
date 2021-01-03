import {
    GET_APPETIZERS_REQUEST,
    GET_APPETIZERS_SUCCESS,
    GET_APPETIZERS_FAIL,

    GET_BREAKFAST_REQUEST,
    GET_BREAKFAST_SUCCESS ,
    GET_BREAKFAST_FAIL,

    GET_LUNCH_REQUEST,
    GET_LUNCH_SUCCESS,
    GET_LUNCH_FAIL,

    GET_DINNER_REQUEST,
    GET_DINNER_SUCCESS,
    GET_DINNER_FAIL,

    GET_DESSERT_REQUEST,
    GET_DESSERT_SUCCESS,
    GET_DESSERT_FAIL,

    GET_INDIAN_REQUEST,
    GET_INDIAN_SUCCESS,
    GET_INDIAN_FAIL,

    GET_CHINESE_REQUEST,
    GET_CHINESE_SUCCESS,
    GET_CHINESE_FAIL,

    GET_ITALIAN_REQUEST,
    GET_ITALIAN_SUCCESS,
    GET_ITALIAN_FAIL,

    GET_RECEIPEBYID_REQUEST,
    GET_RECEIPEBYID_SUCCESS,
    GET_RECEIPEBYID_FAIL
} from "./constants";

import {
    getAppetizers,
    getBreakfast,
    getLunch,
    getDinner,
    getDessert,
    getIndian,
    getChinese,
    getItalian,
    getReceipeById
} from "./api";

const getAppetizer = async (dispatch, from, to) => {
    dispatch({ type: GET_APPETIZERS_REQUEST });

    try {
        const response = await getAppetizers(from,to);
        let recipes = [];
        if(response.ok)
        {
            let result= await response.json();
            console.log(result);
            result.results.map(res => {
                if(res.hasOwnProperty("recipes")){
                    return (res.recipes.map(item => recipes.push(item)))
                }else{
                    return (recipes.push(res))
                }
            })
            dispatch({ type: GET_APPETIZERS_SUCCESS, payload: recipes});
        }else{
            dispatch({ type: GET_APPETIZERS_FAIL, payload: recipes });
        }
    } catch (e) {
        dispatch({ type: GET_APPETIZERS_FAIL, payload: e });
    }
};

const getBreak = async (dispatch, from, to) => {
    dispatch({ type: GET_BREAKFAST_REQUEST });

    try{
        const response = await getBreakfast(from, to);
        let recipes = [];
        if(response.ok)
        {
            let result= await response.json();
            console.log(result);
            result.results.map(res => {
                if(res.hasOwnProperty("recipes")){
                    return(res.recipes.map(item => recipes.push(item)))
                }else{
                    return(recipes.push(res))
                }
            })
            dispatch({ type: GET_BREAKFAST_SUCCESS, payload: recipes});
        }else{
            dispatch({ type: GET_BREAKFAST_FAIL, payload: recipes });
        }
    }catch (e) {
        dispatch({ type: GET_BREAKFAST_FAIL, payload: e });
    }
}

const getlunch = async (dispatch, from, to) => {
    dispatch({ type: GET_LUNCH_REQUEST });

    try {
        const response = await getLunch(from, to);
        let recipes = [];
        if(response.ok)
        {
            console.log("Inside Lunch action success");
            let result= await response.json();
            result.results.map(res => {
                if(res.hasOwnProperty("recipes")){
                    return (res.recipes.map(item => recipes.push(item)))
                }else{
                    return (recipes.push(res))
                }
            })
            dispatch({ type: GET_LUNCH_SUCCESS, payload: recipes});
        }else{
            dispatch({ type: GET_LUNCH_FAIL, payload: recipes});
        }
    } catch (e) {
        dispatch({ type: GET_LUNCH_FAIL, payload: e });
    }
}


const getdinner = async (dispatch, from, to) => {
    dispatch({ type: GET_DINNER_REQUEST });

    try {
        const response = await getDinner(from, to);
        let recipes = [];
        if(response.ok)
        {
            let result= await response.json();
            result.results.map(res => {
                if(res.hasOwnProperty("recipes")){
                    return (res.recipes.map(item => recipes.push(item)))
                }else{
                    return (recipes.push(res))
                }
            })
            dispatch({ type: GET_DINNER_SUCCESS, payload: recipes});
        }else{
            dispatch({ type: GET_DINNER_FAIL, payload: recipes});
        }
    } catch (e) {
        dispatch({ type: GET_DINNER_FAIL, payload: e });
    }
}

const getdessert = async (dispatch, from, to) => {
    dispatch({ type: GET_DESSERT_REQUEST });

    try {
        const response = await getDessert(from, to);
        let recipes = [];
        if(response.ok)
        {
            let result= await response.json();
            console.log(result);
            result.results.map(res => {
                if(res.hasOwnProperty("recipes")){
                    return (res.recipes.map(item => recipes.push(item)))
                }else{
                    return (recipes.push(res))
                }
            })
            dispatch({ type: GET_DESSERT_SUCCESS, payload: recipes});
        }else{
            dispatch({ type: GET_DESSERT_FAIL, payload: recipes});
        }
    } catch (e) {
        dispatch({ type: GET_DESSERT_FAIL, payload: e });
    }
}

const getindian = async (dispatch, from, to) =>{
    dispatch({ type: GET_INDIAN_REQUEST });

    try {
        const response = await getIndian(from, to);
        let recipes = [];
        if(response.ok)
        {
            let result= await response.json();
            result.results.map(res => {
                if(res.hasOwnProperty("recipes")){
                    return (res.recipes.map(item => recipes.push(item)))
                }else{
                    return (recipes.push(res))
                }
            })
            dispatch({ type: GET_INDIAN_SUCCESS, payload: recipes});
        }else{
            dispatch({ type: GET_INDIAN_FAIL, payload: recipes});
        }
    } catch (e) {
        dispatch({ type: GET_INDIAN_FAIL, payload: e });
    }
}

const getchinese= async (dispatch, from, to) =>{
    dispatch({ type: GET_CHINESE_REQUEST });

    try {
        const response = await getChinese(from, to);
        let recipes = [];
        if(response.ok)
        {
            let result= await response.json();
            result.results.map(res => {
                if(res.hasOwnProperty("recipes")){
                    return (res.recipes.map(item => recipes.push(item)))
                }else{
                    return (recipes.push(res))
                }
            })
            dispatch({ type: GET_CHINESE_SUCCESS, payload: recipes});
        }else{
            dispatch({ type: GET_CHINESE_FAIL, payload: recipes});
        }
    } catch (e) {
        dispatch({ type: GET_CHINESE_FAIL, payload: e });
    }
}

const getitalian= async (dispatch, from, to) =>{
    dispatch({ type: GET_ITALIAN_REQUEST });

    try {
        const response = await getItalian(from, to);
        let recipes = [];
        if(response.ok)
        {
            let result= await response.json();
            result.results.map(res => {
                if(res.hasOwnProperty("recipes")){
                    return (res.recipes.map(item => recipes.push(item)))
                }else{
                    return (recipes.push(res))
                }
            })
            dispatch({ type: GET_ITALIAN_SUCCESS, payload: recipes});
        }else{
            dispatch({ type: GET_ITALIAN_FAIL, payload: recipes});
        }
    } catch (e) {
        dispatch({ type: GET_ITALIAN_FAIL, payload: e });
    }
}

const getreceipeById= async (dispatch, id) =>{
    dispatch({ type: GET_RECEIPEBYID_REQUEST });

    try {
        const response = await getReceipeById(id);
        let recipe = null;
        if(response.ok)
        {
            recipe = await response.json();
            dispatch({ type: GET_RECEIPEBYID_SUCCESS, payload: recipe});
        }else{
            dispatch({ type: GET_RECEIPEBYID_FAIL, payload: recipe});
        }
    } catch (e) {
        dispatch({ type: GET_RECEIPEBYID_FAIL, payload: e });
    }
}

export const getAppetizersFunc = dispatch => {
    return (from, to) => getAppetizer(dispatch, from, to);
}

export const getBreakfastFunc = dispatch => {
    return (from, to) => getBreak(dispatch, from, to);
}

export const getLunchFunc = dispatch => {
    return (from, to) => getlunch(dispatch, from, to)
}

export const getDinnerFunc = dispatch => {
    return (from, to) => getdinner(dispatch, from, to)
}

export const getDessertFunc = dispatch => {
    return (from, to) => getdessert(dispatch, from, to)
}

export const getIndianFunc = dispatch => {
    return (from, to) => getindian(dispatch, from, to)
}

export const getChineseFunc = dispatch => {
    return (from, to) => getchinese(dispatch, from, to)
}

export const getItalianFunc = dispatch => {
    return (from, to) => getitalian(dispatch, from, to)
}

export const getReceipeByIdFunc = dispatch => {
    return (id) => getreceipeById(dispatch, id)
}