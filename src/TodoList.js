import React from "react";
import TodoListItem from "./TodoListItem";

export default class TodoList extends React.Component {
    deleteItem = (item) => {
        this.props.deleteItem(item)
    }

    render() {
        return (
            <ul>
                {
                    this.props.todoItems.map(item => {
                        if (item.delete) return;
                        return (
                            <TodoListItem
                                key={item.id}
                                item={item}
                                deteleTodoItem={this.deleteItem} />
                        )
                    })
                }
            </ul>
        )
    }
}