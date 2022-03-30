import React from 'react'
import { useDispatch } from 'react-redux';
import '../App.css';
import { bindActionCreators } from 'redux';
import {actionCreators} from '../State/index'

export default function Shop() {
    const dispatch = useDispatch();
    const {withdrawMoney,depositeMoney} = bindActionCreators(actionCreators,dispatch);

    return (
        <div className='container'>
            <h2 className='mt-4'>Buy Nike Shose of 50Rs</h2>
            <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}} >-</button>
            Add this item to cart
            <button className="btn btn-primary mx-2" onClick={()=>{depositeMoney(100)}} >+</button>
        </div>
    )
}