import logo from './logo/logo.png'
import {useState} from 'react';

function Header() {
    const [title, setTitle] = useState("Vivek Kumar"); //this is a useState hook aka a reactive title
    //const home = "https://www.vivekmessikumar.com"
    const mywork = "https://www.vivekmessikumar.com/mywork"
    const about = "https://www.mywork.vivekmessikumar.com/about"
    const contact = "https://www.mywork.vivekmessikumar.com/contact"

    const handleClickHome = (e) =>{
        setTitle('messi');
        console.log("hello" + title);
    } // while calling clickHome() will automatically invoke without user clicking on it // use clickHome

    const handleClickMyWork = (name, e) =>{
        console.log("hello " + name);
    }
    return(
        <div className="nav" >
            <div className="nav-title">{title}<img src={logo} alt="daffodil"/></div>
            <div className="nav-buttons">
                <button onClick= {handleClickHome}> home </button>
                <button onClick={(e) => {handleClickMyWork("messi", e);}}> my work </button>
                <button onClick={about}> about </button>
                <button onClick={contact}> contact </button>
            </div>
        </div>
    );
}

export default Header;