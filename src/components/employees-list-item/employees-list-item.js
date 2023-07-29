import './employees-list-item.css';

const EmployeesListItem = () => {
    return (
        <li className="list-group-item d-flex justyfy-content-beween">
            <span className="list-group-item-label">Vasya Pupkin</span>
            <input type="text" className="list-group-item-input" defaultValue="1000$"/>
            <div className="d-flex justify-content-center align-items-center">
                <button type = "button"
                        className="btn-cookie btn-sm">
                    <i className="fas fa-cookie"></i> 
                </button>

                <button type = "button"
                        className="btn-trash btn-sm">
                    <i className="fas fa-trash"></i> 
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

export default EmployeesListItem;