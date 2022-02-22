import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete}) => {

    let elements = data.map(item => {
        return (
            <EmployeesListItem key={item.id} {...item} onDelete={() => onDelete(item.id)}/>
        );
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;