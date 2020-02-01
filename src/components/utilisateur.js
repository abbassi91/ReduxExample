import React,{useState} from 'react'
import {connect} from 'react-redux'
import {ajouterUtilisateur} from './../actions'
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
        ajouter:(name)=>dispatch(ajouterUtilisateur(name))
    }
}



export default connect(null,mapDispatchToprops)(Utilisateur)