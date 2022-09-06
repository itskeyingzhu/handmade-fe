import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import blogReducer from '../slices/blog-slice'
import { blogApiService } from '../services/blogApi'
// import { userApiService } from '../services/userApi'
/**
 * 引入 slice ， 引入名稱統一為 xxxReducer
 */
const reducers = combineReducers({
  /**
   * Reducer 放這裡
   */
  // blogReducer,
  [blogApiService.reducerPath]: blogApiService.reducer,
  // [userApiService.reducerPath]: userApiService.reducer,
})

const store = configureStore({
  reducer: reducers,
  middleware: (getCurrentMiddleware) => {
    return getCurrentMiddleware().concat(blogApiService.middleware)
    // .concat(userApiService.middleware)
  },
})

export default store
