// import {createStore} from 'redux'

// import cakeReducer from './cakeReducer'

// const store = createStore(cakeReducer)

// export default store

import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from './cakeReducer';

const store = configureStore({
  reducer: {
    cake: cakeReducer
  }
});

export default store;
