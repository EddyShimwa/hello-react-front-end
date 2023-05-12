import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from '../reducers/messagesSlice';

const store = configureStore({
  reducer: {
    messages: messagesReducer,
  },
});

export default store;
