


const reducer=(state,action)=>{
switch(action.type){
    case 'ajouter':
        state.push(action.payload);
        return state
    default :
    return state;
}
}

export default reducer