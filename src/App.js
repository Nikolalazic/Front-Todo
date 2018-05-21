import React, { Component } from 'react';
import TodoList from './TodoList';
import Todo from './Todo';

class App extends Component {

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<TodoList  />
				<Todo />
			</div>
		);
	}
}

export default App;