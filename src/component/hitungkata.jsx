import React from 'react';
import { connect } from 'react-redux';
import {HitungKataAction} from '../redux/actions'


const HitungKata=props=>{
    // const [kata, setkata]=useState(0)
    const onKataChange=(e)=>{
        var kata=e.target.value.split(' ')
        var newkata=kata.filter((val)=>val !='')
        props.HitungKataAction(newkata.length)
    }
    //ini bisa di dalam action maupun reducer
    return(
        <div>
            <textarea className='form-control' cols='30' rows='10' onChange={onKataChange}/>
            <h1>{props.Bebas}</h1>
        </div>
    )
}

export default connect(
    (state)=>{
        return{
            Bebas:state.Kata
        }
    }
    ,{HitungKataAction})(HitungKata)

