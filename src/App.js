import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick() {
    this.props.addItem()
  }

  render() {
    debugger
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

// const mapStateToProps = (state) => {
//   return {
//     items: state.items
//   };
// };

//not required - adding the second argument to connect covers this!
// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   };
// };
 

// export default connect(mapStateToProps, { addItem })(App);

//was above:
//We could go further and get rid of mapStateToProps() as well. We still 
//need to pass in a function as the first argument, but it can be an anonymous 
//arrow function that handles everything in one line:

export default connect(state => ({ items: state.items }), { addItem })(App);
