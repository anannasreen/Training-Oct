import React from "react";
import Tools from "../components/Tools";
import SimpleList from "../list/SimpleList";
import JustInfo from "./JustInfo";

import {
    MyContext, 
    MyNewContext
}from './mycontexts';

// const MyContext = React.createContext();
// const MyNewContext = React.createContext();

class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            activeState: 'all',
            message: "",
            showLabel: true
        };
    }

    componentDidMount() {
        // console.log('componentDidMount');
        fetch('/data2.json')
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                this.setState({
                    data: data
                })
            });
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.message !== this.state.message) {
            // console.log('componentDidUpdate');
            this.setState({
                message: 'Message'
            });
        }
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    onListChange = (e) => {
        const value = e.target.value;

        this.setState({
            activeState: value
        });
    }

    handleDelete = (item) => {
        console.log('Delete', item);
        const newList = this.state.data.filter((element) => element.id !== item.id);

        this.setState({
            data: newList
        });
    }

    handleLabelClick = (arg) => {
        this.setState({
            activeState: arg
        })
    }

    handleAdd = (item) => {
        this.setState({
            data: [item, ...this.state.data]
        });
    }

    handleShowLabel = (e) => {
        this.setState({
            showLabel: e.target.checked
        })
    }

    render() {
        console.log('RENDER HOME');

        const {
            data,
            activeState,
            showLabel
        } = this.state;

        const newList = data.filter((item) => {
            if (activeState === 'all') {
                return true;
            }
            if (activeState === 'active') {
                return item.isActive === true;
            }
            if (activeState === 'non-active') {
                return item.isActive === false;
            }
            return false;
        });

        const value = {
            'key':'value1'
        }

        // const value = useMemo(()=>{
        //     return {
        //         'key': 'value1',
        //         activeState:activeState
        //     };
        // }, [activeState]);

        return (
            <div>
                <div>
                    <input defaultChecked={this.state.showLabel} type="checkbox" onChange={this.handleShowLabel}></input>Show Label
                </div>
                <MyNewContext.Provider value={100}>
                    <MyContext.Provider value={this.state.showLabel}>
                        <Tools onAdd={this.handleAdd} labelValue={activeState} onAction={this.onListChange} count={data.length}>
                            <SimpleList onLabelClick={this.handleLabelClick} data={newList} onAction={this.handleDelete} />
                        </Tools>
                        <JustInfo testValue={value} showLabel={showLabel}/>
                    </MyContext.Provider>
                </MyNewContext.Provider>
            </div>
        );
    }
}
export default HomePage;


// export {
//     MyContext,
//     MyNewContext
// }

// console.log('HERE')
// console.log(e.target.value);
// const newList = arr.filter((item)=>{
//     if(value === 'all'){
//         return true;
//     }
//     if(value=== 'active'){
//         return item.isActive === true;
//     }
//     if(value === 'non-active'){
//         return item.isActive === false;
//     }
//     return false;
// });

// console.log(newList);

// // arr = newList;
// this.setState(()=>{
//     // data:newList
//     return{
//         data:newList
//     }
// })
//     data:newList
// }, () =>{
//     console.log("AFTER SETSTATE")

// myAction() {
//     console.log('ON LIST CLICKED');
// }

// console.log("RENDER");
/* <ListItem title={obj.title} descr={obj.descr} isActive={obj.isActive} /> */
/* <ListItem />
    <ListItem />
    <ListItem /> */

/* <div className="app-list">

{
    newList.map((obj) => {
        return <ListItem
            key={obj.title}
            title={obj.title}
            descr={obj.descr}
            isActive={obj.isActive}
            onDelete={() => {
            this.handleDelete(obj)
        }}
        />
    })
}
</div> */