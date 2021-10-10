import React from "react";

export default class TodoForm extends React.Component {
    addTodoItem = () => {
        this.props.addTodoItem(this.textInput.value)
    }

    render() {
        return (
            <div>
                <input type="text"
                    ref={(input) => { this.textInput = input }}
                    placeholder="输入一些东西"
                ></input>
                <button
                    type="submit"
                    onClick={this.addTodoItem}
                >添加</button>
            </div>
        )
    }
}