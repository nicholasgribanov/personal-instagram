import * as FileSystem from 'expo-file-system';

import { BOOKING_POST, LOAD_POSTS, REMOVE_POST, ADD_POST } from "../../types"
import { DB } from "../../db"


export const loadPosts = () => {
    return async dispatch => {
        const posts = await DB.getPosts();
        dispatch({
            type: LOAD_POSTS,
            payload: posts
        })
    }

}

export const bookingPost = (post) => async dispatch => {
    await DB.updatePost(post)

    dispatch({
        type: BOOKING_POST,
        payload: post.id
    })
}

export const removePost = (id) => async dispatch => {
    await DB.removePost(id)
    dispatch({
        type: REMOVE_POST,
        payload: id
    })
}

export const addPost = post => async dispatch => {
    const fileName = post.img.split('/').pop();
    const newPath = FileSystem.documentDirectory + fileName;
    try {
        await FileSystem.moveAsync({
            from: post.img,
            to: newPath
        })
    } catch (e) {
        console.log('Error: ', e)
    }
    const payload = { ...post, img: newPath }
    const id = await DB.createPost(payload)
    payload.id = id

    dispatch({
        type: ADD_POST,
        payload
    })

}
