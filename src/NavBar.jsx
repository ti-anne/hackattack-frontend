import { useState } from "react";
import './NavBar.css'

export default function NavBar() {
    const [login, setLogin] = useState(false);

    const handleUser = () => {
      if (!login) {
        setLogin(true);
      } else {
        setLogin(false);
      }
    }

    return (
        <nav className="navbar">
            <ul className='navbar'>
                <li class='navitem left'><a href='/'>Home</a></li>
                <li class='navitem left'><a href='/tutorials'>Tutorials</a></li>
                <li class='navitem left'><a href='/resources'>Resources</a></li>
                {login ? (
                  <>
                    <li class='navitem right log'><button onClick={handleUser}>Log Out</button></li>
                    <li class='navitem right'><a href='/Reports'>Reports</a></li>
                  </>
                ) : (
                  <>
                    <li class='navitem right sign'><button onClick={handleUser}>Sign Up</button></li>
                    <li class='navitem right'><a href="/logIn">Login</a></li>
                  </>
                )}
                <li class='navitem right'>Darkmode</li>
              </ul>  
            </nav>
    )
}