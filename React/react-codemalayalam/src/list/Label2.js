import React from "react";
import "./Label.css";
import { MyContext, MyNewContext } from "../pages/HomePage";

class Label2 extends React.Component {
  render() {
    const props = this.props;
    const style = props.isActive
      ? { background: "green" }
      : { backgound: "orange" };

    return (
      <MyNewContext.Consumer>
        {(val2) => {
          return (
            <MyContext.Consumer>
              {(val) => {
                if (val === false) {
                  return null;
                }

                return (
                  <span
                    onClick={() => {
                      props.onAction(props.isActive ? "active" : "non-active");
                    }}
                    className="list-label-item"
                    style={style}
                  >
                    {props.isActive ? "Active" : "Non Active"}
                  </span>
                );
              }}
            </MyContext.Consumer>
          );
        }}
      </MyNewContext.Consumer>
    );
  }
}

Label2.contextType = MyNewContext;

export default Label2;
