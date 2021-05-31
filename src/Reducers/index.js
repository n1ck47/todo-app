import {active} from './active';
import {completed} from './completed';
import {counter} from './counter';
import {combineReducers} from 'redux';
import {tags} from './tags';

import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const numberPersistConfig = {
    key: "persistedStorage",
    storage
}

const rootReducer = combineReducers({
    active,
    completed,
    counter,
    tags
})

export default persistReducer(numberPersistConfig,rootReducer);