import { useState } from "react";
import './NavBar.css'

export default function NavBar() {
    const [login, setLogin] = useState(true);

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
                    <li class='navitem right user'><a href="#" onClick={handleUser}>Log Out</a></li>
                    <li class='navitem right user'><a href='/Report'>Reports</a></li>
                  </>
                ) : (
                  <>
                    <li class='navitem right sign'><a href='/signUp'>Sign Up</a></li>
                    <li class='navitem right login'><a href="#" onClick={handleUser}>Login</a></li>
                  </>
                )}
                <li class='navitem right'>Darkmode</li>
              </ul>  
            </nav>
    )
}