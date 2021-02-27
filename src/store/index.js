import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import {composeWithDevTools} from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

export default function configureStore(initialState) {

    const middlewares = [ReduxThunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    const store = createStore(rootReducer, initialState, composedEnhancers);

    return store
}
