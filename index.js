const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const BUY_APPEL = 'BUY_APPEL';
const BUY_TABLET = 'BUY_TABLET';
const BUY_SAMSUNG = 'BUY_SAMSUNG'
const buyappel = () => {
    return {
        type: BUY_APPEL
    }
}
const buySamsung = () => {
    return {
        type: BUY_SAMSUNG
    }
}
const buytablet = () => {
    return {
        type: BUY_TABLET
    }
}
const initailappelState = {
    appel: 50,
    samsung: 5

}
const initailtabState = {
    tablet: 30
}

const appelReducer = (state = initailappelState, action) => {
    switch (action.type) {
        case BUY_APPEL:
            return {
                ...state, appel: state.appel - 1
            }
         case BUY_SAMSUNG:
             return {
                 ...state,
                 samsung: state.samsung - 1
             }
            default:
                return state
    }
}
const tabletReducer = (state = initailtabState, action) => {
    switch (action.type) {
        case BUY_TABLET:
            return {
                ...state, tablet: state.tablet - 1
            }
            default:
                return state
    }
}

const rootReducer = combineReducers({
    appel: appelReducer,
    tablet: tabletReducer,
})
const store = createStore(rootReducer)
console.log('initState', store.getState())
const unSubScribe = store.subscribe(() => console.log('update is state :', store.getState()));
store.dispatch(buyappel());
store.dispatch(buytablet());
store.dispatch(buySamsung());
unSubScribe();



/*
const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const BUY_APPEL = 'BUY_APPEL';
const BUY_TABLET = 'BUY_TABLET';
const BUY_SAMSUNG = 'BUY_SAMSUNG'
const buyappel = () => {
    return {
        type: BUY_APPEL
    }
}
const buySamsung = () => {
    return {
        type: BUY_SAMSUNG
    }
}
const buytablet = () => {
    return {
        type: BUY_TABLET
    }
}
const initailappelState = {
    appel: 50,

}
const initailtabState = {
    tablet: 30
}
const initailsamsungState = {
    samsung: 5
}
const appelReducer = (state = initailappelState, action) => {
    switch (action.type) {
        case BUY_APPEL:
            return {
                ...state, appel: state.appel - 1
            }
            default:
                return state
    }
}
const tabletReducer = (state = initailtabState, action) => {
    switch (action.type) {
        case BUY_TABLET:
            return {
                ...state, tablet: state.tablet - 1
            }
            default:
                return state
    }
}
const samsungReducer = (state = initailsamsungState, action) => {
    switch (action.type) {
        case BUY_SAMSUNG:
            return {
                ...state, samsung: state.samsung - 1
            }
            default:
                return state
    }
}
const rootReducer = combineReducers({
    appel: appelReducer,
    tablet: tabletReducer,
    samsung: samsungReducer

})
const store = createStore(rootReducer)
console.log('initState', store.getState())
const unSubScribe = store.subscribe(() => console.log('update is state :', store.getState()));
store.dispatch(buyappel());
store.dispatch(buytablet());
store.dispatch(buySamsung());
unSubScribe();

*/