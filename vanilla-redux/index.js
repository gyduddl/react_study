import { legacy_createStore as createStore } from 'redux'

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease=document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

//액션타입
const TOGGLE_CLICK = 'TOGGLE_CLICK';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

//액션 생성함수
const toggleswitch = ()=>({type:TOGGLE_CLICK})
const increase = ()=>({type:INCREASE})
const decrease= num=>({type:DECREASE,num})

//초기값 설정
const initail = {
    toggle : false,
    counter:0
}


//리듀서 함수
const reducer =(state=initail,action)=>{
    switch(action.type){
        case TOGGLE_CLICK:
            return{
                ...state,
                toggle:!state.toggle
            }
        case INCREASE:
            return{
                ...state,
                counter:state.counter+1
            }
        case DECREASE:
            return{
                ...state,
                counter: state.counter-action.num
            }
        default:
            return state
    }
}

//스토어 만들기

const store = createStore(reducer)

//render 함수 만들기(상태가 변하는 함수- 브라우저 상에서 변화하는 상태값)
const render =()=>{
    const state= store.getState();
    if(state.toggle){//현재 불러온 상태가 참이라면
        divToggle.classList.add('active')
    }else{
        divToggle.classList.remove('active')
    }

    counter.innerText = state.counter

}

render()

//구독하기
store.subscribe(render)


//dispatch
divToggle.onclick=()=>{
    store.dispatch(toggleswitch())
}

btnIncrease.onclick=()=>{
    store.dispatch(increase())
}

btnDecrease.onclick=()=>{
    store.dispatch(decrease(1))
}