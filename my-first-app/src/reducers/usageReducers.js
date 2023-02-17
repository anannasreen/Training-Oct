const TYPE = {
    CHANGE_VALUE:'change-value',
    CHANGE_COLOR: 'change-color'
}

function usageReducer(state, action) {
    switch (action.type) {
        case TYPE.CHANGE_VALUE:
            return {
                ...state,
                value: state.value + action.payload
            }
        case TYPE.CHANGE_COLOR:
            return {
                ...state,
                color: action.payload
            }
        default:
            return state;
        }
    }

    export default usageReducer;

    export {
        TYPE
    }
    
    // function usageReducer(state, action) {
    //     if (action === 'increment') {
    //         return state + 1;
    //     } else {
    //         return state - 1;
    //     }
    // }
    
    // function usageReducer(state, action) {
    //     switch (action) {
    //         case 'increment':
    //             return {
    //                 ...state,
    //                 value: state.value + 1
    //             }
    //         case 'decrement':
    //             return {
    //                 ...state,
    //                 value: state.value - 1
    //             }
    //         case 'green':
    //             return {
    //                 ...state,
    //                 color:'green'
    //             }
    //         case 'pink':
    //             return {
    //                 ...state,
    //                color:'pink'
    //             }
    //         default:
    //             break;
    //     }
    // }