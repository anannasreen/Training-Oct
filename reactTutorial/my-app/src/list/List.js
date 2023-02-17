import React from "react";
import ListItem from "./ListItem";
import Tools from "../../my-app/src/components/Tools";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

// let arr = [
//   {
//     title: "Appointment for October",
//     descr: "The patient is rescheduled to October",
//     isActive: false,
//   },
//   {
//     title: "Appointment for November",
//     descr: "The patient is rescheduled to November",
//     isActive: true,
//   },
//   {
//     title: "Appointment for December",
//     descr: "The patient is rescheduled to December",
//     isActive: false,
//   },
// ];

// const obj = {
//   title: "Appointment for October",
//   descr: "The patient is rescheduled to October",
//   isActive: false,
// };

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: arr,
      activeState: "all",
    };
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentDidMount() {
    console.log("component");
    fetch("/data.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.setState({
          data: data,
        });
      });
  }

  onListChange(evt) {
    console.log(evt.target.value);
    const value = evt.target.value;
    const newList = arr.filter((item) => {
      if (value === "all") {
        return true;
      }
      if (value === "active") {
        return item.isActive === true;
      }
      if (value === "non-active") {
        return item.isActive === false;
      }
      return false;
    });
    console.log(newList);

    arr = newList;
  }

  render() {
    return (
      <Tools onAction={this.onListChange}>
        <div className="app-list">
          {this.state.data.map((obj) => {
            return (
              <ListItem
                key={obj.title}
                title={obj.title}
                descr={obj.descr}
                isActive={obj.isActive}
              />
            );
          })}
          {/* <ListItem
            title={obj.title}
            descr={obj.descr}
            isActive={obj.isActive}
          /> */}
        </div>
      </Tools>
    );
  }
}
export default List;
