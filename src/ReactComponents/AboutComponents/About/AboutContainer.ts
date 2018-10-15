import {IApplicationState} from '../../../Redux/Base/StoreDefinitions';
import AboutMain, {IAboutMainStateProps, IAboutMainDispatchProps} from './AboutMain';
import ActionTypes from '../../../Redux/Base/ActionTypes';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import { changePage, hideBubbles, showBubbles } from '../../../Redux/About/AboutActions';

const mapStateToProps = (state: IApplicationState): IAboutMainStateProps => ({
    isShowingBubbles: state.bubblesAreShown,
    currentPage: state.currentPage
});

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>): IAboutMainDispatchProps => ({
    showBubbles: () => dispatch(showBubbles()),
    hideBubbles: () => dispatch(hideBubbles()),
    changePage: (page: string) => dispatch (changePage(page))
});

const mergeProps = (stateProps: IAboutMainStateProps, dispatchProps: IAboutMainDispatchProps, ownProps: {}) => ({
    ...stateProps,
    ...dispatchProps,
    ...ownProps
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AboutMain);