// Define a functional component called Containers using the arrow function syntax
const Containers = (props) => {
  // Return a button element with class name 'skill-card' and text content from the 'label' prop
  return (
    <button className="skill-card">
      {props.label}
    </button>
  )
}

// Export the Containers component as the default export of the module
export default Containers;
