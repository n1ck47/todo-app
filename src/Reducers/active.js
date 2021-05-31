export const active = (state=[],action) => {
    if(action.type === 'updateActive'){
        return action.tasks;
    }
    return state
}

