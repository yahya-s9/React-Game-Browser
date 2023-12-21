// creating our first react component
// these are function based components

// state = data of a component, 
// react-dom updates virutal dom to reflect component hierarchy and data

// PascalCasing
function Message() {
    // JSX: Javascript XML
    const name = 'Yahya';
    if (name) {
        return <h1>Hello {name}</h1>;
    } else {
        return <h1> Hello World </h1>;
    }
    

}

// export the component as a default object from this module
export default Message;