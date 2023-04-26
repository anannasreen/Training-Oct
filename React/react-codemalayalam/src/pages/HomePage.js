import React, { useEffect, useState } from "react";
import Tools from "../components/Tools";
import SimpleList from "../list/SimpleList";
// import JustInfo from "./JustInfo";

// import { MyContext, MyNewContext } from "./mycontexts";

// class HomePage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: [],
//       activeState: "all",
//       message: "",
//       showLabel: true,
//     };
//   }

//   componentDidMount() {
//     fetch("/data2.json")
//       .then((data) => {
//         return data.json();
//       })
//       .then((data) => {
//         this.setState({
//           data: data,
//         });
//       });
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.message !== this.state.message) {
//       this.setState({
//         message: "Message",
//       });
//     }
//   }

//   componentWillUnmount() {
//     // console.log("componentWillUnmount");
//   }

//   onListChange = (e) => {
//     const value = e.target.value;

//     this.setState({
//       activeState: value,
//     });
//   };

//   handleDelete = (item) => {
//     // console.log("Delete", item);
//     const newList = this.state.data.filter((element) => element.id !== item.id);

//     this.setState({
//       data: newList,
//     });
//   };

//   handleLabelClick = (arg) => {
//     this.setState({
//       activeState: arg,
//     });
//   };

//   handleAdd = (item) => {
//     this.setState({
//       data: [item, ...this.state.data],
//     });
//   };

//   handleShowLabel = (e) => {
//     this.setState({
//       showLabel: e.target.checked,
//     });
//   };

//   render() {
//     // console.log("RENDER HOME");

//     const { data, activeState, showLabel } = this.state;

//     const newList = data.filter((item) => {
//       if (activeState === "all") {
//         return true;
//       }
//       if (activeState === "active") {
//         return item.isActive === true;
//       }
//       if (activeState === "non-active") {
//         return item.isActive === false;
//       }
//       return false;
//     });

//     const value = {
//       key: "value1",
//     };

//     return (
//       <div>
//         <div>
//           <input
//             defaultChecked={this.state.showLabel}
//             type="checkbox"
//             onChange={this.handleShowLabel}
//           ></input>
//           Show Label
//         </div>
//         <MyNewContext.Provider value={100}>
//           <MyContext.Provider value={this.state.showLabel}>
//             <Tools
//               onAdd={this.handleAdd}
//               labelValue={activeState}
//               onAction={this.onListChange}
//               count={data.length}
//             >
//               <SimpleList
//                 onLabelClick={this.handleLabelClick}
//                 data={newList}
//                 onAction={this.handleDelete}
//               />
//             </Tools>
//             <JustInfo testValue={value} showLabel={showLabel} />
//           </MyContext.Provider>
//         </MyNewContext.Provider>
//       </div>
//     );
//   }
// }
// export default HomePage;

import { MyContext, MyNewContext } from "./mycontexts";

function HomePage() {
  // const [showLabel, setShowLabel] = useState(true);
  const [activeState, setActiveState] = useState("all");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleRefresh = () => {
    // console.log('Refresh')

    fetch("/data2.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  //----------------

  const onListChange = (evt) => {
    const value = evt.target.value;
    setActiveState(value);
  };

  const handleDelete = (item) => {
    // console.log("Delete", item);

    const newList = data.filter((element) => element.id !== item.id);
    setData(newList);
  };

  const handleLabelClick = (arg) => {
    setActiveState(arg);
  };

  const handleAdd = (item) => {
    setData([item, ...data]);
  };

  // const handleShowLabel = (evt) => {
  //   setShowLabel(evt.target.checked);
  // };

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
    return false;
  });

  return (
    <div>
      {/* <div>
        <input
          checked={showLabel}
          onChange={handleShowLabel}
          type="checkbox"
        ></input>
        Show Label
      </div> */}

      <MyNewContext.Provider value={100}>
        {/* <MyContext.Provider value={showLabel}> */}
          <Tools
            onAdd={handleAdd}
            labelValue={activeState}
            onAction={onListChange}
            count={data.length}
            onRefresh={handleRefresh}
          >
            <SimpleList
              onLabelClick={handleLabelClick}
              data={newList}
              onAction={handleDelete}
            />
          </Tools>
        {/* </MyContext.Provider> */}
      </MyNewContext.Provider>
    </div>
  );
}

export default HomePage