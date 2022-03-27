import { useEffect, useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { addGood } from "./store/actions";
import { selectGoods, countGoods } from "./store/selectors";
import { fetchUsers } from "./store/actions";
import { selectData, selectDataLoading, selectDataError } from "./store/selectors";
import { DataVisualiser } from "./store/actions";


const Users = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectData);
    const loading = useSelector(selectDataLoading);
    const error = useSelector(selectDataError);

    useEffect(async () => {
        dispatch(fetchUsers());        
    }, []);

    if (loading) return <>loading</>
    if (error) return <>error</>

    return (<>
        {data.map((item) => (
            <p key={item.id}>{item.id} {item.login}</p>
        ))}
    </>
    )
}


export default Users;