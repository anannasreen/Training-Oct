import React from "react";
import Tools from "../components/Tools";
import SimpleList from "../list/SimpleList";

// import ListItem from "./ListItem";

// const arr = [
//   {
//     id: 1,
//     title: "Appointment for October",
//     descr: "The patient is rescheduled to October",
//     isActive: false,
//   },
//   {
//     id: 2,
//     title: "Appointment for November",
//     descr: "The patient is rescheduled to November",
//     isActive: true,
//   },
//   {
//     id: 3,
//     title: "Appointment for December",
//     descr: "The patient is rescheduled to December",
//     isActive: false,
//   },
// ];

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      activeState: "all",
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
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

  componentDidUpdate() {
    console.log("componentDidUpdate");
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

  handleDelete = (item) => {
    console.log("DELETE", item.id);
    const newList = this.state.data.filter((element) => element.id !== item.id);

    this.setState({
      data: newList,
    });
  };

  handleLabelClick = (arg) => {
    this.setState({
      activeState: arg,
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
      <Tools labelValue={activeState} onAction={this.onListChange.bind(this)}>
        <SimpleList
          onLabelClick={this.handleLabelClick}
          data={newList}
          onAction={this.handleDelete}
        />
        {/* <div className="app-list">
          {newList.map((obj) => {
            return (
              <ListItem
                key={obj.title}
                title={obj.title}
                descr={obj.descr}
                isActive={obj.isActive}
                onDelete={() => {
                  this.handleDelete(obj);
                }}
              />
            );
          })}
          <ListItem />
          <ListItem />
          <ListItem />
        </div> */}
      </Tools>
    );
  }
}

export default HomePage;
