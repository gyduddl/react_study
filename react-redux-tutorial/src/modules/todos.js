import {createAction,handleActions} from 'redux-actions'

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

//액션 함수
// export const changeInput = input =>({
//     type:CHANGE_INPUT,
//     input
// })
// let id = 3;
// export const insert = text =>({
//     type:INSERT,
//     todo:{
//         id:id++,
//         text,
//         done:false
//     }
// })

// export const toggle = id =>({
//     type:TOGGLE,
//     id
// })
// export const remove = id =>({
//     type:REMOVE,
//     id
// })


export const changeInput = createAction(CHANGE_INPUT, input=>input);

let id =3;
export const insert = createAction(INSERT, text =>({
    id:id++,
    text,
    done:false
})) 
export const toggle = createAction(TOGGLE,id=>id);
export const remove = createAction(REMOVE,id=>id)


//초기값
const initialState={
    input:'',
    todos:[
        {
            id:1,
            text:"리덕스 기초 배우기",
            done : true
        },
        {
            id:2,
            text:"리액트와 리덕스 사용하기",
            done:false
        }
    ]
}

//리듀서 함수 만들기

// function todos(state=initialState, action){
//     switch(action.type){
//         case CHANGE_INPUT:
//             return{
//                 ...state,
//                 input:action.input
//             }
//         case INSERT:
//             return{
//                 ...state,
//                 todos:state.todos.concat(action.todo)
//             }
//         case TOGGLE:
//             return{
//                 ...state,
//                 todos : state.todos.map(todo=>
//                     todo.id===action.id?{...todo, done :!todo.done}:todo
//                     )
//             }
//         case REMOVE:
//             return{
//                 ...state,
//                 todos: state.todos.filter(todo=>todo.id !== action.id)
//             }
//         default:
//             return state;
//     }
// }

// export default todos;

// const todos = handleActions(
//     {
//         [CHANGE_INPUT] : (state,action)=>({...state,input:action.payload}),
//         [INSERT] : (state,action)=>({...state,todos:state.todos.concat(action.payload)}),
//         [TOGGLE] : (state,action)=>({...state,todos:state.todos.map(todo=>todo.id===action.payload?{...todo,done:!todo.done}:todo)}),
//         [REMOVE]: (state,action) =>({...state,todos:state.todos.filter(todo=>todo.id!==action.payload)})
//     },
//     initialState
// )

// export default todos;

//객체 비구조화 할당 문법으로 action 값의 payload 이름을 새로 설정해 주면 action.payload가 정확히 어떤 값을 의미하지는 쉽게 파악 가능

const todos = handleActions({
    [CHANGE_INPUT]: (state, {payload:input})=>({...state,input}),
    [INSERT]: (state,{payload:todo})=>({...state,todos:state.todos.concat(todo)}),
    [TOGGLE] : (state,{payload:id})=>({...state, todos:state.todos.map(todo=>todo.id===id?{...todo,done:!todo.done}:todo)}),
    [REMOVE] : (state,{payload:id})=>({...state, todos:state.todos.filter(todo=>todo.id!==id)})
}, initialState)

export default todos;