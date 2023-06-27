import { userAPI } from "../components/Api/Api";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT_ACTION_CREATOR = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

let initialState = {
    posts: [
        { id: '1', message: 'Hi', likes: '11' },
        { id: '2', message: 'Hi', likes: '12' },
        { id: '3', message: 'Hi', likes: '13' },
    ],
    newPostText: 'Yo',
    profile: null,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: return {
            ...state,
            posts: [...state.posts, {
                id: '4', message: state.newPostText, likes: '1',
            }],
            newPostText: '',
        }
        case UPDATE_NEW_POST_TEXT_ACTION_CREATOR:
            return {
                ...state,
                newPostText: action.newText,
            }

        case SET_USERS_PROFILE:
            return {...state, profile: action.profile }

        default: return state;
    }
}
export const addPostActionCreator = () => {
    return ({ type: ADD_POST })
}
export const updateNewPostTextActionCreator = (text) => {
    return ({ type: UPDATE_NEW_POST_TEXT_ACTION_CREATOR, newText: text })
}
export const setUsersProfile = (profile) => {
    return ({ type: SET_USERS_PROFILE, profile: profile })
}
export const getProfile =(userId) => {
    return (dispatch)=>{
    userAPI.getProfile(userId)
            .then(response => {
                dispatch(setUsersProfile(response.data))
            })
}}
