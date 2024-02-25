//스토어는 어플리케이션마다 하나만 있어야 하니깐
// 리듀서 함수를 하나로 합쳐준다.

import { combineReducers } from 'redux';
import todos from './todos';
import counter from './counter';

const rootReducer=combineReducers({
    todos,
    counter
})

export default rootReducer;