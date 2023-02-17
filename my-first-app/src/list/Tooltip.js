import React from "react";

function Tooltip(props, ref) {
    const {
        showTooltip,
        message = `This is ${props.isactive ? 'Active' : 'Non Active'} tooltip`
    } = props;

    if(!showTooltip){
        return null;
    }

    const myTest = () => {
        console.log('HELLO Im in MyTest');
    }

    return (
        <label 
            className="tooltip" ref={ref}>
            {message}
        </label>
    );
}

export default React.forwardRef(Tooltip);

// useImperativeHandle(ref, ()=>{
//     return{
//        myTest: ()=>{
//         console.log('HELLO Im in MyTest')
//        }
//     }
// });

// return (
//     <label 
//         className={`tooltip ${showTooltip ? 'show-tooltip' : 'hide-tooltip'}`}
//     >
//         This is {props.isactive ? 'Active' : 'Non Active'} tooltip
//     </label>
// );
// const Tooltip = React.forwardRef(function (props, ref) {
//         const {
//             showTooltip
//         } = props;
    
//         // const refObj = useRef();
    
//         return (
//             <label ref={ref}
//                 className={`tooltip ${showTooltip ? 'show-tooltip' : 'hide-tooltip'}`}
//             >
//                 This is {props.isactive ? 'Active' : 'Non Active'} tooltip
//             </label>
//         );
//     }
// )

// export default Tooltip;