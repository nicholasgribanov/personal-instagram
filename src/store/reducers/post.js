import { BOOKING_POST, LOAD_POSTS } from "../../types"

const initialState = {
    allPosts: [],
    bookedPosts: []
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS: return {
            ...state,
            allPosts: action.payload,
            bookedPosts: action.payload.filter(post => post.booked)
        }

        case BOOKING_POST:
            const allPosts = state.allPosts.map(post => {
                if (post.id === action.payload) {
                    post.booked = !post.booked
                }
                return post
            })

            return { ...state, allPosts, bookedPosts: allPosts.filter(post => post.booked) }

        default: return state
    }
}
