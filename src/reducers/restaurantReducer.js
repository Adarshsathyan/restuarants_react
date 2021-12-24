import {
    RESTUARANTS_LIST_REQUEST,
    RESTUARANTS_LIST_SUCCESS,
    RESTUARANTS_LIST_FAIL,
} from '../constants/restaurantConstants';

export const restauarantListReducer = (states = { restaurants: [] }, actions) => {
    switch (actions.type) {
        case RESTUARANTS_LIST_REQUEST:
            return { restaurants: [] }
        case RESTUARANTS_LIST_SUCCESS:
            return { restaurants: actions.payload }
        case RESTUARANTS_LIST_FAIL:
            return { restaurants: actions.payload }
        default:
            return states
            
    }
}