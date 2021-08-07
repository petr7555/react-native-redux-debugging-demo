import {createStore, combineReducers} from 'redux';
import countReducer from '../reducers/countReducer';
import Reactotron from '../ReactotronConfig'

const rootReducer = combineReducers({count: countReducer});
const configureStore = () => {
  return createStore(rootReducer, Reactotron.createEnhancer())
};
export default configureStore;
