export const completed = (state=[], action) =>{
    if(action.type === 'updateCompleted'){
        return action.tasks;
    } 
    return state;
}