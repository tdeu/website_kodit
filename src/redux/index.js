import { combineReducers } from 'redux';
import modalSlice from './slices/modalSlice';
import registerSlice from './slices/registerSlice';


const rootReducer = combineReducers({
	modal: modalSlice,
	register : registerSlice,
});

export default rootReducer;