import React from "react";

const initialState=0

const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1
            case 'decrement':
                return state-1
                case 'reset':
                    return state
    }
}