import React, {useState} from 'react';
import Task from './Task/Task'
import './TaskList.css';

function Header(){
    

    return (
        <div className="task-list">
           {[1,2,3].map((v,i)=><Task completed={false}/>)}
           <div style={{marginTop:30,fontWeight:300,fontSize:24,color:'grey',backgroundColor:'white'}}>Completed</div>
           {[1,2].map((v,i)=><Task completed={true}/>)}
        </div>
    )
}

export default Header;