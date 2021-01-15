import {GET_POSTS,  
    ADD_NEWSLETTER, 
    CLEAR_NEWSLETTER,
    GET_POST_BY_ID,
    CLEAR_POST_BY_ID
} from '../types';
import * as api from '../../api';



/*////////////////////////////////////
POSTS
/////////////////////////////////////*/
export const getPosts = (homePosts,page,order,limit) => {
    return {
        type: GET_POSTS,
        payload: api.getPosts(homePosts,page,order,limit)
    }
}

export const getPostById = (id) => ({
    type: GET_POST_BY_ID,
    payload:api.getPostById(id)
})

export const clearPostById = () => ({
    type: CLEAR_POST_BY_ID,
    payload: {}
})



/*////////////////////////////////////
USER
/////////////////////////////////////*/

export const addNewsletter = (data) => ({
    type: ADD_NEWSLETTER,
    payload: api.addNewsletter(data)
}) 

export const clearNewsletter = () => ({
    type: CLEAR_NEWSLETTER,
    payload: {}
})
