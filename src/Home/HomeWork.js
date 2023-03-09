import Work from './Work';
import { useState } from 'react';

function HomeWork() {
    const title = "My Work : ";
    const [workData, setWork] = useState([
        {preview:"", title : "1", desc : "desc 1", id : 1},
        {preview:"", title : "2", desc : "desc 2", id : 2},
        {preview:"", title : "3", desc : "desc 3", id : 3}
    ]);
    return (
        <div className="home-work">
            <div className="title">{title}</div>
            <Work workData = { workData }/>
        </div>
    );
    }

export default HomeWork;
