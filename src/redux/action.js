import * as types from './actionType';
import axios from 'axios';

const getUsers = (users) =>({
    type: types.GET_USERS,
    payload: users,
});

const userDeleted = () =>({
    type: types.DELETE_USER,
});
const userAdded = () =>({
    type: types.ADD_USER,
});

const serachItem = () =>({
    type: types.FILTER_TERM,
});

export const loadUsers = () =>{
    return function (dispatch){
        axios.get(`${process.env.REACT_APP_API}`)
        .then((res)=>{
            console.log("res: ", res);
            dispatch(getUsers(res.data));
        }).catch((err)=>console.log(err));
    };
};

export const deleteUser = (id) =>{
    return function (dispatch){
        axios.delete(`${process.env.REACT_APP_API}/${id}`)
        .then((res)=>{
            console.log("res: ", res);
            dispatch(userDeleted());
            dispatch(loadUsers());
        }).catch((err)=>console.log(err));
    };
};


export const addUser = (user) =>{
    return function (dispatch){
        axios.post(`${process.env.REACT_APP_API}`, user)
        .then((res)=>{
            console.log("res: ", res);
            dispatch(userAdded());
            // dispatch(loadUsers());
        }).catch((err)=>console.log(err));
    };
};

export const filterTerm = (term) =>{
    return function (dispatch){
        dispatch(serachItem());
    }
}


// export const getAllCards = (state) => state.movies.movies;