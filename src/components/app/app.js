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
            maxId: 4,
            term: "",
            filter: 'all'
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(elem => elem.id !== id)
            }
        })
    }

    onChangeSalary = (id, salary) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, salary: salary}
                }
                return item;
            })
        })) 
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

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        })) 

    }

    searchEmployee = (items, term) => {
        if (term.length === 0) 
            return items;
        
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    filterEmployee = (items, filter) => {
        switch (filter) {
        case 'rise': return items.filter(item => {
            return item.rise === true
            });
        case 'salary': return items.filter(item => {
            return item.salary > 1000
            });
        default: return items;
        }
    }

    onUpdateSearch = (term) => {
        this.setState(() => {
            return {
                term: term
            }
        })
    }

    onFilterChange = (filter) => {
        this.setState({filter});
    }

    render () {
        const {data, term, filter} = this.state;
        const visibleData = this.filterEmployee(this.searchEmployee(data, term), filter);
        return (
            <div className="app">
                <AppInfo count = {this.state.data.length}
                         increaseCount = {this.state.data.filter(item => item.increase === true).length}
                />
    
                <div className="search-panel">
                    <SearchPanel 
                    onUpdateSearch = {this.onUpdateSearch}
                    />
                    <AppFilter onFilterChange = {this.onFilterChange}
                               filter = {this.state.filter}
                    />
                </div>
                
                <EmployeesList data = {visibleData}
                               onDelete={this.deleteItem}
                               onToggleProp = {this.onToggleProp}
                               onChangeSalary = {this.onChangeSalary}
                />
                <EmployeesAddForm onAdd={this.addItem}/>  
            </div>
        );
    }
}


export default App;