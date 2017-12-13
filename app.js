var App = () => (
  <div>
    <GroceryList item={['milk', 'eggs', 'cheese', 'butter']}/>
  </div>
)

var GroceryList = (list) => (
  <ul>
    {/* list.forEach(item =>{
      return <li> {item} </li>
    }) */}
    <li> {list.item[0]} </li>
    <li> {list.item[1]} </li>
    <li> {list.item[2]} </li>
    <li> {list.item[3]} </li>
  </ul>
);

var listItem = (item) => (
  <li>{item}</li>
);

var Chicken = () => (
  <li>Chicken</li>
);

var Eggs = () => (
  <li>Eggs</li>
)

// Use these two new components inside your GroceryList component instead of the hardcoded <li>s
ReactDOM.render(<GroceryList item={['milk', 'eggs', 'cheese', 'butter']}/>, document.getElementById("app"));