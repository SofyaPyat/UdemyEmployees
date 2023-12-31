import './app-filter.css';

const AppFilter = (props) => 
{
    const buttonData = [
        {name: "all", label: "Все сотрудники"},
        {name: "rise", label: "На повышение"},
        {name: "salary", label: "З/П больше 1000$"}
    ];

    const buttons = buttonData.map(({name, label}) =>{
        const active = name === props.filter;
        const className = active? "btn btn-light": "btn btn-outline-light";
        return (
            <button className = {className} type = "button" key = {name} onClick={() => props.onFilterChange(name)}>{label}</button>
        )} 
    )
 
    return (
        <div className="btn-group">
            {buttons}
        </div>
        );
   
}

export default AppFilter;