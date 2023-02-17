import React, { useContext } from 'react';
import './Label.css';
import { MyContext } from '../pages/mycontexts';
import Tooltip from './Tooltip';
import { useTooltip } from '../hooks/ourHooks';

function LabelCopy(props) {
    const val = useContext(MyContext);
  
     const [showTooltip, setShowTooltip, labelRef, refObj] = useTooltip();
    
    const style = props.isActive ? { background: 'green' } : { background: 'orange' }
    if (val === false) {
        return null;
    }
    
    const handleMouseEnter = () => {
        setShowTooltip(true);
    }
    
    const handleMouseLeave = () => {
        setShowTooltip(false);
    }
    
    
    return (
            <div className="list-label-item-container">
            <span
                ref={labelRef}
                onClick={() => {
                    props.onAction(props.isActive ? 'active' : 'non-active')
                }}
                className="list-label-item" style={style}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                {props.isActive ? 'Active' : 'Non Active'}

            </span>
            <Tooltip ref={refObj} showTooltip={showTooltip}/>
        </div>
    )
}

export default LabelCopy;

// const refObj = useMemo(()=>{
    //     return {
        //         current:undefined
        //     };
        // },[])
        // console.log(refObj)
        // console.log(e.target)
        // console.log(refObj.current)
        
        // const width1 = e.target.getBoundingClientRect().width;
        // const width2 = e.target.getBoundingClientRect().width;
        // refObj.current.style.left =`${( width2 - width1) / 2}px`
        
        // console.log(refObj.current.myTest());
        // const refObj = {
            //     current: null
            // }
            /* <label
                 ref={refObj}
                 className={`tooltip ${showTooltip ? 'show-tooltip' : 'hide-tooltip'}`}>
                 This is {props.isActive ? 'Active' : 'Non Active'} tooltip
             </label> */
  // const [showTooltip, setShowTooltip] = useState(false)

    // // const labelRef = useTest();
    // const labelRef = useRef();
    // const refObj = useRef();


    // useLayoutEffect(() => {
    //     if (showTooltip) {
    //         console.log(labelRef.current);
    //         const width1 = labelRef.current.getBoundingClientRect().width;
    //         const width2 = refObj.current.getBoundingClientRect().width;

    //         refObj.current.style.left = `${-(width2 - width1) / 2}px`
    //     }
    // }, [showTooltip])

    
    // const refCallback = useCallback((domItem) => {
    //     console.log('Inside Function')
    //     console.log(domItem)
    // });