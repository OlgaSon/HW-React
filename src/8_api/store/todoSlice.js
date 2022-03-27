import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function (_, {
        rejectWithValue
    }) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
            if (!response.ok) {
                throw new Error('Server Error');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return (error.message)

        }

    }
);

export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async function (id, {
        rejectWithValue,
        dispatch
    }) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'DELETE',
            });
            // console.log(response);
            if (!response.ok) {
                throw new Error('Can\'t delete. Server error.');
            };

            dispatch(removeTodo({
                id
            }));

            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message)

        }

    }
);


export const toggleStatus = createAsyncThunk(
    'todos/toggleStatus',
    async function (id, {
        rejectWithValue,
        dispatch,
        getState
    }) {
        const todo = getState().todos.todos.find(todo => todo.id === id);
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    completed: !todo.completed,
                })
            });
            // console.log(response);
            if (!response.ok) {
                throw new Error('Can\'t toogle status. Server error.');
            };

            dispatch(toggleComplete({
                id
            }));

            const data = await response.json();
            // console.log(data)
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);



export const addNewTodo = createAsyncThunk(
    'todos/addNewTodo',
    async function (text, {
        rejectWithValue,
        dispatch,
        //     getState
    }) {

        try {
            const todo = {
                title: text,
                userId: 1,
                completed: false,
            };

            const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(todo)
            });
            // console.log(response);
            if (!response.ok) {
                throw new Error('Can\'t add. Server error.');
            };


            

            const data = await response.json();
            console.log(data);
            dispatch(addTodo(data));


            //         return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);



const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}


const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        status: null,
        error: null,
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload);
        },
        toggleComplete(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        }
    },
    extraReducers: {
        [fetchTodos.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchTodos.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.todos = action.payload;
        },
        [fetchTodos.rejected]: setError,
        [deleteTodo.rejected]: setError,
        [toggleStatus.rejected]: setError,
    }
});

// export 
const {
    addTodo,
    toggleComplete,
    removeTodo
} = todoSlice.actions;

export default todoSlice.reducer;