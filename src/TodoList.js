import React, { Component } from 'react';
import axios from 'axios';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allTask: []

		}
	};
	async componentDidMount() {
		const res = await axios.get(`http://localhost:8080/alltask`);
		const allTask = res.data;
		this.setState({ allTask });
	};

	deleteTodo = async (event) => {
		const id = event.target.value;
		const res = await axios.delete(`http://localhost:8080/delete/${id}`);
		this.setState({allTask: res.data});
	};

	render() {
		return (
			<ul>
				{ this.state.allTask.map(todo =>
					<li  key={todo.id}>
						<span className="todoText"> {todo.task} </span>
						<button value={todo.id} onClick={this.deleteTodo}>x</button>
					</li>)}
			</ul>
		)
	}
}
export default TodoList;