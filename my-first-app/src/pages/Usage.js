import React, {  useReducer } from "react";
import './Usage.css';
import usageReducer, {TYPE} from "../reducers/usageReducers";

const initialState = {
    value: 0
}

function Usage() {

    const [state, dispatch] = useReducer(usageReducer, initialState);

    return (
            <div className="usage" >
                <div className="usage-item" style={{ background: state.color }}>
                    <button onClick={() => {
                        dispatch({
                            type: TYPE.CHANGE_VALUE,
                            payload: 1
                        });
                        }}>
                            Increment
                            </button>
                    <label>{state.value}</label>
                    <button onClick={() => {
                        dispatch({
                            type:TYPE.CHANGE_VALUE,
                            payload: -1
                        })
                       
                        }}>
                            Decrement
                            </button>
                </div>
                <button onClick={() => {
                    dispatch({
                        type: TYPE.CHANGE_COLOR,
                        payload: 'green'
                    });
                }}>Green</button>
                <button onClick={() => {
                    dispatch({
                        type: TYPE.CHANGE_COLOR,
                        payload: 'pink'
                    });
                }}>Pink</button>
            </div>
    );
}

export default Usage;

// <div>HELLO</div>
// const arr = useState(0);
// const setValue = aar[1];
// return () =>{
    //     console.log('Clean up' + value);
    // }
    /* <div className="boom">
    <span>
    BOOM
    </span>
    </div> */
    
    // setBoom(false)
    // const id = setTimeout(()=>{
        //     setBoom(true)
        // }, value * 1000)
        // console.log("Inside Use Effect " + value);
        // return () => {
        //     clearTimeout(id)
        //     // console.log("Clean up" + value);
 // }
// function valueReducer(state, action) {
            //     if (action === 'increment') {
            //         return state + 1;
            //     } else {
            //         return state - 1;
            //     }
            // }            
// const [value, setValue] = useState(0);
    // const [color, setColor] = useState('white');
    // console.log("EFFECT");
    // setValue((state) => {
        //     return state + 1
        // })
 // setValue((state) => {
                            //     return state - 1
                            // })
// const [boom, setBoom] = useState(false);
    
    // useEffect(() => {
    //     return () => {
    //         console.log("CLEAN UP");
    //     }
    // }, []);
/* {
                boom && state ? (
                    <div className="boom">
                        <span>
                            BOOM
                        </span>
                    </div>
                ) : null
            } */   