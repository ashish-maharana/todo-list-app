const initialState = {
    list : []
}

// const[list, setlist] = useState([]);

const todoReducers = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
        const {id, data} = action.payload;
        return {
            ...state,
            list: [...state.list, { id:id, data: data }]
        }
    
        case 'DELETE_TODO':
        const newList = state.list.filter((e)=> e.id !== action.id)
        return {
            ...state,
            list: newList
        }

        case 'REMOVE_ALL_TODO':
        return {
            ...state,
            list: []
        }
        
        default:
            return state;
    }
}

export default todoReducers;