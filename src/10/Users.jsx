import { useEffect, useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { addGood } from "./store/actions";
import { selectGoods, countGoods } from "./store/selectors";
import { fetchUsers, fetchOneUser } from "./store/actions";
import { selectData, selectDataLoading, selectDataError , selectOneUserData} from "./store/selectors";
import { DataVisualiser } from "./store/actions";

// // 1
// const Users = () => {
//     const dispatch = useDispatch();
    
//     useEffect(async () => {
//         dispatch(fetchUsers());        
//     }, []);

    
//     return (
//         <></>
//     )
// }





const Users = () => {
    const dispatch = useDispatch();
    
    const dataOneUser = useSelector(selectOneUserData);
    // const loading = useSelector(selectDataLoading);
    // const error = useSelector(selectDataError);
    
    
    useEffect(async () => {
        dispatch(fetchOneUser());        
    }, []);

    
    return (
        <>
{dataOneUser.id}
        </>
    )
}

export default Users;