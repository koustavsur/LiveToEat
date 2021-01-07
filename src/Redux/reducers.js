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

const reducer = (state =  null, action) => {
    switch (action.type) {
        case GET_APPETIZERS_REQUEST:{
            let appData = state.appetizer.data 
            return {
                ...state,
                appetizer: {
                    isLoading: true,
                    error: null,
                    data: appData
                }
            }
        }
        case GET_APPETIZERS_SUCCESS:{
            let appData = state.appetizer.data 
            if(appData !== null){
                appData = [...appData, ...action.payload]
            }
            else{
                appData = action.payload
            }
            return {
                ...state,
                appetizer: {
                    isLoading: false,
                    error: false,
                    data: appData
                }
            }
        }
        case GET_APPETIZERS_FAIL:
            return {
                ...state,
                appetizer: {
                    isLoading: false,
                    error: action.payload,
                    data: false
                }
            }
        case GET_BREAKFAST_REQUEST:{
            let appData = state.breakfast.data
            return {
                ...state,
                breakfast: {
                    isLoading: true,
                    error: null,
                    data: appData
                }
            }
        }
        case GET_BREAKFAST_SUCCESS:{
            let appData = state.breakfast.data 
            if(appData !== null){
                appData = [...appData, ...action.payload]
            }
            else{
                appData = action.payload
            }
            return {
                ...state,
                breakfast: {
                    isLoading: false,
                    error: false,
                    data: appData
                }
            }
        }
        case GET_BREAKFAST_FAIL:
            return {
                ...state,
                breakfast: {
                    isLoading: false,
                    error: action.payload,
                    data: false
                }
            }
        case GET_LUNCH_REQUEST:{
            let appData = state.lunch.data
            return{
                ...state,
                lunch:{
                    isLoading: true,
                    error: null,
                    data: appData
                }
            }
        }
        case GET_LUNCH_SUCCESS:{
            let appData = state.lunch.data 
            if(appData !== null){
                appData = [...appData, ...action.payload]
            }
            else{
                appData = action.payload
            }
            return{
                ...state,
                lunch:{
                    isLoading: false,
                    error: false,
                    data: appData
                }
            }
        }
        case GET_LUNCH_FAIL:
            return{
                ...state,
                lunch:{
                    isLoading: false,
                    error: action.payload,
                    data: false
                }
            }
        case GET_DINNER_REQUEST:{
            let appData = state.dinner.data
            return {
                ...state,
                dinner: {
                    isLoading: true,
                    error: null,
                    data: appData
                }
            }
        }
        case GET_DINNER_SUCCESS:{
            let appData = state.dinner.data 
            if(appData !== null){
                appData = [...appData, ...action.payload]
            }
            else{
                appData = action.payload
            }
            return{
                ...state,
                dinner:{
                    isLoading: false,
                    error: false,
                    data: appData
                }
            }
        }
        case GET_DINNER_FAIL:
            return{
                ...state,
                dinner:{
                    isLoading: false,
                    error: action.payload,
                    data: false
                }
            }
        case GET_DESSERT_REQUEST:{
            let appData = state.dessert.data 
            return{
                ...state,
                dessert:{
                    isLoading: true,
                    error: null,
                    data: appData
                }
            }
        }
        case GET_DESSERT_SUCCESS:{
            let appData = state.dessert.data 
            if(appData !== null){
                appData = [...appData, ...action.payload]
            }
            else{
                appData = action.payload
            }
            return{
                ...state,
                dessert:{
                    isLoading: false,
                    error: false,
                    data: appData
                }
            }
        }
        case GET_DESSERT_FAIL:
            return{
                ...state,
                dessert:{
                    isLoading: false,
                    error: action.payload,
                    data: false
                }
            }
        case GET_INDIAN_REQUEST:{
            let appData = state.indian.data 
            return{
                ...state,
                indian:{
                    isLoading: true,
                    error: null,
                    data: appData
                }
            }
        }
        case GET_INDIAN_SUCCESS:{
            let appData = state.indian.data 
            if(appData !== null){
                appData = [...appData, ...action.payload]
            }
            else{
                appData = action.payload
            }
            return{
                ...state,
                indian:{
                    isLoading: false,
                    error: false,
                    data: appData
                }
            }
        }
        case GET_INDIAN_FAIL:
            return{
                ...state,
                indian:{
                    isLoading: false,
                    error: action.payload,
                    data: false
                }
            }
        case GET_CHINESE_REQUEST:{
            let appData = state.chinese.data 
            return{
                ...state,
                chinese:{
                    isLoading: true,
                    error: null,
                    data: appData
                }
            }
        }
        case GET_CHINESE_SUCCESS:{
            let appData = state.chinese.data 
            if(appData !== null){
                appData = [...appData, ...action.payload]
            }
            else{
                appData = action.payload
            }
            return{
                ...state,
                chinese:{
                    isLoading: false,
                    error: false,
                    data: appData
                }
            }
        }
        case GET_CHINESE_FAIL:
            return{
                ...state,
                chinese:{
                    isLoading: false,
                    error: action.payload,
                    data: false
                }
            }
        case GET_ITALIAN_REQUEST:{
            let appData = state.italian.data 
            return{
                ...state,
                italian:{
                    isLoading: true,
                    error: null,
                    data: appData
                }
            }
        }
        case GET_ITALIAN_SUCCESS:{
            let appData = state.italian.data 
            if(appData !== null){
                appData = [...appData, ...action.payload]
            }
            else{
                appData = action.payload
            }
            return{
                ...state,
                italian:{
                    isLoading: false,
                    error: false,
                    data: appData
                }
            }
        }
        case GET_ITALIAN_FAIL:
            return{
                ...state,
                italian:{
                    isLoading: false,
                    error: action.payload,
                    data: false
                }
            }
        case GET_RECEIPEBYID_REQUEST:
            return{
                ...state,
                receipeById:{
                    isLoading: true,
                    error: null,
                    data: null
                }
            }
        case GET_RECEIPEBYID_SUCCESS:
            return{
                ...state,
                receipeById:{
                    isLoading: false,
                    error: false,
                    data: action.payload

                }
            }
        case GET_RECEIPEBYID_FAIL:
            return{
                ...state,
                receipeById:{
                    isLoading: false,
                    error: action.payload,
                    data: false
                }
            }
        default: return state;
    }
}

export default reducer;