import {createStore, combineReducers} from 'redux';
import countReducer from '../reducers/countReducer';
import Reactotron from '../ReactotronConfig';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({count: countReducer});
const configureStore = () => {
  return createStore(
    rootReducer,
    composeWithDevTools(Reactotron.createEnhancer()),
  );
};
export default configureStore;
