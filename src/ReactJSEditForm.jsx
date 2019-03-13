class FormCliente extends React.Component {
	constructor(props) {
		super(props);
		this.handleEditCliente = this.handleEditCliente.bind(this);
		this.handleChangeTextEdit = this.handleChangeTextEdit.bind(this);
		this.handleClienteAdd = this.handleClienteAdd.bind(this);
		this.handleTodoUpdate = this.handleTodoUpdate.bind(this);
		this.state = {
			text: "",
			isEdit: 0,
			todos: [
				{ id: 1, text: "Bryan OSpring" },
				{ id: 2, text: "Mathew Jose" },
				{ id: 3, text: "Ruan Carlos Sobotta" }
			]
		};
	}

	handleEditCliente(item) {
		this.setState({
			text: item.text,
			isEdit: item.id
		});
	}
	handleChangeTextEdit(text) {
		this.setState({ text: text });
	}
	handleClienteAdd(text) {
		var newText = {
			id: this.state.todos.length + 1,
			text: text
		};
		this.setState({
			todos: this.state.todos.concat(newText),
			text: ""
		});
	}
	handleTodoUpdate(todo) {
		var todos = this.state.todos;
		for (var i = 0; i < todos.length; i++) {
			if (todos[i].id == todo.id) {
				todos.splice(i, 1);
			}
		}
		todos.push(todo);
		this.setState({
			todos: todos,
			text: "",
			isEdit: 0
		});
	}
	render() {
		return (
			<div>
				<ListClientes
					clientes={this.state.todos}
					editCliente={this.handleEditCliente}
					/>
				<hr />
				<EditCliente
					onClienteAdd={this.handleClienteAdd}
					//text={ this.state.text }
					{...this.state}
					changeTextEdit={this.handleChangeTextEdit}
					onTodoUpdate={this.handleTodoUpdate}
					/>
			</div>
		);
	}
}

class ListClientes extends React.Component {
	editCliente(item) {
		this.props.editCliente(item);
	}
	render() {
		let clientes = this.props.clientes;
		return (
			<div>
				<h1>ListClientes</h1>
				<ul>
					{clientes.map(item => (
						<li key={item.id}>
							<span className="cursorEdit" onClick={this.editCliente.bind(this, item)}>
								{item.text} - {item.id}
							</span>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

class EditCliente extends React.Component {
	constructor(props) {
		super(props);
		this.onChangeEdit = this.onChangeEdit.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(e) {
		e.preventDefault();
		var text = this.refs.text.value.trim();
		var testeText = this.refs.text;

		if (!text) {
			alert("Por favor digite um nome");
			return;
		}

		if (this.props.isEdit) {
			var updateTodo = {
				id: this.props.isEdit,
				text: text
			};
			this.props.onTodoUpdate(updateTodo);
			console.log("is Updated...");
		} else {
			this.props.onClienteAdd(text);
			// console.log("is Created...");
		}
	}
	onChangeEdit(e) {
		this.props.changeTextEdit(e.target.value);
	}
	render() {
		return (
			<div>
				<h1>Editar Cliente</h1>
				<form onSubmit={this.onSubmit}>
					<label>
						Nome:
						<input
							type="text"
							placeholder="editar o nome"
							ref="text"
							value={this.props.text}
							onChange={this.onChangeEdit}
							required
							/>
						<input type="submit" value="submit" />
					</label>
				</form>
			</div>
		);
	}
}

ReactDOM.render(<FormCliente />, document.getElementById("render-target"));
