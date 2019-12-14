import React, { Component } from 'react';
import List from './list/List';
import ItemForm from './list/ItemForm';

class App extends Component {
  state = { groceryItems: [
      { id: 1, name: 'bananas', price: 2.49, added: false },
      { id: 2, name: 'apples', price: 0.99, added: false },
      { id: 3, name: 'pears', price: 3.99, added: false },
      { id: 4, name: 'oranges', price: 1.99, added: false },
      { id: 5, name: 'mangos', price: 4.00, added: false }
    ]
  }

  handleAdded = (id) =>{
    const { groceryItems} = this.state
    
    this.setState({
      groceryItems: groceryItems.map( item => {
        if (item.id === id) {
          return {
            ...item,
            added: !item.added
          }
        }
        return item
      })
    })
  }
  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  addItem = (incomingItem) => {
    const {groceryItems} = this.state

    const newItem  = { id: this.getUniqId(), ...incomingItem }
    this.setState({ groceryItems: [newItem, ...groceryItems] })

  }

  render(){
    const { groceryItems } = this.state
    return(
      <div>
        <h1>Greg's Shopping List</h1>
        <ItemForm   addItem = {this.addItem}   />
        <List items={ groceryItems } handleAdded={ this.handleAdded } />
        
      </div>
    )
  }
}

export default App;
