import {Reducer} from 'redux';
import keys from '../Base/ActionTypeKeys';
import ActionTypes from '../Base/ActionTypes';
import {initialState} from '../Base/StoreDefinitions';

export const BubbleReducer: Reducer<boolean> = (state: boolean = initialState.bubblesAreShown, action: ActionTypes) => {
    switch (action.type) {
        case keys.SHOW_BUBBLES:
            return true;
        case keys.HIDE_BUBBLES:
            return false;
        default:
            return state;
    }
};

export const PageReducer: Reducer<string> = (state: string = initialState.currentPage, action: ActionTypes) => {
    switch (action.type) {
        case keys.CHANGE_PAGE:
            return action.currentPage;
        default:
            return state;
    }
};