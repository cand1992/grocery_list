import React, { Component } from 'react';
import List from './list/List';

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
    const { groceryItems } = this.state
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

  render(){
    const { groceryItems } = this.state
    return(
      <div>
        <h1>Greg's Shopping List</h1>
        <List items={ groceryItems } handleAdded={ this.handleAdded } />
      </div>
    )
  }
}

export default App;
