import {
    RESTUARANTS_LIST_REQUEST,
    RESTUARANTS_LIST_SUCCESS,
    RESTUARANTS_LIST_FAIL,
} from '../constants/restaurantConstants';
import axios from 'axios';

export const listRestaurants = () => async (dispatch) => {
    
    try {
        dispatch({ type: RESTUARANTS_LIST_REQUEST })
        
        const {data} = await axios.get('/restaurants-react.json')


        dispatch({ type: RESTUARANTS_LIST_SUCCESS,payload: data.restaurants })
    } catch (err) {
        dispatch({ type: RESTUARANTS_LIST_FAIL,payload: err})
    }
    
}