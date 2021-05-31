import React, {useState, useEffect, useRef} from 'react';
import ReactHtmlParser from 'react-html-parser'; 
import {useSelector, useDispatch} from 'react-redux';
import {updateTags, updateActive} from '../../../action';

import './Task.css';

function Task(props){
    const [taskName, setTaskName] = useState(props.task);
    const [spanElm,setSpanElm] = useState();
    const taskRef = useRef();

    var {active,completed,tags} = useSelector(state => state);

    const dispatch = useDispatch();
   
    useEffect(()=>{
        let name = '';
        let index = 0;
        let flag = false;
        while (index<taskName.length){
            if(taskName[index]==='#'  && ( index-1==0 || taskName[index-1]!=='>')){
                if(flag){
                    name+= '</span>'
                }
                flag = true;
                name += '<span id="task-filter">#'
            }
            else{
                if(taskName[index]===' ' && flag){
                    flag=false;
                    name+='</span> '
                }
                else{
                    name+=taskName[index]
                }
            }
            index+=1;
        }
        setTaskName(name);

        const temp = document.getElementsByTagName('span')
        
        setSpanElm(temp);

    },[props.task])

    const filterClick = (event,tags) => {
        let tag = event.target.innerText;
        let newTags = [];
        let flag = false;
        for(let i=0; i<tags.length; i++){
            if(tags[i]===tag){
                flag = true;
                break;
            }
        }
        
        if(flag){
            newTags = tags.filter((t)=>t!==tag);
        }
        else{
            newTags = [...tags,tag];
        }
        
        dispatch(updateTags(newTags));
    }

    useEffect(()=>{
        let index = 0;
        while(true && spanElm!==undefined){
            if(spanElm[index] === undefined) return;
            spanElm[index].addEventListener('click',(event)=>filterClick(event,tags))
            index++;
        }
    },[spanElm,tags])

    

    return (
        <div className="task">
            <div onClick={()=>props.handleComplete(props.id,props.task,props.completed)} className="complete-circle" style={{backgroundColor: props.completed ? '#2ECC71' : 'white', border: props.completed ? '' : '0.1px solid black'}}></div>
            <div ref={taskRef} className="task-name">{ ReactHtmlParser (taskName) }</div>
        </div>
    )
}

export default Task;