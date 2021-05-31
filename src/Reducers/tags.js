export const tags = (state=[], action) => {
    if(action.type === 'updateTags'){
        return action.tags;
    }
    return state;
}