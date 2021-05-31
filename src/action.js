export const updateActive = (tasks) => {
    return {
        type: 'updateActive',
        tasks
    }
}

export const updateCompleted = (tasks) => {
    return {
        type: 'updateCompleted',
        tasks
    }
}

export const updateCounter =  {
    type: 'updateCounter'
}

export const resetCounter = {
    type:'reset'
}

export const updateTags = (tags) => {
    return {
        type:'updateTags',
        tags
    }
}
