var GroceryList = () => (
  <ul>
    <Eggs />
    <Chicken />
  </ul>
);

var Chicken = () => (
  <li>Chicken</li>
);

var Eggs = () => (
  <li>Eggs</li>
)

// Use these two new components inside your GroceryList component instead of the hardcoded <li>s
ReactDOM.render(<GroceryList />, document.getElementById("app"));