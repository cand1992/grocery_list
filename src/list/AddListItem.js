import React, { Component } from 'react';

class AddListItem extends Component{
	state = { name: '', price: '', added: false }

	handleChange = (e) => {
		const { name, value } = e.target
		this.setState({ [name]: value })
		// really struggling with figuring out how to handle the change and submit of two input fields at the same time.
		// spent over 2 hours on it at this point
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.addItem(this.state)
		this.setState({ name: '', price: '' })
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<input 
					value={this.state.name} 
					name='name' 
					onChange={this.handleChange}

					required
					placeholder='Name Of Item'
				/>
				<input 
					value={this.state.price} 
					name='price' 
					onChange={this.handleChange}

					required
					placeholder='Price Of Item'
				/>
				<button>Add Item</button>
			</form>
		)
	}
}

export default AddListItem;