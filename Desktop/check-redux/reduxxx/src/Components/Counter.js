import React from 'react'
import {connect} from 'react-redux'

const Counter = (props) => {
    const incrementer =()=>{
        props.dispatch({type:"INCREMENT"})
        console.log(props)

    }
    const desincrementer =()=>{
        props.dispatch({type:"DECREMENT"})
    }
    return (
        <div>
            <div className="pb-3 pt-3 bg-info font"><h1>REACT-REDUX</h1></div>
            <div className="bg-light  ">
            <button style={{height:"50px", width:"50px"}} className="btn btn-success mt-5" onClick={()=>incrementer()}>+</button>
    <div className="pt-2 pb-2"><h2>{props.count}</h2></div>
            <button style={{height:"50px", width:"50px"}} className="btn btn-danger mb-5" onClick={()=>desincrementer()}>-</button>
            </div>
        </div>
    )
}
const mapStateToProps=(state)=>{
  return{  count:state.count}
}

export default connect (mapStateToProps)(Counter)
