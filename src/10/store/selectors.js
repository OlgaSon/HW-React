export const selectData = (state) => {
    return state.users;
}


export const selectDataLoading = (state) => {
    return state.laoding;
}

export const selectDataError = (state) => {
    return state.state;
}


export const selectOneUserData = (state) => {
    return state.user;
}


