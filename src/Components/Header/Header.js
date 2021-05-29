import React, {useState} from 'react';
import './Header.css';
import reload from '../../static/reload.svg'

function Header(){
    const [inp,setInp] = useState('')
    

    return (
        <div className="header">
            <div className="header-top">
                <div className="title">To do list</div>
                
                <div className="reset">
                    <img src={reload} />
                    <div>Reset all tasks</div>
                </div>
            </div>
            {/* INPUT TASK */}
            <div>
                <input className="input-task" value={inp}  placeholder="+ Add a task"  onChange={(e)=>setInp(e.target.value)}/>
            </div>
        </div>
    )
}

export default Header;