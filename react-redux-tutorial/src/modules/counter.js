//액션타입 -> 상태 변화가 일어나는 것 
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션함수
export const increase = ()=>({type:INCREASE})
export const decrease =()=>({type:DECREASE})

//초기함수
const initialState={
    number:0
}

//리듀서 함수 생성
const counter=(state=initialState,action)=>{
    switch(action.type){
        case INCREASE:
            return{
                number:state.number+1
            }
        case DECREASE:
            return{
                number:state.number-1
            }
        default:
            return state;
    }
}

export default counter;