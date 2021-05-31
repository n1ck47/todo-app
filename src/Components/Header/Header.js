import React, {useState} from 'react';
import {updateActive, updateCompleted, updateCounter, resetCounter, updateTags} from '../../action';
import {useSelector ,useDispatch} from 'react-redux';
import ids from '../../uniqueId';
import './Header.css';
import reload from '../../static/reload.svg'

function Header(){

    const [task,setTask] = useState('')

    const {active,counter,tags} = useSelector(state=>state);
    const dispatch = useDispatch();
    
    const enterTask = (event) => {
        if(event.keyCode === 13 && task.length>0){
            event.preventDefault();
            let updatedTasks = [{
                title:task,
                uid:ids[counter]
            },...active];
            dispatch(updateActive(updatedTasks));
            dispatch(updateCounter);
            
            setTask('')
        }
    }

    const reset = () => {
        dispatch(updateActive([]));
        dispatch(updateCompleted([]));
        dispatch(resetCounter);
        dispatch(updateTags([]));
    }

    const filterClick = (event,tags) => {
        let tag = event.target.innerText;
        let newTags = tags.filter((t)=>t!==tag);
        
        dispatch(updateTags(newTags));
    }

    return (
        <div className="header">
            <div className="header-top">
                <div className="title">To do list</div>
                
                <div className="reset" onClick={reset}>
                    <img alt='reset' src={reload} />
                    <div>Reset all tasks</div>
                </div>
            </div>
            {/* INPUT TASK */}
            <div>
                <input className="input-task" value={task}  placeholder="+ Add a task" onKeyUp={(event)=>enterTask(event)}  onChange={(e)=>setTask(e.target.value)}/>
            </div>
        {tags.length>0 &&   
            <div className='filters'>
                {tags.map((t,i)=><div key={t+i} onClick={(event)=>filterClick(event,tags)}>{t}</div>)}
            </div>}
        </div>
    )
}

export default Header;