import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


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
    console.log('here')
    e.preventDefault() // stop reloading, that loses user data
    // create crud action
    this.props.addItem(this.state)
    // rest form 
    this.setState({ name: '', price: '' })
  }

  render() {
    return(
      <div>
       <form onSubmit={this.handleSubmit}>
        <TextField value={this.state.name} name='name' onChange={this.handleChange} required placeholder='Add an item' style={{marginRight:8}}/>
       <TextField value={this.state.price} name="price" onChange={this.handleChange} required placeholder="Price" type="number" />
       <Button type="submit" variant="contained" color="primary"  style={{marginLeft:8}}>Add Item</Button>
       </form>
    </div>
    )
  }
}  
        

        
        
    
     

export default ItemForm;