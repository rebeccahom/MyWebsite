import {IApplicationState} from './StoreDefinitions';
import {BubbleReducer, PageReducer} from '../About/AboutReducer';
import {combineReducers} from 'redux';

const reducers = {
    bubblesAreShown: BubbleReducer,
    currentPage: PageReducer
};

const rootReducer = combineReducers<IApplicationState>({...reducers});

export default rootReducer;