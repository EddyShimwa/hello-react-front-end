import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages, selectMessages } from './reducers/messagesSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const messages = useSelector(selectMessages);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>React app</h1>
      <h3>
        {messages.content}
      </h3>
    </div>
  );
}

export default App;
