import {IApplicationState} from './StoreDefinitions';
import {BubbleReducer} from '../About/AboutReducer';
import {combineReducers} from 'redux';

const reducers = {
    bubblesAreShown: BubbleReducer,
};

const rootReducer = combineReducers<IApplicationState>({...reducers});

export default rootReducer;