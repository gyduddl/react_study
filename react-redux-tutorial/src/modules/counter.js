import {createAction,handleActions} from 'redux-actions'

//액션타입 -> 상태 변화가 일어나는 것 
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션함수
// export const increase = ()=>({type:INCREASE})
// export const decrease =()=>({type:DECREASE})

// ** redux-actions를 사용하면 액션 생성 함수를 더 짧은 코드로 작성할 수 있습니다. 

export const increase = createAction(INCREASE)
export const decrease = createAction(DECREASE)

//초기함수
const initialState={
    number:0
}

//리듀서 함수 생성
// const counter=(state=initialState,action)=>{
//     switch(action.type){
//         case INCREASE:
//             return{
//                 number:state.number+1
//             }
//         case DECREASE:
//             return{
//                 number:state.number-1
//             }
//         default:
//             return state;
//     }
// }

// export default counter;

// 리듀서를 작성할 때도 switch/case 문이 아닌 handleActions라는 함수를 사용하여 
//각 액션마다 업데이트 함수를 설정하는 형식으로 작성 가능하다
//handleActios함수의 첫번쨰 파라미터에는 각 액션에 대해나 업데이트 함수를 넣어주고, 두번쨰 파라미터에는 초기 상태를 넣어준다.

const counter = handleActions({
    [INCREASE] : (state,action) => ({number : state.number+1}),
    [DECREASE] : (state,action) => ({number : state.number -1})
}, initialState)

export default counter;