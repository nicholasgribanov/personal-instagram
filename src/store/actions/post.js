import { BOOKING_POST, LOAD_POSTS } from "../../types"
import { DATA } from "../../data"

export const loadPosts = () => {
    return {
        type: LOAD_POSTS,
        payload: DATA
    }
}

export const bookingPost = (id) => {
    return {
        type: BOOKING_POST,
        payload: id
    }
}
