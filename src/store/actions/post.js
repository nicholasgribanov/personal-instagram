import { BOOKING_POST, LOAD_POSTS, REMOVE_POST } from "../../types"
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

export const removePost = (id) => {
    return {
        type: REMOVE_POST,
        payload: id
    }
}
