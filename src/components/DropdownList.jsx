import { Dropdown } from "react-bootstrap";

export const DropdownList = (props) => {
    return (
        <div style={{display: "flex"}}>
            <a style={{marginRight: "20px"}}>{props.title}</a>
            <Dropdown>
                <Dropdown.Toggle variant="success">{props.name}</Dropdown.Toggle>
                <Dropdown.Menu>
                {props.items.map((item) => (<Dropdown.Item>{item}</Dropdown.Item>))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};