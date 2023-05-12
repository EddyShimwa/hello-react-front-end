import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const setMessages = (state, action) => {
  state.messages = action.payload;
};

export const fetchMessages = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3001/api/v1/messages/index');
  dispatch(setMessages(response.data));
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    messages: [],
    loading: false,
    error: null,
  },
  reducers: {
    setMessages,
    setLoading: (state) => {
      state.loading = true;
    },

    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setLoading, setError } = messagesSlice.actions;

export const selectMessages = (state) => state.messages.messages;

export default messagesSlice.reducer;