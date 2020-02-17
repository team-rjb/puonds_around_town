import { createStore, combineReducers, applyMiddleware} from 'redux';
import promise from "redux-promise-middleware";
import authReducer from "./reducers/authReducer";
import postsReducer from "./reducers/postsReducer";


const rootReducer = combineReducers({
  authReducer,
  postsReducer
})

console.log(createStore(rootReducer).getState().postsReducer.favorites);

export default createStore(rootReducer, applyMiddleware(promise))