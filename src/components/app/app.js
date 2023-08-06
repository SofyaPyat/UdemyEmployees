import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            data: [{name: "Артём П.", salary: 800, increase: false, rise: true, id: 1},
                {name: "Даша Т.", salary: 2000, increase: true, rise: false,  id: 2},
                {name: "Маша Б.", salary: 5000, increase: false, rise: false, id: 3}],
            maxId: 4
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(elem => elem.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        this.setState (({data}) => {
            const newItem = {
                name: name,
                salary: salary,
                increase: false,
                rise: false,
                id: this.state.maxId
            }
            const newData = [...data, newItem];
            return {
                data: newData,
                maxId: this.state.maxId + 1
             }
        })
    }

    onToggleIncrease = (id) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);
        //     const old = data[index];
        //     const newItem = {...old, increase: !old.increase};
        //     const newData = [...data.slice(0,index), newItem, ...data.slice(index + 1)];
            
        //     return {
        //         data: newData
        //     }


        // }) 
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        })) 

    }

    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, rise: !item.rise}
                }
                return item;
            })
        })) 
    }

    render () {
        
        return (
            <div className="app">
                <AppInfo count = {this.state.data.length}
                         increaseCount = {this.state.data.filter(item => item.increase === true).length}
                />
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                
                <EmployeesList data = {this.state.data}
                               onDelete={this.deleteItem}
                               onToggleIncrease = {this.onToggleIncrease}
                               onToggleRise = {this.onToggleRise}
                />
                <EmployeesAddForm onAdd={this.addItem}/>  
            </div>
        );
    }
}


export default App;