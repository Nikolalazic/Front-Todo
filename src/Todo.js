import React, { Component} from 'react';
import axios from 'axios'

class Todo extends Component {

	handleChange = event => {
		this.setState({ task: event.target.value });
	};
	addTodo = async event => {
		event.preventDefault();

		const res = await axios.post(`http://localhost:8080/addtodo`,  this.state );
	};
	render() {
		return (
			<div>
				<form>
					<label>
						Task description:
						<input type="text" name="task" onChange={this.handleChange} />
					</label>
					<button type="submit" onClick={this.addTodo}>Adddd</button>
				</form>
			</div>
		)
	}
}
export default Todo;