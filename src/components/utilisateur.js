import React,{useState} from 'react'
import {connect} from 'react-redux'
function Utilisateur({
    ajouter
}) {

    const [name,changeName]=useState('');

    const _change=(event)=>{
        changeName(event.target.value)
    }
    const _ajouter=()=>{
        ajouter(name)
    }
    return (
        <div>
            <input type='text' onChange={_change} placeholder='enter name'/>
            <button onClick={_ajouter}  >ajouter</button>
        </div>
    )
}
const mapDispatchToprops=(dispatch)=>{

    return{
        ajouter:(name)=>dispatch({type:'ajouter',payload:name})
    }
}



export default connect(null,mapDispatchToprops)(Utilisateur)