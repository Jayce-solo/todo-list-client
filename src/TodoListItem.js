import React from "react";

export default class TodoListItem extends React.Component {
    deteleItem = () => {
        this.props.deteleTodoItem(this.props.item)
    }

    render() {
        return (
            <li>
                <label>{this.props.item.value}</label>
                <button onClick={this.deteleItem}>删除</button>
            </li>
        )
    }
}