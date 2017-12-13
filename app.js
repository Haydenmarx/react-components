var App = () => (
  <div>
    <GroceryList item={['milk', 'eggs', 'cheese', 'butter']}/>
  </div>
)

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>{this.props.item}</li>
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