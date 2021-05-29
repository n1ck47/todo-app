import React, {useState, useEffect} from 'react';
import ReactHtmlParser from 'react-html-parser'; 

import './Task.css';

function Header(props){

    const [taskName, setTaskName] = useState('College Assignment #assignment & #test');

    useEffect(()=>{
        let name = '';
        let index = 0;
        let flag = false;
        while (index<taskName.length){
            if(taskName[index]==='#'){
                if(flag){
                    name+= '</span> <span>#'
                }
                flag = true;
                name += '<span>#'
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
    },[])

    return (
        <div className="task">
            <div className="complete-circle" style={{backgroundColor: props.completed ? '#2ECC71' : 'white', border: props.completed ? '' : '0.1px solid black'}}></div>
            {/* <div className="task-name" dangerouslySetInnerHTML={{__html:taskName}}></div> */}
            <div className="task-name">{ ReactHtmlParser (taskName) }</div>
            {console.log(props)}
        </div>
    )
}

export default Header;