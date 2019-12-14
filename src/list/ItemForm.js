import React, { Component } from 'react';


class ItemForm extends Component {
  state = { name: '', price: '' ,added: false }

  // change the state to what the user inputs in 
  handleChange = (e) => {
    // this.setState({ [e.target.name]: e.target.value  })
    const { name, value } = e.target
                      // todoValue: 'user input'
    this.setState({ [name]: value  })
  }

  handleSubmit = (e) => {
    e.preventDefault() // stop reloading, that loses user data
    // create crud action
    this.props.addItem(this.state)
    // rest form 
    this.setState({ name: '' })
  }

  render() {
    return(
      <div>
       <form onSubmit={this.handleSubmit}>
        <input value={this.state.name} name='name' onChange={this.handleChange} required placeholder='Add an item'/>
       <input value={this.state.price} name='price' onChange={this.handleChange} required placeholder='Price' />
       <button>Add Item</button>
       </form>
    </div>
    )
  }
}  
        

        
        
    
     

export default ItemForm;