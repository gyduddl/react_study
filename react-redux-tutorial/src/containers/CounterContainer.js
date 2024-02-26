import React, { useCallback } from 'react';
import Counter from '../componenets/Counter';
import { decrease, increase } from '../modules/counter';
import { connect, useDispatch, useSelector } from 'react-redux';
//디스패치

// const CounterContainer = ()=>{
    
//     const number = useSelector(state=>state.counter.number);
//     const dispatch =useDispatch()
//     const onIncrease = useCallback(()=>dispatch(increase()),[dispatch])
//     const onDecrease = useCallback(()=>dispatch(decrease()),[dispatch])

//     return(
//         <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease}/>
//     )
// }

// export default CounterContainer;

const CounterContainer = ({number,increase, decrease})=>{
    return(
        <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
    )
}
const mapStateToProps= ({counter})=>({
    number : counter.number
})
const mapDispatchToProps= dispatch=>({
    increase : ()=>{
        dispatch(increase())
    },
    decrease: ()=>{
        dispatch(decrease())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)



