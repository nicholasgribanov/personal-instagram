import { BOOKING_POST, LOAD_POSTS, REMOVE_POST, ADD_POST } from "../../types"


export const loadPosts = () => {
    return {
        type: LOAD_POSTS,
        payload: []
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

export const addPost = post => {
    post.id = Date.now().toString()
    return {
        type: ADD_POST,
        payload: post
    }
}
