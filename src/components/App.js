import React, {Component} from 'react';
import FruitBasket from './FruitBasket'
import 'isomorphic-fetch'

export default class App extends Component{
    constructor(){
        super()
        this.state = {
            fruit: [],
            filters: [],
            currentFilter: null
        }
    }

    componentWillMount() {
        this.fetchFilters();
        this.fetchFruit()
      }

      fetchFruit = ( ) => {
        fetch('/api/fruit')
        .then(response => response.json())
        .then(fruit => this.setState({ fruit }));
      }
    
      fetchFilters = () => {
        fetch('/api/fruit_types')
          .then(response => response.json())
          .then(filters => this.setState({ filters }));
      }

      handleFilterChange = event => {
        console.log('new filter: ', event.target.value);
        this.setState({ currentFilter: event.target.value });
      }
    
    render(){
        return(
            <FruitBasket 
            updateFilterCallback={this.handleFilterChange}
            filters={this.state.filters} 
            fruit={this.state.fruit} 
            currentFilter={this.state.currentFilter}/>
        )
    }
}
