import { useEffect, useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { addGood } from "./store/actions";
import { selectGoods, countGoods } from "./store/selectors";


// 1.
const Goods = () => {
    const goods = useSelector(selectGoods);
    console.log(goods);
    const dispatch = useDispatch();


    useEffect(() => {
        setTimeout(() => {
            dispatch(addGood({ id: '4', name: 'Four' }))
        }, 2000)
    }, []);

    return (
        <div>{goods.map(item =>
            <p>{item.id}  {item.name}</p>
        )}

        </div>
    )

}

export default Goods;

// 2.Классовый компонент:
// const Goods = ({ goods }) => {
//     console.log(goods);
//     console.log(addGood);

//     return <div>Goods</div>
// };

// const mapStateToProps = (state) => {
//     return {
//         goods: selectGoods(state)
//     }
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addGood: (data) => dispatch(addGood(data))
//     }
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Goods);



// const Goods = () => {
//     const goods = useSelector(selectGoods);
//     const dispatch = useDispatch();
//     const length = useSelector(countGoods);

//     const [inputValue, setInputValue] = useState('');

//     const handleChange = (event) => {
//         setInputValue(event.target.value);
//     };

//     const handleClick = () => {
//         dispatch(addGood({ id: length + 1, name: inputValue }))
//     };


//     return (
//         <div>{goods.map(item =>
//             <p>{item.id}  {item.name}</p>
//         )}
//             <input type="text" onChange={handleChange} />
//             <button onClick={handleClick}>Add goods</button>

//             <p>List length: {length}</p>
//         </div>
//     )
// }


// const Goods = () => {
//     // const goods = useSelector(selectGoods);
//     const [users, setUsers] = useState([]);

//     useEffect(async () => {
//         let response = await fetch('https://api.github.com/users');
//         let result = await response.json();
//         setUsers(result);
//     }, []);

//     return (
//         <div>
//             {users.map(item => <p>
//                 {/* {item.id}   */}
//                 {item.login}
//             </p>)}
//         </div>
//     )
// }


// 5.
// const Goods = () => {
//     // const goods = useSelector(selectGoods);
//     const [users, setUsers] = useState([]);

//     useEffect(async () => {
//         let response = await fetch('https://gp-js-test.herokuapp.com/pizza/guests');
//         let result = await response.json();
//         // console.log(result.party)
//         setUsers(result.party);
//     }, []);

//     return (
//         <div>
//             {users.map(item => <p>
//                 {/* {item.id}   */}
//                 {item.name}
//             </p>)}
//         </div>
//     )
// }


// export default Goods;