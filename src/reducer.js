


const reducer=(state,action)=>{
switch(action.type){
    case 'AJOUTER':
       
        return [...state,{name:action.payload}]
    default :
    return state;
}
}

export default reducer