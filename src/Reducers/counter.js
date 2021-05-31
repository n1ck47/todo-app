export const counter = (state=0,action) => {
    if(action.type === 'updateCounter'){
        return state + 1;
    }
    if(action.type === 'reset'){
        return 0;
    }
    return state;
}