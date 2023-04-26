import React from "react";
import { useDispatch, useSelector } from "react-redux";

{
  /*import React from "react";
import "./Usage.css";
import { connect } from "react-redux";

class Settings extends React.Component {
  render() {
    // console.log(this.props);

    // const { value, dispatch } = this.props;

    const { value, myIncrement, myDecrement } = this.props;

    return (
      <div className="usage">
        <div className="usage-item">
          <button
            onClick={() => {
              //   dispatch({
              //     type: "increment",
              //   });

              myIncrement();
            }}
          >
            Increment
          </button>

          <label>{value}</label>

          <button
            onClick={() => {
              //   dispatch({
              //     type: "decrement",
              //   });

              myDecrement();
            }}
          >
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.value,
    // key2: "value2",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    myIncrement: () => {
      dispatch({
        type: "increment",
      });
    },
    myDecrement: () => {
      dispatch({
        type: "decrement",
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

// export default Settings;
*/
}

const Settings = () => {
  const dispatch = useDispatch();

  const handleShowLabel = (evt) => {
    const checkboxValue = evt.target.checked;

    dispatch({
      type: "show-label",
      payload: checkboxValue
    });
  };

  const val = useSelector((state) => state.showLabel);

  return (
    <div>
      <input checked={val} onChange={handleShowLabel} type="checkbox"></input>
      Show Label
    </div>
  );
};

export default Settings;
