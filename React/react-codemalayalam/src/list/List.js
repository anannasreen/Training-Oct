import React from "react";
import Tools from "../components/Tools";
import ListItem from "./ListItem";

const arr = [
  {
    title: "Appointment for October",
    descr: "The patient is rescheduled to October",
    isActive: false,
  },
  {
    title: "Appointment for November",
    descr: "The patient is rescheduled to November",
    isActive: true,
  },
  {
    title: "Appointment for December",
    descr: "The patient is rescheduled to December",
    isActive: false,
  },
];

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: arr,
      activeState: "all",
    };
  }

  //   myAction(){
  //     console.log('ON LIST CLICKED')
  //   }

  onListChange = (evt) => {
    console.log(evt.target.value);
    const value = evt.target.value;

    // const newList = arr.filter((item) => {
    //   if (value === "all") {
    //     return true;
    //   }
    //   if (value === "active") {
    //     return item.isActive === true;
    //   }
    //   if (value === "non-active") {
    //     return item.isActive === false;
    //   }
    //   return false;
    // });

    // console.log(newList);
    // // arr = newList;

    // this.setState(
    //   {
    //     data: newList,
    //   },
    //   () => {
    //     console.log("AFTER SETSTATE");
    //   }
    // );

    // this.setState(() => {
    //   return {
    //     data: newList,
    //   };
    // });

    this.setState({
      activeState: value,
    });
  };

  render() {
    // console.log("RENDER");

    const { data, activeState } = this.state;

    const newList = data.filter((item) => {
      if (activeState === "all") {
        return true;
      }
      if (activeState === "active") {
        return item.isActive === true;
      }
      if (activeState === "non-active") {
        return item.isActive === false;
      }
    });

    return (
      <Tools onAction={this.onListChange.bind(this)}>
        <div className="app-list">
          {newList.map((obj) => {
            return (
              <ListItem
                key={obj.title}
                title={obj.title}
                descr={obj.descr}
                isActive={obj.isActive}
              />
            );
          })}
          {/* <ListItem />
              <ListItem />
              <ListItem /> */}
        </div>
      </Tools>
    );
  }
}

export default List;
