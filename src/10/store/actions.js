import { FETCH_USERS, FETCH_ONE_USER } from "./actionTypes";

export const fetchUsers = () => ({
    type: FETCH_USERS
})


export const fetchOneUser = () => ({
    type: FETCH_ONE_USER
})