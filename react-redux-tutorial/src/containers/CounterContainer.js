import React from 'react';
import Counter from '../componenets/Counter';
import { decrease, increase } from '../modules/counter';
import { connect } from 'react-redux';
//디스패치

const CounterContainer = ({number,increase, decrease})=>{
    return(
        <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
    )
}
// 스토어의 상태를 컴포넌트의 props로 전달
const mapStateToProps= state=>({
    //store의 리듀서 함수 이름이 counter이다. 
    number : state.counter.number
})
// 액션 생성 함수를 컴포넌트의 props로 전달하는 함수
const mapDispatchToProps= dispatch=>({
    increase : ()=>{
        dispatch(increase())
    },
    decrease: ()=>{
        dispatch(decrease())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)


