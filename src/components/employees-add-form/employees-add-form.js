import { Component } from 'react';
import './employees-add-form.css';


class EmployeesAddForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }

    }

    onValueChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    onSubmit = (e) => {
        e.preventDefault();
        let newName = this.state.name;
        let newSalary = this.state.salary;
        if (!(newName === "" || newSalary === "")) {
            if (newName.length > 3 && newSalary > 0) {
                this.props.onAdd(newName, newSalary);
                newName = '';
                newSalary = '';
            }
        }
        this.setState (
            {
                name: newName,
                salary: newSalary
            }
        )
    }

    render () {
        const {name, salary} = this.state; 

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex"
                      onSubmit={this.onSubmit}>
                    <input type="text"
                           className="form-control new-post-label"
                           name="name"
                           value={name}
                           placeholder="Как его зовут?" 
                           onChange={this.onValueChange}
                           />
    
                    <input type="number"
                           className="form-control new-post-label"
                           name="salary"
                           value={salary}
                           placeholder="З/П в $?" 
                           onChange={this.onValueChange}
                           />
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;