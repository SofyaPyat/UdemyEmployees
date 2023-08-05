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
            data: [{name: "Артём П.", salary: 800, increase: false, id: 1},
                {name: "Даша Т.", salary: 2000, increase: true,  id: 2},
                {name: "Маша Б.", salary: 5000, increase: false, id: 3}],
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
            const newData = [...data];
            newData.push({name: name, salary:salary, increase: false, id: this.state.maxId});
            console.log(newData);
            return {
                data: newData,
                maxId: this.state.maxId + 1
             }
        })
    }
    render () {
        
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                
                <EmployeesList data = {this.state.data}
                               onDelete={this.deleteItem}
                />
                <EmployeesAddForm onAdd={this.addItem}/>  
            </div>
        );
    }
}


export default App;