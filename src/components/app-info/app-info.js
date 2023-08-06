import './app-info.css';

const AppInfo = ({count, increaseCount}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников компании N</h1>
            <h2>Общее число сотрудников: {count}</h2>
            <h2>Премию получат: {increaseCount}</h2>
        </div>
    );
}

export default AppInfo;