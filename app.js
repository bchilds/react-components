// TODO
//create GroceryList component
  //contains unordered list of 2 grocery items
  //render this to <div> with id of "app"


var App = () => (
  <div>
    <h1>Grocery List</h1>
    <GroceryList listItems = {['Cucumbers','Kale']} />
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.listItems.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);

// var Cucumbers = () => (
//   <li>Cucumbers</li>
// );

// var Kale = () => (
//   <li>Kale</li>
// );

// var GroceryListItem = (props) => (
//   <li>{props.items}</li>
// );

class GroceryListItem extends React.Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      isHovering: false
    };
  }

  onGroceryItemHover() {
    this.setState({isHovering: !this.state.isHovering});
  }

    

  render() {
    var style = {
      'fontWeight': this.state.isHovering ? 'bold' : 'normal'
    }
    
    return (
      <li style={style} onMouseEnter={this.onGroceryItemHover.bind(this)} onMouseLeave={this.onGroceryItemHover.bind(this)}>{this.props.item}</li>
    );
  }

}

ReactDOM.render(<App />, document.getElementById("app"));



