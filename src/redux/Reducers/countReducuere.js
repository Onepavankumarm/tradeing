const initialCount = 0;

const countReducuere = (state = initialCount, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default: return state;
    }
}

export default countReducuere