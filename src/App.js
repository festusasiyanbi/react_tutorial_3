import './App.css';
import { useState, useEffect } from 'react';
import Form from './Form';
import List from './List';

const App = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [items, setItems ] = useState([]);
  const [reqType, setReqType] = useState("users");
  
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        console.log(data)
        setItems(data)
      } catch (err) {
          console.log(err)
      }
    }
    (async () => fetchItems())();
}, [reqType])

  return (
    <div className='App'>
      <Form 
        reqType={reqType}
        setReqType={setReqType}
      />
      <List 
        items={items}
      />
    </div>
  )
}

export default App;

