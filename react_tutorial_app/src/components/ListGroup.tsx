// import { Fragment } from "react";
// <></> below works the same as <Fragment><Fragment/>

import { MouseEvent } from "react";
 
function ListGroup () {

    const items = ['Marrakech', 'Casablanca', 'Rabat'];

    const getMessage = () => {
        // return items.length === 0 ? <p> No items to render </p> : null
        return items.length === 0 && <p> No items to render </p>
    }


    // Event handler 

    // used type annotaation syntax (event: MouseEvent) to specify
    // to the TS compiler that event is of type mouseEvent
    const handleClick = (event: MouseEvent) => {
        // now that compiler knows what type of object event is,
        // we can use the dot operator to get any property we want
        // off the event object
        console.log(event);
    }
    
    return ( 
        // fragment so we can render multiple elements without having to
        // wrap everything around an unnecesary div
        <>
            <h1>Matesha</h1>
            {/* to accomplish conditional rendering, cant write an if statement so 
            instead have a JS expression embedded with curly braces that will
            return the p tag above if the item list is empty */}
            {getMessage}
            <ul className="list-group">
                {/* mapping every item in the items array to a corresponding
                list item element, with a key that is also equal to the string in
                the items array, and an on click property that has a function which prints the item when clicked */}
                {items.map((item,index) => (
                <li className="list-group-item" 
                key={item} 
                // dont call the function, just pass it in bc 
                // its going to be called llater, at run time.
                onClick={handleClick}
                >
                    {item}
                </li>
            ))}
            </ul>
        </>
        );
}

export default ListGroup;