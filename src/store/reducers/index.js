import {combineReducers} from 'redux';
import PostsReducer from './posts_reducer';
import userReducer from './user_reducer';

const appReducers = combineReducers({
    posts: PostsReducer,
    user: userReducer
})

export default appReducers;