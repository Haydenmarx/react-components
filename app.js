var App = () => (
  <div>
    <GroceryList item={['milk', 'eggs', 'cheese', 'butter']}/>
  </div>
)

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontWeight: '100' 
    };
  }

  onListItemHover() {
    this.setState({
      fontWeight: !this.state.fontWeight
    });
  }

  render() {
    var style = {
      fontWeight: this.state.fontWeight ? '100' : '600'
    };

    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.item}</li>     
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item = {item}/>
    )}
  </ul>
);

ReactDOM.render(<GroceryList items={['milk', 'eggs', 'cheese', 'butter']}/>, document.getElementById("app"));