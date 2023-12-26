import ListGroup from './components/ListGroup';

// we get errors if we use the word class, bc it's
// a reserved word in JS or TS. So replace class with className

// putting ur JSX in paranthesese allows u to spread it over multuple lines
function App () {
  let items = ['Marrakech', 'Casablanca', 'Rabat'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
}

export default App