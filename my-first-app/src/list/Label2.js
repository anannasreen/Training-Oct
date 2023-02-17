import React from "react";
import './Label.css';
import { MyContext, MyNewContext } from "../pages/mycontexts";

class Label2 extends React.Component {
    // static contextType = MyNewContext;

    render() {
        const props = this.props;
        const style = props.isActive ? { background: 'green' } : { background: 'orange' }
        // console.log(this.context)
        return (
            <MyContext.Consumer>
                {
                    (val) => {
                        if (val === false) {
                            return null;
                        }
                        return (
                            <span
                                onClick={() => {
                                    props.onAction(props.isActive ? 'active' : 'non-active');
                                }}
                                className="list-label-item"
                                style={style}
                            >
                                {props.isActive ? 'Active' : 'Non Active'}
                            </span>
                        )
                    }
                }
            </MyContext.Consumer>
        )
    }
}
Label2.contextType = MyNewContext

export default Label2;
 // console.log('Context Val = ', val);
                // <MyNewContext.Consumer>
                //     {
                    //         (val2) => {
                        //             return (
                            // console.log("***", val2);
                            //             </MyNewContext.Consumer>
                            //         );
                            //     }
                            // }