import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/CounterSlice';
import userReducer from '../features/users/UserSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});
