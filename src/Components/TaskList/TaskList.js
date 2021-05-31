import React, {useEffect,useState} from 'react';
import Task from './Task/Task'
import {useSelector ,useDispatch} from 'react-redux';
import {updateCompleted,updateActive} from '../../action'

import './TaskList.css';

function Header(){
    
    let {active,completed,tags} = useSelector(state => state);
    const dispatch = useDispatch();

    const [filterTask, setFilterTask] = useState(active);
    const [filterComp, setFilterComp] = useState(completed);

    useEffect(()=>{
        if(tags.length===0){
            setFilterTask(active);
            setFilterComp(completed);
            return;
        }
        let temp = active.filter((task)=>{
            let i = 0;
            while(i<tags.length){
                let tag = tags[i];
                i++;
                if(task.title.search(tag)!==-1) return true;    
            }
            return false;
        })

        let temp2 = completed.filter((task)=>{
            let i = 0;
            while(i<tags.length){
                let tag = tags[i];
                i++;
                if(task.title.search(tag)!==-1) return true;    
            }
            return false;
        })
        setFilterTask(temp)
        setFilterComp(temp2);
    },[active,tags])

    const handleComplete = (uid, title, isCompleted) => {
        
        if(isCompleted === false){
            let newCompleted = [{title, uid}, ...completed];
            let newTasks = active.filter((task,i)=> task.uid !== uid);
            dispatch(updateCompleted(newCompleted));
            dispatch(updateActive(newTasks));
        }
        else{
            let newTasks = [{title, uid}, ...active];
            let newCompleted = completed.filter((task,i)=> task.uid !== uid);
            dispatch(updateCompleted(newCompleted));
            dispatch(updateActive(newTasks));
        }
    }

    return (
        <div className="task-list">
            {/* Active Tasks */}
           {filterTask.map((task,i)=><Task key={task.uid} id={task.uid} task={task.title} completed={false} handleComplete={handleComplete}/>)}

           { completed.length>0 &&
               <div style={{marginTop:30,fontWeight:300,fontSize:24,color:'grey',backgroundColor:'white'}}>Completed</div>}

            {/* Completed Tasks */}
           {filterComp.map((task,i)=><Task  key={task.uid} id={task.uid} task={task.title} completed={true} handleComplete={handleComplete}/>)}
        </div>
    )
}

export default Header;